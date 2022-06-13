import React from "react";
import LoginComponent from "../components/auth/LoginComponent";

function Login() {
  return (
    <div>
      <Header />
      <Outlet />
      <LoginComponent />
      <Footer />
    </div>
  );
}

export default Login;
