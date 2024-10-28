import { HTMLAttributes } from "react";
import { auth } from "@clerk/nextjs/server";

import LoungeCard from "@/components/lounges/LoungeCard";
import getOtherLounges from "@/data/lounge/getOtherLounges";

type OtherLoungesProps = HTMLAttributes<HTMLDivElement> & {
  currentLounge: number;
  airport: string;
  userCards: string[];
};

const OtherLounges = async ({
  currentLounge,
  airport,
  userCards,
  ...props
}: OtherLoungesProps) => {
  const otherLounges = await getOtherLounges(airport, currentLounge);
  const { sessionClaims } = auth();

  return (
    otherLounges.length > 0 && (
      <div {...props}>
        <h2>Other Lounges at {airport}:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-evenly content-evenly justify-items-center items-center mt-6">
          {otherLounges.map((lounge) => {
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
    )
  );
};

export default OtherLounges;
