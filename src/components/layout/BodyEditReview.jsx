import React, { useEffect, useState } from "react";
import axios from "../../config/axios";
import { useParams, useNavigate } from "react-router-dom";

function BodyEditReview({ setIsLoading }) {
  const reviewData = new FormData();
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [context, setContext] = useState("");
  const [files, setFiles] = useState("");

  const { id } = useParams();
  const [review, setReview] = useState({});
  useEffect(() => {
    const fetchReview = async () => {
      const {
        data: { review },
      } = await axios.patch(`/review/myblog/edit/${id}`);
      setReview(review);
    };
    fetchReview();
  }, []);
  useEffect(() => {
    setReview(review);
    setTitle(review.title);
    setSubTitle(review.subtitle);
    setContext(review.reviewtext);
    setFiles(review.image);
  }, [review]);

  const navigate = useNavigate();

  const postReview = async (e) => {
    try {
      console.log("first");
      e.preventDefault();
      reviewData.append("title", title);
      reviewData.append("SubTitle", subTitle);
      reviewData.append("context", context);
      reviewData.append("image", files);
      const result = await axios.patch(
        `/review/myblog/edit/${review.id}`,
        reviewData
      );
      console.log(result);
      console.log(reviewData);
    } catch (err) {}
  };

  return (
    <div className="d-flex justify-content-center my-5">
      <div
        className="row card w-50 m-0"
        style={{ width: "60%", justifyContent: "center" }}
      >
        <form className="mx-auto">
          <div className="my-3 ">
            <label for="titleReview" className="form-label">
              Main Title
            </label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <div className="form-text text-danger">Title is required!</div>
          </div>
          <div className="mb-3">
            <label for="subTitle" className="form-label">
              Sub-Title
            </label>
            <input
              className="form-control"
              type="text"
              placeholder=""
              value={subTitle}
              onChange={(e) => {
                setSubTitle(e.target.value);
              }}
            />
            <div className="form-text">Sub-Title is not really nessesary</div>
          </div>
        </form>

        <div className="input-group mb-1">
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFiles(e.target.files[0])}
          />
        </div>
        <div className="form-text mb-4 text-danger">Image is required!</div>

        <form>
          <div className="mb-3">
            <label for="textdetail" className="form-label" placeholder="">
              Context
            </label>
            <textarea
              className="form-control"
              type="text"
              placeholder=""
              value={context}
              rows="4"
              onChange={(e) => {
                setContext(e.target.value);
              }}
            />
            <div className="form-text text-danger">
              Context need to be filled!
            </div>
          </div>
        </form>

        <button
          type="submit"
          className="btn btn-primary m-1 col-3"
          onClick={postReview}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default BodyEditReview;
