const getGoogleImage = async (
  imageId: string
): Promise<{ name: string; photoUri: string } | undefined> => {
  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/${imageId}/media?key=${process.env.GOOGLE_API_KEY}&maxWidthPx=750&maxHeightPx=750&skipHttpRedirect=true`,
      {
        method: "GET",
        cache: "no-cache",
      }
    );

    return await response.json();
  } catch (e) {
    return undefined;
    // throw new Error("Failed to fetch Google Place Details");
  }
};

export default getGoogleImage;
