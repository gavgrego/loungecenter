import type { Metadata } from "next";

import { auth } from "@clerk/nextjs/server";
import { Skeleton } from "@nextui-org/react";
import { Suspense } from "react";

import LoungeCardGroup from "@/components/lounges/LoungeCardGroup";
import Search from "@/components/search/Search";
import getFeaturedAirports from "@/data/airport/getFeaturedAirports";
import AirportCard from "@/components/airports/AirportCard";
import AllAirportsTable from "./airports/components/AllAirportsTable";
import AllLoungesTable from "./lounges/components/AllLoungesTable";
import getLounges from "@/data/lounge/getLounges";

export const metadata: Metadata = {
  title: "Lounge Center - Global Airport Lounges",
  description:
    "Find global airport lounge information, check your access, and more.",
};

const Home = async () => {
  const { sessionClaims } = auth();
  const airports = await getFeaturedAirports();
  const allLounges = await getLounges({});

  const airportCodes = Array.from(
    new Set(
      allLounges?.map(
        (lounge) => lounge?.attributes?.airport?.data?.attributes?.code
      )
    )
  ) as string[];
  return (
    <section className="flex flex-col justify-center gap-4 pt-4 pb-8 md:py-10">
      <Search className="mb-10" placeholder="Find a lounge or airport..." />
      <Suspense
        fallback={
          <div className="flex flex-col gap-3">
            <Skeleton className="rounded-lg">
              <div className="h-[80px] rounded-lg bg-default-300" />
            </Skeleton>
            <Skeleton className="rounded-lg">
              <div className="h-[300px] rounded-lg bg-default-300" />
            </Skeleton>
            <Skeleton className="rounded-lg">
              <div className="h-[300px] rounded-lg bg-default-300" />
            </Skeleton>
          </div>
        }
      >
        <LoungeCardGroup
          heading="Popular Lounges"
          sessionClaims={sessionClaims}
        />
      </Suspense>

      <h2 className="text-center mt-20 mb-4 text-4xl">All Lounges</h2>

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

      <h1 className="text-center mb-6 mt-10">Popular Airports</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-evenly content-evenly justify-items-center items-center">
        {airports?.map((airport) => {
          return (
            <AirportCard
              key={airport.id}
              airport={airport}
              className="w-full"
            />
          );
        })}
      </div>
      <h2 className="text-center mt-20 mb-4 text-4xl">All Airports</h2>

      <Suspense
        fallback={
          <Skeleton className="rounded-lg">
            <div className="h-[400px] rounded-lg bg-default-300" />
          </Skeleton>
        }
      >
        <AllAirportsTable airports={airports || []} />
      </Suspense>
    </section>
  );
};

export default Home;
