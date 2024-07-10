import { CardListResponse } from "../api/documentation";

const getCards = async (): Promise<CardListResponse> => {
  const response = await fetch(`${process.env.STRAPI_BASE_URL}/api/cards`, {
    cache: "no-cache",
  });

  return await response.json();
};

export default getCards;
