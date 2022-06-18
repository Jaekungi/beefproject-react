import React from "react";
import CreateReview from "./CreateReview";
import { Outlet } from "react-router-dom";
import Footer from "../components/auth/Footer";

function MyBlog() {
  return (
    <div>
      <Outlet />
      <CreateReview />
      <Footer />
    </div>
  );
}

export default MyBlog;
