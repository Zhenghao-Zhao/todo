import { useMutation } from "@tanstack/react-query";
import api from "../axios";
import { handleError } from "./utils";
import { ENDPOINTS } from "../endpoints";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useEmailMutation = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const mutation = useMutation({
    mutationFn: mutateEmail,
    onSuccess: (d, variables) => {
      if (d.exists) {
        navigate("/login-with-password", {
          state: { email: variables.get("email") },
        });
      } else {
        setErrorMessage(d.message);
      }
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

const mutateEmail = async (email: FormData) => {
  const response = await api.post(ENDPOINTS.CHECK_EMAIL, email);
  return response.data;
};
