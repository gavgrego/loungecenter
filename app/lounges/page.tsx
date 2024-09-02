import { auth } from "@clerk/nextjs/server";

import LoungeCard from "@/components/lounges/LoungeCard";
import getFeaturedLounges from "@/data/lounge/getFeaturedLounges";
import Search from "@/components/search/Search";
import getAllLounges from "@/data/lounge/getAllLounges";
import AllLoungesTable from "./components/AllLoungesTable";
import { Suspense } from "react";
import { CircularProgress } from "@nextui-org/react";

const LoungesPage = async () => {
  const { userId, sessionClaims } = auth();

  // not sure how to best approach
  const lounges = await getFeaturedLounges();
  const allLounges = await getAllLounges();

  // if card.id in cards exists in metadata, then card is available
  const userCards: string[] =
    sessionClaims?.unsafeMetadata?.cardSelections || [];

  return (
    <div>
      <div className="mb-10  flex justify-center">
        <Search placeholder="Find a lounge or airport..." />
      </div>
      <h1 className="text-center mb-10">Popular Lounges</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-evenly content-evenly justify-items-center items-center">
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
      <Suspense fallback={<CircularProgress />}>
        <AllLoungesTable lounges={allLounges!} />
      </Suspense>
    </div>
  );
};

export default LoungesPage;
