import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./components/Dashboard";
import Login from "./components/auth/Login";
import LoginWithPassword from "./components/auth/LoginWithPassword";
import Registration from "./components/auth/Registration";
import Providers from "./contexts/Providers";
import AuthRoute from "./pages/AuthRoute";
import { ProtectedRoute } from "./pages/ProtectedRoute";

export default function RouteHandler() {
  return (
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Route>
          <Route element={<AuthRoute />}>
            <Route path="/login" element={<Login />} />
            <Route
              path="/login-with-password"
              element={<LoginWithPassword />}
            />
            <Route path="/registration" element={<Registration />} />
          </Route>
        </Routes>
      </Providers>
    </BrowserRouter>
  );
}
