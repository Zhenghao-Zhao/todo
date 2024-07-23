import { ChangeEvent, useState } from "react";

export default function Navbar({ preferMini }: { preferMini: boolean }) {
  return (
    <div
      className={`top-0 h-nav-h sticky flex justify-center items-center bg-white px-[20px] ${preferMini ? "ml-sidebar-min-w" : "sm:ml-sidebar-max-w ml-sidebar-min-w"}`}
    >
      <NavSearch />
    </div>
  );
}

function NavSearch() {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };

  return (
    <input
      className="rounded-sm p-[5px] w-[600px] bg-gray-200"
      value={searchText}
      onChange={handleInputChange}
      placeholder="Search"
    />
  );
}
