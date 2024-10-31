import type { Metadata } from "next";

import { auth } from "@clerk/nextjs/server";

import LoungeCard from "@/components/lounges/LoungeCard";
import getAirportByCode from "@/data/airport/getAirportByCode";
import getLoungesByAirportCode from "@/data/lounge/getLoungesByAirportCode";
import { Divider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Lounge Center - Airports",
  description: "Find and filter all lounges, check your access, and more.",
};

const AirportPage = async ({ params }: { params: { airport: string } }) => {
  const airport = await getAirportByCode(params.airport);
  const airportData = airport.data?.[0].attributes;
  const airportLounges = await getLoungesByAirportCode(params.airport);

  const terminals = Array.from(
    new Set(airportLounges?.data?.map((lounge) => lounge.attributes?.terminal))
  ).toSorted();

  const { sessionClaims } = auth();

  return (
    <section className="flex flex-col justify-center gap-4 pt-4 pb-8 md:py-10">
      <h1>
        {airportData?.name} - ({airportData?.code})
      </h1>
      <Divider className="my-4" />
      <div className="flex flex-col gap-10">
        {terminals.map((terminal) => {
          const lounges = airportLounges?.data?.filter(
            (lounge) => lounge.attributes?.terminal === terminal
          );

          return (
            <div key={terminal}>
              {/* need to extend <LoungeCardGroup /> api a bit better so this can fit in */}
              <h2 className="mb-4">{terminal}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-evenly content-evenly justify-items-center items-center">
                {lounges?.map((lounge) => {
                  return (
                    <LoungeCard
                      key={lounge.id}
                      className="w-full"
                      lounge={lounge}
                      sessionClaims={sessionClaims}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AirportPage;
