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
      <div className="flex flex-row gap-4 items-start mt-6">
        {lounges.map((lounge) => {
          return (
            <LoungeCard key={lounge.id} lounge={lounge} userCards={userCards} />
          );
        })}
      </div>
    </div>
  );
};

export default OtherLounges;
