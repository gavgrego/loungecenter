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
const AirportCard = ({ airport, ...props }: AirportCardProps) => {
  return (
    <Link
      className="max-w-[400px] w-full "
      href={`/lounges/${airport.attributes?.code}`}
    >
      <Card
        className={`relative overflow-visible h-full ${props.className} transform sm:hover:scale-105 transition-all bg-foreground-50`}
        shadow="lg"
        {...props}
      >
        <CardHeader className="text-center">
          <h2 className="text-lg">{airport?.attributes?.name}</h2>
          <h3 className="text-8xl text-secondary-300 pl-4">
            {airport?.attributes?.code}
          </h3>
        </CardHeader>
        <CardFooter>
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row text-right">
              <p>📍 {airport?.attributes?.city}</p>
              {airport?.attributes?.state && (
                <p>, {airport?.attributes?.state}</p>
              )}
            </div>

            <p>
              <strong>{airport?.attributes?.country}</strong>
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default AirportCard;
