import { HTMLAttributes } from "react";

import { LoungeResponseDataObject } from "@/data/api/documentation";
import LoungeCard from "@/components/lounges/LoungeCard";

type OtherLoungesProps = HTMLAttributes<HTMLDivElement> & {
  airport: string;
  lounges: LoungeResponseDataObject[];
  userCards: string[];
};

const OtherLounges = ({
  lounges,
  airport,
  userCards,
  ...props
}: OtherLoungesProps) => {
  return (
    <div {...props}>
      <h2>Other Lounges at {airport}:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-evenly content-evenly justify-items-center items-center mt-6">
        {lounges.map((lounge) => {
          return (
            <LoungeCard
              key={lounge.id}
              className="w-full"
              lounge={lounge}
              userCards={userCards}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OtherLounges;
