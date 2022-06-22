import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { Link } from "react-router-dom";

function BodyMyBlog() {
  const [AllReview, setAllReview] = useState();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const review = await axios.get("/review/myblog");
        setAllReview(review.data.reviews);
      } catch (err) {}
    };
    fetchPost();
  }, []);

  const delReview = async (e, id) => {
    try {
      e.preventDefault();
      const delResult = await axios.delete(`/review/myblog/${id}`);
    } catch (err) {}
  };

  return (
    <div className="row " style={{ width: "95%", justifyContent: "center" }}>
      <div className="col-8">
        <h1 className="d-flex flex-column mt-5">My Blog</h1>
      </div>
      <div className="row review"></div>
      {AllReview?.map((el) => (
        <div key={el.id} className="row review col-8">
          <div className="col-4">
            <img
              className="rounded-3"
              style={{
                width: 350,
                height: 350,
              }}
              src={el.image}
              alt=""
            />
          </div>

          <div className="col-8 border-bottom border-dark d-flex flex-column justify-content-between">
            <div className="">
              <h1>{el.title}</h1>
              <h5>{el.subtitle}</h5>
              <p className="text-wrap">{el.reviewtext}</p>
            </div>
            <div className="align-self-end mb-3">
              <Link
                to={`/myblog/edit/${el.id}`}
                className="btn btn-warning me-3 "
                style={{ width: "100px" }}
              >
                Edit
              </Link>
              <button
                className="btn btn-primary me-3"
                style={{ width: "100px" }}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                style={{ width: "100px" }}
                onClick={(e) => delReview(e, el.id)}
              >
                Del
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default BodyMyBlog;
