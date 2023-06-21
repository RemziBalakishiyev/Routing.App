import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
function Layout() {
  return (
    <div>
      <Headers></Headers>
      <Outlet />
    </div>
  );
}

export default Layout;
