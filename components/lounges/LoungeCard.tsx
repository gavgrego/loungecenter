import { Card, CardHeader, CardFooter, Link, Tooltip } from "@nextui-org/react";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";

import { LoungeResponseDataObject } from "@/data/api/documentation";
import getGooglePlaceDetails from "@/data/lounge/getGooglePlaceDetails";
import ImageCarousel from "@/app/lounges/[airport]/[slug]/components/ImageCarousel";

type LoungeCardProps = {
  lounge: LoungeResponseDataObject;
};

const LoungeCard = async ({ lounge }: LoungeCardProps) => {
  // const firstImage = lounge.attributes?.images?.data?.[0]?.attributes?.url;
  const airportCode = lounge.attributes?.airport?.data?.attributes?.code;
  const slug = lounge.attributes?.slug;
  const googlePlaceId = lounge.attributes?.googlePlaceId;
  const placeDetails = await getGooglePlaceDetails(googlePlaceId as string);

  return (
    <Card className="max-w-[400px] relative overflow-visible">
      <Link color="secondary" href={`/lounges/${airportCode}/${slug}`}>
        <Tooltip closeDelay={100} content="You've got access to this lounge!">
          <SealCheck
            className="absolute -right-4 -top-4 z-10"
            color="green"
            size={40}
            weight="fill"
          />
        </Tooltip>
        <CardHeader className="flex gap-3">
          <h3 className="text-xl text-center font-semibold w-full">
            {lounge?.attributes?.name}
          </h3>
        </CardHeader>
      </Link>
      <ImageCarousel className="my-3" placeImages={placeDetails.photos} />
      {/* if lounge has card access */}
      <CardFooter>
        <p className="text-xs font-medium tracking-wider">GET IN WITH:</p>
        <div className="flex flex-row gap-2" />
      </CardFooter>
      {/*  */}
    </Card>
  );
};

export default LoungeCard;
