import { useMutation } from "@tanstack/react-query";
import api from "../axios";
import { ENDPOINTS } from "../endpoints";
import { handleError } from "./utils";

export default function useRegisterMutation() {
  return useMutation({
    mutationFn: signup,
    onSuccess: (d) => {
      console.log("success", d);
    },
    onError: (e) => {
      const apiError = handleError(e);
      console.error(
        `Error logging in: ${apiError.message}, code: ${apiError.code}`,
      );
    },
  });
}

const signup = async (signupInfo: FormData) => {
  const response = await api.post(ENDPOINTS.REGISTRATION, signupInfo);
  return response.data;
};
