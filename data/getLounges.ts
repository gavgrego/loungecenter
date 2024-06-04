import { Lounge } from "./api/documentation";

const getLounges = async (): Promise<Lounge[] | null> => {
  try {
    const response = await fetch(`${process.env.STRAPI_BASE_URL}/api/lounges`, {
      method: "GET",
      cache: "no-cache",
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching lounges", error);
    return null;
  }
};

export default getLounges;
