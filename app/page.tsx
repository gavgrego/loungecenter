import LoungesNearMe from "@/components/lounges/LoungesNearMe";
import SearchInput from "@/components/search/searchInput";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="flex flex-row gap-4 text-6xl items-center justify-center">
        <p>✈️</p>
        <p>🛋️</p>
        <h2 className="font-semibold text-5xl">Airside</h2>
      </div>
      <h3 className="max-w-[500px] text-center">
        Find airport lounge access, get reviews and info, and see just how busy
        it is before you even get there.
      </h3>
      <div className="max-w-[800px] w-full">
        <SearchInput />
      </div>
      <LoungesNearMe />
    </section>
  );
}
