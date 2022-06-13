import React from "react";
import SignupComponent from "../components/auth/SignupComponent";
import Header from "../components/header/HomeHeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/auth/Footer";

function Register() {
  return (
    <div>
      <Header />
      <Outlet />
      <SignupComponent />
      <Footer />
    </div>
  );
}

export default Register;
