import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const useAuth = () => {
  const v = useContext(AuthContext);
  if (v == null) {
    throw Error("Cannot use outside of provider");
  }
  return v;
};
