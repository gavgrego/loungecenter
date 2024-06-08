import { LoungeResponseDataObject } from "@/data/api/documentation";
import { Card, CardHeader, CardFooter, Divider, Link } from "@nextui-org/react";

type LoungeCardProps = {
  lounge: LoungeResponseDataObject;
};

const LoungeCard = ({ lounge }: LoungeCardProps) => {
  const airportCode = lounge.attributes?.airport?.data?.attributes?.code;
  const slug = lounge.attributes?.slug;

  return (
    <Card
      className="max-w-[400px]"
      as={Link}
      href={`/lounges/${airportCode}/${slug}`}
    >
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{lounge?.attributes?.name}</p>
        </div>
      </CardHeader>
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
