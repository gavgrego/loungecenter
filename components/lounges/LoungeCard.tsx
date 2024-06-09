import { LoungeResponseDataObject } from "@/data/api/documentation";
import { Card, CardHeader, CardFooter, Divider, Link } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

type LoungeCardProps = {
  lounge: LoungeResponseDataObject;
};

const LoungeCard = ({ lounge }: LoungeCardProps) => {
  const firstImage = lounge.attributes?.images?.data?.[0]?.attributes?.url;
  const airportCode = lounge.attributes?.airport?.data?.attributes?.code;
  const slug = lounge.attributes?.slug;

  return (
    <Card
      className="max-w-[400px]"
      as={Link}
      href={`/lounges/${airportCode}/${slug}`}
    >
      <CardHeader className="flex gap-3">
        <p className="text-xl text-center font-semibold w-full">
          {lounge?.attributes?.name}
        </p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={firstImage}
      />
      <Divider />
      {/* if lounge has card access */}
      <CardFooter>
        <p className="text-sm font-semibold tracking-wider">GET IN WITH:</p>
        <div className="flex flex-row gap-2"></div>
      </CardFooter>
      {/*  */}
    </Card>
  );
};

export default LoungeCard;
