import { useMutation } from "@tanstack/react-query";
import api from "../axios";
import { ENDPOINTS } from "../endpoints";
import { handleError } from "./utils";
import { useState } from "react";

export const useLoginMutation = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      window.location.reload();
    },
    onError: (e) => {
      const apiError = handleError(e);
      setErrorMessage(apiError.message);
      console.error(
        `Error logging in: ${apiError.message}, code: ${apiError.code}`,
      );
    },
  });

  return { mutation, errorMessage };
};

const login = async (loginInfo: FormData) => {
  const response = await api.post(ENDPOINTS.LOGIN, loginInfo);
  return response.data;
};
