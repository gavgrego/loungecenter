import { Card, CardHeader, CardFooter, Link, Tooltip } from "@nextui-org/react";
import { SealCheck } from "@phosphor-icons/react/dist/ssr";

import { LoungeResponseDataObject } from "@/data/api/documentation";
import getGooglePlaceDetails from "@/data/lounge/getGooglePlaceDetails";
import ImageCarousel from "@/app/lounges/[airport]/[slug]/components/ImageCarousel";

type LoungeCardProps = {
  lounge: LoungeResponseDataObject;
  userCards: string[];
  className?: string;
};

const LoungeCard = async ({
  lounge,
  userCards,
  className
}: LoungeCardProps) => {
  const airportData = lounge.attributes?.airport?.data?.attributes;
  const location = lounge.attributes?.terminal;
  const cards = lounge.attributes?.cards?.data || [];

  const slug = lounge.attributes?.slug;
  const googlePlaceId = lounge.attributes?.googlePlaceId;
  const placeDetails = await getGooglePlaceDetails(googlePlaceId as string);

  const hasMatchingCard = userCards?.some((userCard) =>
    cards.find((card) => String(card.id) == userCard)
  );

  const hasLoungeAccess = hasMatchingCard;

  return (
    <Link
      href={`/lounges/${airportData?.code}/${slug}`}
      className="max-w-[400px] w-full h-full"
    >
      <Card
        shadow="lg"
        className={`relative overflow-visible h-full ${className} transform sm:hover:scale-105 transition-all bg-foreground-50`}
      >
        {hasLoungeAccess ? (
          <Tooltip closeDelay={100} content="You have access to this lounge!">
            <SealCheck
              className="absolute -right-4 -top-4 z-10"
              color="green"
              size={40}
              weight="fill"
            />
          </Tooltip>
        ) : null}
        <div className="flex flex-col justify-between h-full">
          <div>
            <CardHeader className="flex flex-col gap-2">
              <h2 className="text-xl text-center font-semibold w-full text-secondary-600">
                {lounge?.attributes?.name}
              </h2>

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
              className="my-3 [&_img]:max-h-[250px] cursor-pointer"
              placeImages={placeDetails?.photos || []}
            />
          </div>

          {/* if lounge has card access */}
          <CardFooter>
            {placeDetails?.currentOpeningHours?.openNow ? (
              <div className="flex flex-row gap-3 items-center animate-bounce">
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
        </div>
      </Card>
    </Link>
  );
};

export default LoungeCard;
