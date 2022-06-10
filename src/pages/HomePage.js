import React from "react";
import Header from "../components/auth/Header";
import { Outlet } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <h1>home</h1>
      <Outlet />
    </div>
  );
}

export default HomePage;
