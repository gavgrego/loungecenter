import getLoungeBySlug from "@/data/lounge/getLoungeBySlug";

const LoungePage = async ({ params }: { params: { slug: string } }) => {
  const lounge = await getLoungeBySlug(params.slug);
  const loungeData = lounge.data?.[0].attributes ?? {};
  const airportData = loungeData.airport?.data?.attributes ?? {};

  return (
    <div>
      <h1>{loungeData.name}</h1>
      <div className="flex flex-row gap-3">
        <h2>{airportData.name}</h2>
        <h2>{airportData.city}</h2>
        {airportData.state ? <h2>{airportData.state}</h2> : ""}
        <h2>{airportData.country}</h2>
      </div>
      <h3>{airportData.code}</h3>
    </div>
  );
};

export default LoungePage;
