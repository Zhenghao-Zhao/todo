import { useMutation } from "@tanstack/react-query";
import api from "../axios";
import { ENDPOINTS } from "../endpoints";

export default function useRegisterMutation() {
  return useMutation({
    mutationFn: (SignupInfo: FormData) =>
      api.post(ENDPOINTS.REGISTRATION, SignupInfo),
    onSuccess: (d) => {
      console.log("success", d);
    },
    onError: (e) => {
      console.log(e.message);
    },
  });
}
