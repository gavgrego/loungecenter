import LoungeCard from "@/components/lounges/LoungeCard";
import Search from "@/components/search/Search";
import getFeaturedLounges from "@/data/lounge/getFeaturedLounges";
import { auth } from "@clerk/nextjs/server";

const Home = async () => {
  const { sessionClaims } = auth();

  // if card.id in cards exists in metadata, then card is available
  const userCards: string[] =
    sessionClaims?.unsafeMetadata?.cardSelections || [];

  const lounges = await getFeaturedLounges();
  return (
    <section className="flex flex-col justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-row gap-4 text-6xl items-center justify-center">
        <p>✈️</p>
        <p>🛋️</p>
        <h2 className="font-semibold text-5xl">LoungeClub</h2>
      </div>

      <Search placeholder="Find a lounge or airport..." />
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
    </section>
  );
};

export default Home;
