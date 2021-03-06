import React from "react";
import Footer from "../components/auth/Footer";
import HomeHeader from "../components/header/HomeHeader";
import BodyMyBlog from "../components/layout/BodyMyBlog";

function MyBlog() {
  return (
    <div className="d-flex-column">
      <HomeHeader />
      <BodyMyBlog />
      <Footer />
    </div>
  );
}

export default MyBlog;
