import { LoungeResponseDataObject } from "../api/documentation";

const getLoungesByAirportCode = async (
  airportCode: string,
): Promise<LoungeResponseDataObject[]> => {
  // CAUTION: Deep filtering is not recommended.
  // Querying your API with deep filters may cause performance issues. If one of your deep filtering queries is too slow, we recommend building a custom route with an optimized version of the query.

  const response = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/lounges?filters[airport][code][$eq]=${airportCode}`,
    {
      method: "GET",
      cache: "no-cache",
    },
  );

  return await response.json();
};

export default getLoungesByAirportCode;
