import React from "react";
import LoginComponent from "../components/auth/LoginComponent";
import Header from "../components/auth/Header";
import { Outlet } from "react-router-dom";

function Login() {
  return (
    <div>
      <Header />
      <LoginComponent />
    </div>
  );
}

export default Login;
