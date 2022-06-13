import React from "react";
import LoginComponent from "../components/auth/LoginComponent";
import Header from "../components/header/HomeHeader";
import { Outlet } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex justify-content-between gap-3">
      <div className="col-6 border">image</div>
      <LoginComponent />
    </div>
  );
}

export default Login;
