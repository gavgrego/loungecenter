import { auth } from "@clerk/nextjs/server";

import LoungeCard from "@/components/lounges/LoungeCard";
import getFeaturedLounges from "@/data/lounge/getFeaturedLounges";
import Search from "@/components/search/Search";

const LoungesPage = async () => {
  const { userId, sessionClaims } = auth();

  // not sure how to best approach
  const lounges = await getFeaturedLounges();

  // if card.id in cards exists in metadata, then card is available
  const userCards: string[] =
    sessionClaims?.unsafeMetadata?.cardSelections || [];

  return (
    <div>
      <div className="mb-10  flex justify-center">
        <Search placeholder="Find a lounge or airport..." />
      </div>
      <h1 className="text-center mb-10">Popular Lounges</h1>
      <div className="grid grid-cols-3 gap-8">
        {lounges?.map((lounge) => {
          return (
            <LoungeCard key={lounge.id} lounge={lounge} userCards={userCards} />
          );
        })}
      </div>
      {/* ALL LOUNGES TABLE */}
      {/* ALLOW FILTERING */}
    </div>
  );
};

export default LoungesPage;
