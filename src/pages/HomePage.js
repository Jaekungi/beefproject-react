import React from "react";
import Header from "../components/auth/Header";
import Footer from "../components/auth/Footer";
import { Outlet } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomePage;
