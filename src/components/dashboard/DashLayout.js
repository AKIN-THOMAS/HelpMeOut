import React from "react";
import DashNav from "./DashNav";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <>
      <DashNav />
      <Outlet />
    </>
  );
};

export default DashLayout;
