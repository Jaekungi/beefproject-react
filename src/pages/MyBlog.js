import React from "react";
import CreateReview from "./CreateReview";

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
