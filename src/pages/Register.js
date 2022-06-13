import React from "react";
import SignupComponent from "../components/auth/SignupComponent";

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
