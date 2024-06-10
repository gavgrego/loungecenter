import { Suspense } from "react";
import { CircularProgress, Divider } from "@nextui-org/react";

import LoungeSidebar from "./sidebar";
import ImageCarousel from "./components/ImageCarousel";
import Notes from "./components/Notes";
import DirectionsAndMap from "./components/DirectionsAndMap";

import getLoungeBySlug from "@/data/lounge/getLoungeBySlug";
import getGooglePlaceDetails from "@/data/lounge/getGooglePlaceDetails";

const LoungePage = async ({ params }: { params: { slug: string } }) => {
  const lounge = await getLoungeBySlug(params.slug);
  const loungeData = lounge.data?.[0].attributes;
  const placeDetails = await getGooglePlaceDetails(
    String(loungeData?.googlePlaceId),
  );

  const placeImages = placeDetails.photos;
  const airportData = loungeData?.airport?.data?.attributes;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="basis-full md:basis-2/3">
          <h1 className="text-4xl font-semibold">{loungeData?.name}</h1>
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
          <Suspense fallback={<CircularProgress />}>
            <ImageCarousel placeImages={placeImages} />
          </Suspense>
          <Divider className="my-5" />
          <div>{loungeData?.description}</div>
          <Divider className="my-5" />
          {loungeData?.notes ? (
            <>
              <h3 className="mb-2">Important Info:</h3>
              <Notes markdown={loungeData?.notes} />
            </>
          ) : null}
          <Divider className="my-5" />
          <DirectionsAndMap loungeData={loungeData} />

          {/* OTHER LOUNGES AT XYZ AIRPORT? */}
        </div>

        <aside className="basis-full md:basis-1/3 md:sticky md:top-20">
          <LoungeSidebar loungeData={loungeData} placeDetails={placeDetails} />
        </aside>
      </div>
    </>
  );
};

export default LoungePage;
