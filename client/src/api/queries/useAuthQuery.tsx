import { useQuery } from "@tanstack/react-query";
import api from "../axios";
import { ENDPOINTS } from "../endpoints";

export type User = {
  uid: string;
  firstName: string;
  lastName: string;
};

export default function useAuthQuery() {
  return useQuery<User>({
    queryKey: ["auth"],
    queryFn: queryAuth,
  });
}

const queryAuth = async () => {
  const response = await api.get(ENDPOINTS.AUTH);
  return response.data;
};
