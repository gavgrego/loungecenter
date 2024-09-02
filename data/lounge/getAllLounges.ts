import {
  Lounge,
  LoungeResponse,
  LoungeResponseDataObject
} from "../api/documentation";

const getAllLounges = async (): Promise<LoungeResponseDataObject[] | null> => {
  try {
    const response = await fetch(`${process.env.STRAPI_BASE_URL}/api/lounges`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching lounges!", error);
    return null;
  }
};

export default getAllLounges;
