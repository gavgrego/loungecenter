import LoungeCard from "@/components/lounges/LoungeCard";
import SearchInput from "@/components/search/searchInput";
import getFeaturedLounges from "@/data/lounge/getFeaturedLounges";

const LoungesPage = async () => {
  // not sure how to best approach
  const lounges = await getFeaturedLounges();

  return (
    <div>
      <div className="mb-10  flex justify-center">
        <SearchInput
          className="max-w-[800px]"
          placeholder="Find a lounge or airport..."
        />
      </div>
      <h1 className="text-center mb-10">Popular Lounges</h1>
      <div className="grid grid-cols-3 gap-8">
        {lounges?.map((lounge) => {
          return <LoungeCard key={lounge.id} lounge={lounge} />;
        })}
      </div>
      {/* ALL LOUNGES TABLE */}
      {/* ALLOW FILTERING */}
    </div>
  );
};

export default LoungesPage;
