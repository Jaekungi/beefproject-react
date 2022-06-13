import React from "react";
import CreateReview from "./CreateReview";
import Header from "../components/auth/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/auth/Footer";

function MyBlog() {
  return (
    <div>
      <Header />
      <Outlet />
      <CreateReview />
      <Footer />
    </div>
  );
}

export default MyBlog;
