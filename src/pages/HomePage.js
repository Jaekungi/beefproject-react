import React from "react";
import { Outlet } from "react-router-dom";
import HomeHeader from "../components/header/HomeHeader";
import Footer from "../components/auth/Footer";
import BodyHome from "../components/layout/BodyHome";
function HomePage() {
  // console.log("HomePage");
  return (
    <div className="d-flex-column">
      <HomeHeader />
      <div className="w-75 p-3 mx-auto m-5 d-flex justify-content-center">
        <BodyHome />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
