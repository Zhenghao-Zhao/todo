import { PropsWithChildren, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Layout() {
  const [preferMini, setPreferMini] = useState(false);

  return (
    <div className="h-[2000px]">
      <MainContainer preferMini={preferMini}>
        <Outlet />
      </MainContainer>
      <Navbar preferMini={preferMini} />
      <Sidebar preferMini={preferMini} setPreferMini={setPreferMini} />
    </div>
  );
}

function MainContainer({
  preferMini,
  children,
}: PropsWithChildren<{ preferMini: boolean }>) {
  return (
    <div
      className={`absolute top-nav-h right-0 bottom-0 ${preferMini ? "left-sidebar-min-w" : "sm:left-sidebar-max-w left-sidebar-min-w"}`}
    >
      {children}
    </div>
  );
}
