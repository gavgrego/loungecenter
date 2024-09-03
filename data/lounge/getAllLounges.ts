import {
  Lounge,
  LoungeResponse,
  LoungeResponseDataObject
} from "../api/documentation";

const getAllLounges = async (): Promise<LoungeResponseDataObject[] | null> => {
  try {
    // TODO: make sure not to overfetch here
    const response = await fetch(
      `${process.env.STRAPI_BASE_URL}/api/lounges?populate=airport`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching lounges!", error);
    return null;
  }
};

export default getAllLounges;
