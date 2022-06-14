import React from "react";
import { Outlet } from "react-router-dom";
import HomeHeader from "../components/header/HomeHeader";
import Footer from "../components/auth/Footer";
function HomePage() {
  return (
    <div>
      <HomeHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomePage;
