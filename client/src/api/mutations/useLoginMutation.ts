import { useMutation } from "@tanstack/react-query";
import api from "../axios";
import { ENDPOINTS } from "../endpoints";
import { LoginInfo } from "../../lib/types";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (loginInfo: LoginInfo) => api.post(ENDPOINTS.LOGIN, loginInfo),
    onSuccess: () => {
      console.log("success");
    },
    onError: (e) => {
      console.log(e.message);
    },
  });
};
