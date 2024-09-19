import { auth } from "@clerk/nextjs/server";

import LoungeCard from "@/components/lounges/LoungeCard";
import getAirportByCode from "@/data/airport/getAirportByCode";
import getLoungesByAirportCode from "@/data/lounge/getLoungesByAirportCode";

const AirportPage = async ({ params }: { params: { airport: string } }) => {
  const airport = await getAirportByCode(params.airport);
  const airportData = airport.data?.[0].attributes;
  const airportLounges = await getLoungesByAirportCode(params.airport);

  const terminals = Array.from(
    new Set(airportLounges?.data?.map((lounge) => lounge.attributes?.terminal))
  ).toSorted();

  const { userId, sessionClaims } = auth();

  const userCards: string[] =
    sessionClaims?.unsafeMetadata?.cardSelections || [];

  //  organize lounges by terminal

  return (
    <div>
      {airportData?.name}
      <div className="flex flex-col gap-6">
        {terminals.map((terminal) => {
          const lounges = airportLounges?.data?.filter(
            (lounge) => lounge.attributes?.terminal === terminal
          );
          return (
            <div key={terminal} className="">
              <h2>{terminal}</h2>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                {lounges?.map((lounge) => {
                  return (
                    <div key={lounge.id} className="">
                      <LoungeCard
                        key={lounge.id}
                        lounge={lounge}
                        userCards={userCards}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AirportPage;
