import LoungesNearMe from "@/components/lounges/LoungesNearMe";
import SearchInput from "@/components/searchInput";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-row gap-4 text-6xl items-center justify-center">
        <p>✈️</p>
        <p>🛋️</p>
      </div>
      <h2>Find out what lounges you have access to, quick.</h2>
      <div className="max-w-[800px] w-full">
        <SearchInput />
      </div>
      <LoungesNearMe />
    </section>
  );
}
