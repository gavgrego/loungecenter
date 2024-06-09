import { Image } from "@nextui-org/react";

import LoungeSidebar from "./sidebar";

import getLoungeBySlug from "@/data/lounge/getLoungeBySlug";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import getGooglePlaceDetails from "@/data/lounge/getGooglePlaceDetails";
import getGoogleImage from "@/data/lounge/getGoogleImage";

const LoungePage = async ({ params }: { params: { slug: string } }) => {
  const lounge = await getLoungeBySlug(params.slug);
  const loungeData = lounge.data?.[0].attributes ?? {};
  const airportData = loungeData.airport?.data?.attributes ?? {};
  const placeDetails = await getGooglePlaceDetails(
    "ChIJ50Ol8ZB3j4AR7_jVRf4jm64",
  );
  const placeImages = placeDetails.photos;
  const fetchedImage = await getGoogleImage(
    "places/ChIJ50Ol8ZB3j4AR7_jVRf4jm64/photos/AUc7tXX2Kki5EJpoJ38WyD3K5VhRSGt2ToqpSvaS3cs47O32etl-5oS2FLww5WCtiYkf8Suwp5kC4qPCtBTNyLJcmr_4OG_GILpftORWjXTrmXFtdKqNijcOa1OOgCbA10UpFbSEYFhoeiTW09ahXhewnvP4gj9mrU51d0iH",
  );

  return (
    <>
      <div className="flex flex-row gap-10">
        <div className="md:basis-2/3 ">
          <h1 className="text-5xl font-semibold">{loungeData.name}</h1>
          <div className="flex flex-row gap-3">
            <h2>{airportData.name}</h2>
            <h2>{airportData.city}</h2>
            {airportData.state ? <h2>{airportData.state}</h2> : ""}
            <h2>{airportData.country}</h2>
          </div>
          <h3>{airportData.code}</h3>

          <Carousel
            className="max-h-[500px] mt-8"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 ">
              {placeImages?.map(async (image) => {
                const fetchedImage = await getGoogleImage(image.name as string);

                return (
                  <CarouselItem key={image.name} className="pl-4 md:basis-1/2">
                    <Image
                      alt={image?.name as string}
                      height={image?.heightPx}
                      src={fetchedImage?.photoUri as string}
                      width={image?.widthPx}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        <aside className="md:basis-1/3 sticky">
          <LoungeSidebar loungeData={loungeData} placeDetails={placeDetails} />
        </aside>
      </div>
    </>
  );
};

export default LoungePage;
