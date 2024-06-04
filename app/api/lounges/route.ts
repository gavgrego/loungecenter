const GET = async (
  request: Request
): Promise<{
  query: string;
  result: Record<string, string>[];
}> => {
  const data = await fetch(
    `${process.env.SANITY_BASE_URL}/v2024-05-30/data/query/production?query=*[_type == "airportLounge"]`,
    {
      method: "GET",
    }
  );

  return await data.json();
};
