import React from "react";
import BodyCreateReview from "../components/layout/BodyCreateReview.jsx";
import HomeHeader from "../components/header/HomeHeader.jsx";
import Footer from "../components/auth/Footer.jsx";

function CreateReview() {
  return (
    <div className="d-flex-column">
      <HomeHeader />
      <div className="w-75 p-3 mx-auto m-5 d-flex justify-content-center">
        <BodyCreateReview />
      </div>
      <Footer />
    </div>
  );
}

export default CreateReview;
