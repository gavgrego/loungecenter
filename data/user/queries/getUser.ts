import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { User } from "@clerk/backend";
import { useUser } from "@clerk/nextjs";

export const useGetUser = (): UseQueryResult<User, Error> => {
  return useQuery({
    queryKey: ["user"],
    queryFn: useUser,
  });
};
