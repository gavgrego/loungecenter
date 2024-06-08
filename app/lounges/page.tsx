import LoungeCard from "@/components/lounges/LoungeCard";
import SearchInput from "@/components/search/searchInput";
import getLounges from "@/data/lounge/getLounges";

const LoungesPage = async () => {
  // not sure how to best approach
  const lounges = await getLounges({ lat: "0", lon: "0", limit: 5 });

  return (
    <div>
      <div className="mb-10">
        <SearchInput placeholder="Find a lounge..." />
      </div>

      <div className="grid grid-cols-3 gap-8">
        {lounges?.map((lounge) => {
          return (
            <div className="">
              <LoungeCard key={lounge.id} lounge={lounge} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoungesPage;
