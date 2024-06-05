import { LoungeResponseDataObject } from "@/data/api/documentation";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

type LoungeCardProps = {
  lounge: LoungeResponseDataObject;
};

const LoungeCard = ({ lounge }: LoungeCardProps) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">{lounge?.attributes?.name}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        Get in With:
        <div className="flex flex-row gap-2"></div>
      </CardFooter>
    </Card>
  );
};

export default LoungeCard;
