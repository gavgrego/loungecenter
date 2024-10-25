import LoungeCard from "./LoungeCard";

import getFeaturedLounges from "@/data/lounge/getFeaturedLounges";

type LoungeCardGroupProps = {
  heading: string;
  userCards: string[];
};

const LoungeCardGroup = async ({
  heading,
  userCards,
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
              userCards={userCards}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LoungeCardGroup;
