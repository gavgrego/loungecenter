import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import { CardProps } from "@nextui-org/react";
import Link from "next/link";

import { AirportResponseDataObject } from "@/data/api/documentation";

type AirportCardProps = {
  airport: AirportResponseDataObject;
} & CardProps;
//
//
//
// Need to consolidate this and lounge card api and compositionally pass content as child
const AirportCard = ({ airport, className, ...props }: AirportCardProps) => {
  return (
    <Link
      className="max-w-[400px] w-full "
      href={`/lounges/${airport.attributes?.code}`}
    >
      <Card
        className={`relative overflow-visible h-full ${className} transform sm:hover:scale-105 transition-all bg-foreground-50`}
        shadow="lg"
        {...props}
      >
        <CardHeader className="text-center flex-col">
          <h2 className="text-lg">{airport?.attributes?.name}</h2>
          <h3 className="text-8xl text-secondary-300 pl-4">
            {airport?.attributes?.code}
          </h3>
        </CardHeader>
        <CardFooter>
          <div className="flex flex-row justify-between w-full">
            <p className="text-left">📍 {airport?.attributes?.city}</p>

            <p className="text-right">
              <strong>{airport?.attributes?.country}</strong>
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default AirportCard;
