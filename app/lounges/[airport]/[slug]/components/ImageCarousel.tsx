import { Image } from "@nextui-org/react";
import { HTMLAttributes } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import getGoogleImage from "@/data/lounge/getGoogleImage";
type ImageCarouselProps = HTMLAttributes<HTMLDivElement> & {
  placeImages: { name: string; heightPx: number; widthPx: number }[];
};

const ImageCarousel = ({ placeImages, className }: ImageCarouselProps) => {
  return (
    <div className={className}>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="-ml-3 ">
          {placeImages?.map(async (image) => {
            const fetchedImage = await getGoogleImage(image.name);

            return (
              <CarouselItem
                key={image.name}
                className="pl-3 md:basis-1/2 cursor-grab"
              >
                <Image
                  alt={image?.name}
                  aria-label={image?.name}
                  className="object-cover w-full h-full"
                  height={image?.heightPx}
                  src={fetchedImage?.photoUri}
                  width={image?.widthPx}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
