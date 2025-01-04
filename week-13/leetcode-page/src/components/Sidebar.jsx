import { useState } from "react";
import { SidebarToggle } from "./icons/SidebarToggle";
import StarIcon from "./icons/star.png";
import { LockIcon } from "./icons/LockIcon";

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar); //if open then close and vice-versa
  };

  return (
    <div
      className={`${
        openSidebar ? "w-80 bg-neutral-700 flex-col" : "w-60 bg-neutral-900 justify-end items-start"
      } h-screen flex text-neutral-100 transition-all duration-300`}
    >
      <div className="flex justify-between content-center">
        {openSidebar && <p className="font-bold">My Lists</p>}
        <button
          onClick={toggleSidebar}
          className="cursor-pointer"
        >
          <SidebarToggle />
        </button>
      </div>
      {openSidebar && (
        <>
          <div>
            <p className="font-semibold">Created by me</p>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <img src={StarIcon} alt="Star" className="w-4 h-4" />
              <p className="font-medium">Favourite</p>
            </div>
            <LockIcon />
          </div>
        </>
      )}
    </div>
  );
};
