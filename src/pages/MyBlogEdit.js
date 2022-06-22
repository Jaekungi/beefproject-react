import Footer from "../components/auth/Footer";
import HomeHeader from "../components/header/HomeHeader";
import BodyEditReview from "../components/layout/BodyEditReview";

function MyBlogEdit() {
  return (
    <div className="d-flex-column">
      <HomeHeader />
      <BodyEditReview />
      <Footer />
    </div>
  );
}

export default MyBlogEdit;
