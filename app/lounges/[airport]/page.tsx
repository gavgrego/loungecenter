import getAirportByCode from "@/data/airport/getAirportByCode";

const AirportPage = async ({ params }: { params: { airport: string } }) => {
  const airport = await getAirportByCode(params.airport);
  const airportData = airport.data?.[0].attributes;

  return <div>{airportData?.Name}</div>;
};

export default AirportPage;
