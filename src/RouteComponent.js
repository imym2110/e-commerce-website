import React from "react";
import Header from "./pages/Header";
import { Outlet } from "react-router-dom";

function RouteComponent() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
export default RouteComponent;
