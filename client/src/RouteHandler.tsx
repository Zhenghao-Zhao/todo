import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./components/Dashboard";
import Auth from "./components/auth/Auth";
import Providers from "./contexts/Providers";

export default function RouteHandler() {
  return (
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Auth />} />
          <Route path="/registration" element={<Auth />} />
        </Routes>
      </Providers>
    </BrowserRouter>
  );
}
