import React from "react";
import Header from "../components/auth/Header";
import { Outlet } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default HomePage;
