import { Divider, Tooltip } from "@nextui-org/react";
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

const LoungePage = async ({ params }: { params: { slug: string } }) => {
  const { userId } = auth();

  const lounge = await getLoungeBySlug(params.slug);
  const loungeData = lounge.data?.[0].attributes;
  const amenities = loungeData?.amenities?.data || [];
  const detriments = loungeData?.detriments?.data || [];

  const placeDetails = await getGooglePlaceDetails(
    loungeData?.googlePlaceId as string
  );

  // dayjs starts the week on Sunday (0), but where we are sending this (TrafficChart)
  // starts the week on Monday (0), so we need to subtract 1
  const dayOfWeek = dayjs().day() - 1;
  const todaysOpen =
    placeDetails.currentOpeningHours.periods[dayOfWeek].open.hour;
  const todaysClose =
    placeDetails.currentOpeningHours.periods[dayOfWeek].close.hour;

  const otherLounges = await getOtherLounges(
    loungeData?.airport?.data?.attributes?.code as string,
    lounge.data?.[0].id as number
  );

  const trafficData = await getTrafficData({
    name: String(loungeData?.name),
    address: String(placeDetails.formattedAddress),
  });

  console.log(trafficData);

  // add support for additional photos added via strapi, if there are any
  const placeImages = placeDetails.photos;
  const airportData = loungeData?.airport?.data?.attributes;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="basis-full md:basis-2/3">
          <div className="flex flex-row gap-4 items-center">
            <h1 className="text-4xl font-semibold">{loungeData?.name}</h1>
            <Tooltip closeDelay={100} content="You have access to this lounge!">
              <SealCheck color="green" size={50} weight="fill" />
            </Tooltip>
          </div>
          <h2 className="text-xl font-semibold mb-1">
            {airportData?.code} - 📍{loungeData?.location}
          </h2>
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

          <Divider className="my-5" />
          {loungeData?.notes ? (
            <>
              <h3 className="mb-2">❗ Important Info:</h3>
              <Notes markdown={loungeData?.notes} />
            </>
          ) : null}
          {loungeData?.guest && (
            <>
              <Divider className="my-5" />
              <h3>👫 Guest Access:</h3>
              <p>{loungeData?.guest}</p>
            </>
          )}

          <Divider className="my-5" />

          <h3>🚶 Walking Directions:</h3>
          <p>{loungeData?.directions}</p>

          <Divider className="my-5" />

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

          {userId ? (
            <div>
              <h3>Live Foot Traffic:</h3>
              <TrafficChart
                closeHour={todaysClose}
                openHour={todaysOpen}
                trafficData={trafficData}
              />
            </div>
          ) : null}

          <Divider className="my-5" />

          <DirectionsAndMap loungeData={loungeData} />

          {otherLounges && otherLounges.length > 0 && (
            <OtherLounges
              airport={airportData?.code as string}
              className="mt-14"
              lounges={otherLounges}
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
