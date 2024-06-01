// fetch lounges here, or home page?

import getLounges from "@/data/getLounges";

const LoungesNearMe = async () => {
  const lounges = await getLounges();
  console.log(lounges);
  return <div>Lounges Near Me</div>;
};

export default LoungesNearMe;
