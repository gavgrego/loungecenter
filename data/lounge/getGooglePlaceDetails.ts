import { GooglePlace } from "@/types/googlePlaces/types";

const getGooglePlaceDetails = async (placeId: string): Promise<GooglePlace> => {
  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=photos,rating,formatted_address,nationalPhoneNumber,internationalPhoneNumber,current_opening_hours,business_status&key=${process.env.GOOGLE_API_KEY}`,
      {
        method: "GET",
        cache: "force-cache",
      }
    );

    return await response.json();
  } catch {
    throw new Error("Failed to fetch Google Place Details");
  }
};

export default getGooglePlaceDetails;
