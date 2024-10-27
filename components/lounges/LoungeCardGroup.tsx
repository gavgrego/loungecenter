import LoungeCard from "./LoungeCard";
import { JwtPayload } from "@clerk/types";

import getFeaturedLounges from "@/data/lounge/getFeaturedLounges";

type LoungeCardGroupProps = {
  heading: string;
  sessionClaims: JwtPayload | null;
};

const LoungeCardGroup = async ({
  heading,
  sessionClaims,
}: LoungeCardGroupProps) => {
  const lounges = await getFeaturedLounges();

  return (
    <div>
      <h1 className="text-center mb-10">{heading}</h1>
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
};

export default LoungeCardGroup;
