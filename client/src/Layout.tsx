import { PropsWithChildren, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Layout() {
  const [isQueryMatched, setQueryMatched] = useState(true);
  const [preferMini, setPreferMini] = useState(false);
  const isSidebarOpen = !preferMini && isQueryMatched;

  useEffect(() => {
    const media = window.matchMedia(`(max-width:${640}px)`);
    function handler(e: MediaQueryListEvent) {
      setQueryMatched(!e.matches);
    }
    media.addEventListener("change", handler);
    return () => {
      media.removeEventListener("change", handler);
    };
  }, []);

  const openSidebar = () => {
    setPreferMini(false);
    setQueryMatched(true);
  };

  const closeSidebar = () => {
    setPreferMini(true);
    setQueryMatched(false);
  };

  const toggleSidebar = isSidebarOpen ? closeSidebar : openSidebar;

  return (
    <div className="h-[2000px]">
      <MainContainer isSidebarOpen={isSidebarOpen}>
        <Outlet />
      </MainContainer>
      <Navbar isSidebarOpen={isSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
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
