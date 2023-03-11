import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="flex flex-row top-16 relative ">
      <SideBar />
      <div className="overflow-x-hidden w-full mr-2">
        <Outlet />
      </div>
    </div>
  );
};

export default MainContainer;
