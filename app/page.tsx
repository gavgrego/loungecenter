import LoungeCard from "@/components/lounges/LoungeCard";
import LoungeCardGroup from "@/components/lounges/LoungeCardGroup";
import Search from "@/components/search/Search";
import getFeaturedLounges from "@/data/lounge/getFeaturedLounges";
import { auth } from "@clerk/nextjs/server";
import { Skeleton } from "@nextui-org/react";
import { Suspense } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lounge Center - Global Airport Lounges",
  description:
    "Find global airport lounge information, check your access, and more."
};

const Home = async () => {
  const { sessionClaims } = auth();

  // if card.id in cards exists in metadata, then card is available
  const userCards: string[] =
    sessionClaims?.unsafeMetadata?.cardSelections || [];

  const lounges = await getFeaturedLounges();
  return (
    <section className="flex flex-col justify-center gap-4 pt-4 pb-8 md:py-10">
      <Search placeholder="Find a lounge or airport..." />
      <Suspense
        fallback={
          <div>
            <Skeleton className="rounded-lg">
              <div className="h-[80px] rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-8 justify-evenly content-evenly justify-items-center items-center">
              <Skeleton className="rounded-lg">
                <div className="h-[300px] rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="rounded-lg">
                <div className="h-[300px] rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="rounded-lg">
                <div className="h-[300px] rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </div>
        }
      >
        <LoungeCardGroup heading="Popular Lounges" userCards={userCards} />
      </Suspense>
    </section>
  );
};

export default Home;
