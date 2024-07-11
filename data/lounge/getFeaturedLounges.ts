import { LoungeResponseDataObject } from "../api/documentation";

const getFeaturedLounges = async (): Promise<
  LoungeResponseDataObject[] | null
> => {
  try {
    // Ideally need to optionally pass lat, lon, and limit to the API, otherwise, it will return all lounges
    const response = await fetch(
      `${process.env.STRAPI_BASE_URL}/api/lounges?populate[cards][populate]=*&populate=airport&filters[featured][$eq]=true`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );
    const data = await response.json();

    return data.data;
  } catch (error) {
    console.error("Error fetching lounges!", error);

    return null;
  }
};

export default getFeaturedLounges;
