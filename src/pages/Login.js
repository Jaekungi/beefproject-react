import React from "react";
import Footer from "../components/auth/Footer";
// import { Outlet } from "react-router-dom";
import LoginComponent from "../components/auth/LoginComponent";
import RootHeader from "../components/header/RootHeader";
function Register() {
  return (
    <div>
      <RootHeader />

      <LoginComponent />
      <Footer />
    </div>
  );
}

export default Register;
