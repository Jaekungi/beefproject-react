import React from "react";
import CreateReview from "./CreateReview";
import { Outlet } from "react-router-dom";

function MyBlog() {
  return (
    <div>
      <Outlet />
      <CreateReview />
    </div>
  );
}

export default MyBlog;
