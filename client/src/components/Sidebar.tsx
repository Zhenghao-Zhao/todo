import {
  AccessAlarm,
  Assessment,
  CalendarMonth,
  Dashboard,
  Folder,
  Groups,
  LogoDev,
  MenuOpen,
  Settings,
} from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function Sidebar({
  isSidebarOpen,
  setSidebarOpen,
}: {
  isSidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`top-0 ${isSidebarOpen ? "w-sidebar-max-w" : "w-sidebar-min-w"} fixed h-screen bg-gray-200`}
    >
      <div className="flex items-center justify-center w-full h-nav-h px-[20px] py-[10px]">
        <Logo className={`${isSidebarOpen ? "flex" : "hidden"} `} />
        <IconButton onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <MenuOpen />
        </IconButton>
      </div>
      <Divider className="my-[20px]" />
      {SectionData.map((data, i: number) => {
        return (
          <Section
            key={i}
            title={data.title}
            entries={data.entries}
            isSidebarOpen={isSidebarOpen}
          />
        );
      })}
    </div>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        `flex items-center w-[100px] justify-between`,
        className,
      )}
    >
      <LogoDev fontSize="large" />
      <p>DevTeam</p>
    </div>
  );
}

type SectionProps = {
  title: string;
  entries: EntryProps[];
  isSidebarOpen: boolean;
};

type EntryProps = {
  title: string;
  icon: ReactNode;
  url: string;
};

function Section({ title, entries, isSidebarOpen }: SectionProps) {
  const location = useLocation();
  return (
    <>
      <div className="p-2">
        <div
          className={`text-xs mb-[5px] ${isSidebarOpen ? "block" : "hidden"}`}
        >
          {title}
        </div>
        <div>
          {entries.map((entry, i: number) => {
            return (
              <Link
                to={entry.url}
                key={i}
                className={`flex p-2 rounded-md ${entry.url === location.pathname && "bg-gray-500"}`}
              >
                <p
                  className={`mr-[10px] ${isSidebarOpen ? "block" : "hidden"} `}
                >
                  {entry.title}
                </p>
                {entry.icon}
              </Link>
            );
          })}
        </div>
      </div>
      <Divider />
    </>
  );
}

const SectionData: Pick<SectionProps, "title" | "entries">[] = [
  {
    title: "MAIN MENU",
    entries: [
      { title: "Dashboard", icon: <Dashboard />, url: "/" },
      { title: "Calendar", icon: <CalendarMonth />, url: "/calendar" },
    ],
  },
  {
    title: "PROGRESS",
    entries: [
      { title: "Time Tracker", icon: <AccessAlarm />, url: "/time" },
      { title: "Reports", icon: <Assessment />, url: "/reports" },
    ],
  },
  {
    title: "MANAGE",
    entries: [
      { title: "Project", icon: <Folder />, url: "/project" },
      { title: "Team", icon: <Groups />, url: "/team" },
      { title: "Setting", icon: <Settings />, url: "/settings" },
    ],
  },
];
