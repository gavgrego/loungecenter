import { LoungeListResponse } from "../api/documentation";

const getLoungeBySlug = async (slug: string): Promise<LoungeListResponse> => {
  const response = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/lounges?populate=airport,cards&filters[slug][$eq]=${slug}`,
    {
      cache: "no-cache",
    },
  );

  return await response.json();
};

export default getLoungeBySlug;
