import { Divider, Image, Link, Tooltip } from "@nextui-org/react";
import { auth } from "@clerk/nextjs/server";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import dayjs from "dayjs";

import Notes from "./components/Notes";
import DirectionsAndMap from "./components/DirectionsAndMap";
import OtherLounges from "./components/OtherLounges";
import LoungeSidebar from "./sidebar";
import ImageCarousel from "./components/ImageCarousel";
import IconList from "./components/IconList";
import TrafficChart from "./components/TrafficChart";

import getLoungeBySlug from "@/data/lounge/getLoungeBySlug";
import getOtherLounges from "@/data/lounge/getOtherLounges";
import getGooglePlaceDetails from "@/data/lounge/getGooglePlaceDetails";
import getTrafficData from "@/data/lounge/getTrafficData";
import getLiveTrafficData from "@/data/lounge/getLiveTrafficData";
import TrafficExample from "@/public/traffic-example.jpg";
export type ChartData = { name: string; average: number; live: number }[];

const LoungePage = async ({ params }: { params: { slug: string } }) => {
  const { userId, sessionClaims } = auth();

  const lounge = await getLoungeBySlug(params.slug);
  const loungeData = lounge.data?.[0].attributes;
  const amenities = loungeData?.amenities?.data || [];
  const detriments = loungeData?.detriments?.data || [];
  const cards = loungeData?.cards?.data || [];
  // if card.id in cards exists in metadata, then card is available
  const userCards = sessionClaims?.unsafeMetadata?.cardSelections || [];

  const hasMatchingCard = userCards.some((userCard) =>
    cards.find((card) => card.id == userCard)
  );
  const hasPriorityPass = sessionClaims?.unsafeMetadata?.hasPriorityPass;

  const hasLoungeAccess = hasMatchingCard || hasPriorityPass;

  const placeDetails = await getGooglePlaceDetails(
    loungeData?.googlePlaceId as string
  );

  // dayjs starts the week on Sunday (0), but where we are sending this (TrafficChart)
  // starts the week on Monday (0), so we need to subtract 1
  let dayOfWeek = dayjs().day() - 1;

  if (dayOfWeek === -1) {
    dayOfWeek = 6;
  }

  const todaysOpen =
    placeDetails.currentOpeningHours?.periods[dayOfWeek].open.hour;

  const otherLounges = await getOtherLounges(
    loungeData?.airport?.data?.attributes?.code as string,
    lounge.data?.[0].id as number
  );

  let filteredChartData: ChartData = [];

  // only fetch traffic data if the user is logged in
  if (userId) {
    const trafficData = await getTrafficData({
      name: String(loungeData?.name),
      address: String(placeDetails.formattedAddress),
    });

    const liveTrafficData = await getLiveTrafficData({
      name: String(loungeData?.name),
      address: String(placeDetails.formattedAddress),
    });

    // The endpoint returns hourly data starting at 6AM for the current day, and ending
    // at 5AM the next day.  Unfortunate, but we will just use tomorrow's 5AM hour for today
    // in order to prevent two fetches for one day, and 5AM shouldn't matter too much day-to-day
    const hoursData = trafficData.analysis.day_raw;
    const fiveAm = hoursData.pop() as number;

    // take tomorrow's 5AM data and put it at the beginning of the today
    hoursData.unshift(fiveAm);
    const chartData: ChartData = [];

    hoursData.map((value, i) => {
      const hour = i + todaysOpen;

      // if hour is "now", fetch the live data and append it to the chartData

      if (dayjs().hour() == hour) {
        chartData.push({
          name: `${hour}:00`,
          average: value,
          live: liveTrafficData.analysis.venue_live_busyness
            ? liveTrafficData.analysis.venue_live_busyness
            : liveTrafficData.analysis.venue_forecasted_busyness,
        });
      } else {
        chartData.push({
          name: `${hour}:00`,
          average: value,
          live: 0,
        });
      }
    });

    filteredChartData = chartData.filter((hour) => hour.average !== 0);
  }

  // add support for additional photos added via strapi, if there are any
  const placeImages = placeDetails.photos;
  const airportData = loungeData?.airport?.data?.attributes;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="basis-full md:basis-2/3">
          <div className="flex flex-row gap-4 items-center">
            <h1 className="text-4xl font-semibold">{loungeData?.name}</h1>
            {hasLoungeAccess ? (
              <Tooltip
                closeDelay={100}
                content="You have access to this lounge!"
              >
                <SealCheck color="green" size={50} weight="fill" />
              </Tooltip>
            ) : null}
          </div>
          <div className="flex flex-row gap-2">
            <Link color="secondary" href={`/lounges/${airportData?.code}`}>
              <h2 className="text-xl font-semibold mb-1">
                {airportData?.code}
              </h2>
            </Link>
            <h2 className="text-xl font-semibold mb-1">
              - 📍{loungeData?.location}
            </h2>
          </div>

          <h2 className="flex flex-row text-sm">
            <span>
              {airportData?.name} &mdash; {airportData?.city},&nbsp;
            </span>
            <span>{airportData?.state ? airportData?.state : ""},&nbsp;</span>
            <span>{airportData?.country}</span>
          </h2>

          <ImageCarousel
            className="my-8 [&_img]:max-h-[500px]"
            placeImages={placeImages}
          />
          <Divider className="my-4" />

          <div>{loungeData?.description}</div>

          {loungeData?.notes ? (
            <>
              <Divider className="my-5" />

              <h3 className="mb-2">❗ Important Info:</h3>
              <Notes markdown={loungeData?.notes} />
            </>
          ) : null}
          {loungeData?.guest && (
            <>
              <Divider className="my-5" />
              <h3 className="mb-2">👫 Guest Access:</h3>
              <p>{loungeData?.guest}</p>
            </>
          )}

          <Divider className="my-5" />

          {loungeData?.directions ? (
            <>
              <h3 className="mb-2">🚶 Walking Directions:</h3>
              <p>{loungeData?.directions}</p>

              <Divider className="my-5" />
            </>
          ) : null}

          {amenities && amenities.length > 0 && (
            <>
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <h3>🌟 Amenities:</h3>
                  <IconList items={amenities} />
                </div>
                <div className="col-span-1">
                  <h3>☔ Detriments:</h3>
                  <IconList items={detriments} />
                </div>
              </div>
              <Divider className="my-5" />
            </>
          )}

          {userId ? (
            <>
              <h3 className="mb-4">Live Foot Traffic:</h3>
              <TrafficChart chartData={filteredChartData} />
            </>
          ) : (
            <>
              <Link className="mb-2" color="secondary" href="/go-pro">
                <h3>Unlock Live Foot Traffic with a Pro Account!</h3>
              </Link>

              <Tooltip
                closeDelay={100}
                content="This is just a visual representation of live foot traffic.  Unlock for every lounge with a Pro membership!"
              >
                <Image src={TrafficExample.src} />
              </Tooltip>
            </>
          )}

          <Divider className="my-5" />

          <DirectionsAndMap loungeData={loungeData} />

          {otherLounges && otherLounges.length > 0 && (
            <OtherLounges
              airport={airportData?.code as string}
              className="mt-14"
              lounges={otherLounges}
              userCards={userCards}
            />
          )}
        </div>

        <aside className="basis-full md:basis-1/3 md:sticky md:top-16">
          <LoungeSidebar
            loungeData={loungeData}
            placeDetails={placeDetails}
            userId={userId}
          />
        </aside>
      </div>
    </>
  );
};

export default LoungePage;
