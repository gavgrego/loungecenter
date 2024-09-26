import LoungeCardGroup from "@/components/lounges/LoungeCardGroup";
import Search from "@/components/search/Search";
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

  return (
    <section className="flex flex-col justify-center gap-4 pt-4 pb-8 md:py-10">
      <Search placeholder="Find a lounge or airport..." />
      <Suspense
        fallback={
          <div className="flex flex-col gap-3">
            <Skeleton className="rounded-lg">
              <div className="h-[80px] rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="rounded-lg">
              <div className="h-[300px] rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="rounded-lg">
              <div className="h-[300px] rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        }
      >
        <LoungeCardGroup heading="Popular Lounges" userCards={userCards} />
      </Suspense>
    </section>
  );
};

export default Home;
