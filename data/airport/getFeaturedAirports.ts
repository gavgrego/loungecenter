import { AirportResponseDataObject } from "../api/documentation";

const getFeaturedAirports = async (): Promise<
  AirportResponseDataObject[] | null
> => {
  try {
    // Ideally need to optionally pass lat, lon, and limit to the API, otherwise, it will return all lounges
    const data = await fetch(
      `${process.env.STRAPI_BASE_URL}/api/airports?filters[featured][$eq]=true`
    );

    const response = await data.json();
    return response.data;
  } catch (error) {
    console.error("Error fetching lounges!", error);

    return null;
  }
};

export default getFeaturedAirports;
