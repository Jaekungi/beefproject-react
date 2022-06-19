import React, { Component, useState } from "react";

function BodyCreateReview() {
  //   const [title, setTitle] = useState("");
  //   const [subTitle, setSubTitle] = useState("");
  //   const [context, setContext] = useState("");

  return (
    <div class="row " style={{ width: "60%", justifyContent: "center" }}>
      <form>
        <div class="mb-1">
          <label for="titleReview" class="form-label">
            Main Title
          </label>
          <input
            class="form-control"
            type="text"
            placeholder="Enter Title"
            // onChange={(event) => {
            //   setTitle.event.target.value;
            // }}
          />
          <div class="form-text text-danger">Title is required!</div>
        </div>
        <div class="mb-3">
          <label for="subTitle" class="form-label">
            Sub-Title
          </label>
          <input
            class="form-control"
            type="text"
            // onChange={(event) => {
            //   setSubTitle.event.target.value;
            // }}
          />
          <div class="form-text">Sub-Title is not really nessesary</div>
        </div>
      </form>

      <div class="input-group mb-1">
        <input type="file" class="form-control" />
      </div>
      <div class="form-text mb-4 text-danger">Image is required!</div>

      <form>
        <div class="mb-3">
          <label for="textdetail" class="form-label">
            Context
          </label>
          <textarea
            class="form-control"
            type="text"
            placeholder="Enter context here..!"
            rows="4"
            // onChange={(event) => {
            //   setContext.event.target.value;
            // }}
          />
          <div class="form-text text-danger">Context need to be filled!</div>
        </div>
      </form>

      <button type="submit" class="btn btn-primary m-1 col-3">
        Post Now!
      </button>
    </div>
  );
}

export default BodyCreateReview;
