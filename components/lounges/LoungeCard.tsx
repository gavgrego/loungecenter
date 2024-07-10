import { Card, CardHeader, CardFooter, Link, Tooltip } from "@nextui-org/react";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";

import { LoungeResponseDataObject } from "@/data/api/documentation";
import getGooglePlaceDetails from "@/data/lounge/getGooglePlaceDetails";
import ImageCarousel from "@/app/lounges/[airport]/[slug]/components/ImageCarousel";

type LoungeCardProps = {
  lounge: LoungeResponseDataObject;
};

const LoungeCard = async ({ lounge }: LoungeCardProps) => {
  const airportData = lounge.attributes?.airport?.data?.attributes;
  const location = lounge.attributes?.location;

  const slug = lounge.attributes?.slug;
  const googlePlaceId = lounge.attributes?.googlePlaceId;
  const placeDetails = await getGooglePlaceDetails(googlePlaceId as string);

  return (
    <Card isFooterBlurred className="max-w-[400px] relative overflow-visible">
      <Tooltip closeDelay={100} content="You have access to this lounge!">
        <SealCheck
          className="absolute -right-4 -top-4 z-10"
          color="green"
          size={40}
          weight="fill"
        />
      </Tooltip>
      <CardHeader className="flex flex-col gap-2">
        <Link color="secondary" href={`/lounges/${airportData?.code}/${slug}`}>
          <h2 className="text-xl text-center font-semibold w-full">
            {lounge?.attributes?.name}
          </h2>
        </Link>

        <div className="flex flex-row justify-between w-full items-center">
          <h3 className="text-sm font-medium">
            {airportData?.code} - 📍{location}
          </h3>

          <h3 className="text-sm font-medium">
            {airportData?.city}, {airportData?.country}
          </h3>
        </div>
      </CardHeader>
      <ImageCarousel
        className="my-3 [&_img]:max-h-[250px]"
        placeImages={placeDetails.photos}
      />
      {/* if lounge has card access */}
      <CardFooter>
        {placeDetails.currentOpeningHours.openNow ? (
          <div className="flex flex-row gap-3 items-center">
            <div className="w-3 h-3 bg-green-600 rounded-full" />
            Open Now!
          </div>
        ) : (
          <div className="flex flex-row gap-3 items-center">
            <div className="w-3 h-3 bg-red-600 rounded-full" />
            <div>Currently Closed</div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default LoungeCard;
