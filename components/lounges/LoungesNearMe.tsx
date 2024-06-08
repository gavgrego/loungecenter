import getLounges from "@/data/lounge/getLounges";

const LoungesNearMe = async () => {
  const lounges = await getLounges({ lat: "0", lon: "0", limit: 5 });

  // pick the 5 closest lounges
  return <div></div>;
};

export default LoungesNearMe;
