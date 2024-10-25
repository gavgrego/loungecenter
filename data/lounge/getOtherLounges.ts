import { LoungeResponseDataObject } from "../api/documentation";

const getOtherLounges = async (
  airportCode: string,
  currentLounge: number,
): Promise<LoungeResponseDataObject[]> => {
  const response = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/lounges?populate[cards][populate]=*&populate=airport&filters[airport][code][$eq]=${airportCode}&filters[id][$ne]=${currentLounge}&pagination[pageSize]=3`,
    {
      method: "GET",
      headers: {
        "Strapi-Response-Format": "v4",
      },
    },
  );

  const data = await response.json();

  return data.data;
};

export default getOtherLounges;
