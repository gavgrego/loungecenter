// fetch lounges here, or home page?

import getLounges from "@/data/getLounges";

const LoungesNearMe = async () => {
  const lounges = await getLounges();

  return lounges?.map((lounge) => {
    return (
      <div>
        <h3>{lounge?.name}</h3>
      </div>
    );
  });
};

export default LoungesNearMe;
