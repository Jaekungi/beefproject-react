import React from "react";
import RegisterComponent from "../components/auth/RegisterComponent";
import RootHeader from "../components/header/RootHeader";
import Footer from "../components/auth/Footer";
function Register() {
  return (
    <div>
      <RootHeader />
      <RegisterComponent />
      <Footer />
    </div>
  );
}

export default Register;
