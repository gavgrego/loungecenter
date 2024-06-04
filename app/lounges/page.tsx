import LoungeCard from "@/components/lounges/LoungeCard";
import getLounges from "@/data/getLounges";

const LoungesPage = async () => {
  const lounges = await getLounges();
  return (
    <div>
      {lounges?.map((lounge) => {
        return <LoungeCard lounge={lounge} />;
      })}
    </div>
  );
};

export default LoungesPage;
