import type { User } from "../interfaces";
import { useFetch } from "nuxt/app";

export const useUserFetcher = (id: number) => {
  const asyncData = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      key: `useUserFetcher-${id}`,
      transform: (data: User): string => {
        return data.name + "（useFetch利用）";
      },
    }
  );
  return asyncData;
};
