import { createContext, PropsWithChildren } from "react";
import useAuthQuery, { User } from "../api/queries/useAuthQuery";

type AuthContextType = {
  user: User | undefined;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { data: user, isLoading } = useAuthQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
