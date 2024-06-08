import getLoungeBySlug from "@/data/lounge/getLoungeBySlug";
import LoungeSidebar from "./sidebar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const LoungePage = async ({ params }: { params: { slug: string } }) => {
  const lounge = await getLoungeBySlug(params.slug);
  const loungeData = lounge.data?.[0].attributes ?? {};
  const loungeImages = loungeData.images?.data;
  const airportData = loungeData.airport?.data?.attributes ?? {};

  return (
    <>
      <div className="relative">
        <Carousel
          opts={{
            loop: true,
          }}
          className="max-h-[500px]"
        >
          <CarouselContent className="-ml-4">
            {loungeImages?.map((image) => {
              return (
                <CarouselItem
                  className="pl-4 md:basis-1/4 lg:basis-1/3"
                  key={image.id}
                >
                  <Image
                    alt={image.attributes?.name as string}
                    width={image.attributes?.width}
                    height={image.attributes?.height}
                    src={image.attributes?.url as string}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex flex-row gap-10">
        <div className="md:basis-2/3">
          <h1>{loungeData.name}</h1>
          <div className="flex flex-row gap-3">
            <h2>{airportData.name}</h2>
            <h2>{airportData.city}</h2>
            {airportData.state ? <h2>{airportData.state}</h2> : ""}
            <h2>{airportData.country}</h2>
          </div>
          <h3>{airportData.code}</h3>
        </div>

        <aside className="md:basis-1/3">
          <LoungeSidebar />
        </aside>
      </div>
    </>
  );
};

export default LoungePage;
