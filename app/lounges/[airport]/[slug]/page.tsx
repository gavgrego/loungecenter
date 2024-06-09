import LoungeSidebar from "./sidebar";
import ImageCarousel from "./components/ImageCarousel";

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
      <div className="flex flex-row gap-10">
        <div className="md:basis-2/3">
          <h1 className="text-5xl font-semibold">{loungeData?.name}</h1>
          <div className="flex flex-row gap-3">
            <h2>{airportData?.name}</h2>
            <h2>{airportData?.city}</h2>
            {airportData?.state ? <h2>{airportData?.state}</h2> : ""}
            <h2>{airportData?.country}</h2>
          </div>
          <h3>{airportData?.code}</h3>

          <ImageCarousel placeImages={placeImages} />
        </div>

        <aside className="md:basis-1/3 sticky">
          <LoungeSidebar loungeData={loungeData} placeDetails={placeDetails} />
        </aside>
      </div>
    </>
  );
};

export default LoungePage;
