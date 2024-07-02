import { Card, CardHeader, CardFooter, Divider, Link } from "@nextui-org/react";

import { LoungeResponseDataObject } from "@/data/api/documentation";
import getGooglePlaceDetails from "@/data/lounge/getGooglePlaceDetails";

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
    <Card
      as={Link}
      className="max-w-[400px]"
      href={`/lounges/${airportCode}/${slug}`}
    >
      <CardHeader className="flex gap-3">
        <p className="text-xl text-center font-semibold w-full">
          {lounge?.attributes?.name}
        </p>
      </CardHeader>
      {/* <ImageCarousel placeImages={placeDetails.photos} /> */}
      <Divider />
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
