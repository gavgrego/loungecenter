import { Image } from "@nextui-org/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import getGoogleImage from "@/data/lounge/getGoogleImage";
type ImageCarouselProps = {
  placeImages: { name: string; heightPx: number; widthPx: number }[];
};

const ImageCarousel = ({ placeImages }: ImageCarouselProps) => {
  return (
    <Carousel
      className="max-h-[500px] my-8"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4 ">
        {placeImages?.map(async (image) => {
          const fetchedImage = await getGoogleImage(image.name);

          return (
            <CarouselItem key={image.name} className="pl-4 md:basis-1/2">
              <Image
                alt={image?.name}
                aria-label={image?.name}
                height={image?.heightPx}
                src={fetchedImage?.photoUri}
                width={image?.widthPx}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageCarousel;
