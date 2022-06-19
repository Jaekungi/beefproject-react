import React, { useState } from "react";
import axios from "../../config/axios";

function BodyCreateReview() {
  const reviewData = new FormData();
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [context, setContext] = useState("");
  const [files, setFiles] = useState("");

  // console.log("title", title);
  // console.log("subTitle", subTitle);

  console.log(reviewData.getAll("title"));

  const postReview = async (e) => {
    try {
      e.preventDefault();
      reviewData.append("title", title);
      reviewData.append("SubTitle", subTitle);
      reviewData.append("context", context);
      reviewData.append("image", files);
      const result = await axios.post("/review", reviewData);
    } catch (err) {}
  };

  return (
    <div className="row " style={{ width: "60%", justifyContent: "center" }}>
      <form>
        <div className="mb-1">
          <label for="titleReview" className="form-label">
            Main Title
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Title"
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
          <label for="textdetail" className="form-label">
            Context
          </label>
          <textarea
            className="form-control"
            type="text"
            placeholder="Enter context here..!"
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
        Post Now!
      </button>
    </div>
  );
}

export default BodyCreateReview;
