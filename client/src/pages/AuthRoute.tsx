import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
export default function AuthRoute() {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
