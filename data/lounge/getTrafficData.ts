const getTrafficData = async ({
  name,
  address,
}: {
  name: string;
  address: string;
}) => {
  const params = new URLSearchParams({
    api_key_private: process.env.BEST_TIME_API_KEY_PRI as string,
    venue_name: name,
    venue_address: address,
  });
  const response = await fetch(`${process.env.BEST_TIME_ENDPOINT}?${params}`, {
    method: "POST",
  });

  const data = await response.json();

  return data;
};

export default getTrafficData;
