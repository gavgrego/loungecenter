import { auth } from "@clerk/nextjs/server";

import LoungeCard from "@/components/lounges/LoungeCard";
import getFeaturedLounges from "@/data/lounge/getFeaturedLounges";
import Search from "@/components/search/Search";
import getAllLounges from "@/data/lounge/getAllLounges";
import AllLoungesTable from "./components/AllLoungesTable";
import { Suspense } from "react";
import { Skeleton } from "@nextui-org/react";
import LoungeCardGroup from "@/components/lounges/LoungeCardGroup";

const LoungesPage = async () => {
  const { sessionClaims } = auth();

  const lounges = await getFeaturedLounges();
  const allLounges = await getAllLounges();

  // if card.id in cards exists in metadata, then card is available
  const userCards: string[] =
    sessionClaims?.unsafeMetadata?.cardSelections || [];

  return (
    <div>
      <Search placeholder="Find a lounge or airport..." />
      <h1 className="text-center mb-10">Popular Lounges</h1>
      <LoungeCardGroup heading="Popular Lounges" userCards={userCards} />
      <h2 className="text-center mt-20 mb-8 text-4xl">All Lounges</h2>

      <Suspense
        fallback={
          <Skeleton className="rounded-lg">
            <div className="h-[400px] rounded-lg bg-default-300"></div>
          </Skeleton>
        }
      >
        <AllLoungesTable
          lounges={allLounges || []}
          sessionClaims={sessionClaims}
        />
      </Suspense>
    </div>
  );
};

export default LoungesPage;
