import { PropsWithChildren, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(`(max-width:${640}px)`);
    function handler(e: MediaQueryListEvent) {
      if (e.matches) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    }
    media.addEventListener("change", handler);
    return () => {
      media.removeEventListener("change", handler);
    };
  }, []);

  return (
    <div className="h-[2000px]">
      <MainContainer isSidebarOpen={isSidebarOpen}>
        <Outlet />
      </MainContainer>
      <Navbar isSidebarOpen={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
    </div>
  );
}

function MainContainer({
  isSidebarOpen,
  children,
}: PropsWithChildren<{ isSidebarOpen: boolean }>) {
  return (
    <div
      className={`absolute top-nav-h right-0 bottom-0 ${isSidebarOpen ? "left-sidebar-max-w" : "left-sidebar-min-w"} `}
    >
      {children}
    </div>
  );
}
