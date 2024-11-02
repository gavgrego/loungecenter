import type { Metadata } from "next";

import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import { Skeleton } from "@nextui-org/react";

import AllLoungesTable from "./components/AllLoungesTable";

import Search from "@/components/search/Search";
import getLlounges from "@/data/lounge/getLounges";
import LoungeCardGroup from "@/components/lounges/LoungeCardGroup";

export const metadata: Metadata = {
  title: "Lounge Center - Lounges",
  description: "Find and filter all lounges, check your access, and more.",
};

const LoungesPage = async () => {
  const { sessionClaims } = auth();

  const allLounges = await getLlounges({});

  const airportCodes = Array.from(
    new Set(
      allLounges?.map(
        (lounge) => lounge?.attributes?.airport?.data?.attributes?.code
      )
    )
  ) as string[];

  return (
    <div>
      <Search className="mb-10" placeholder="Find a lounge or airport..." />
      <LoungeCardGroup
        heading="Popular Lounges"
        sessionClaims={sessionClaims}
      />
      <h2 className="text-center mt-20 mb-8 text-4xl">All Lounges</h2>

      <Suspense
        fallback={
          <Skeleton className="rounded-lg">
            <div className="h-[400px] rounded-lg bg-default-300" />
          </Skeleton>
        }
      >
        <AllLoungesTable
          currentAirportCodes={airportCodes}
          lounges={allLounges || []}
          sessionClaims={sessionClaims}
        />
      </Suspense>
    </div>
  );
};

export default LoungesPage;
