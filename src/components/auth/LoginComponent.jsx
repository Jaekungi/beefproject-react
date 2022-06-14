import React, { Component } from "react";
export default class Login extends Component {
  render() {
    return (
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form
          className="mx-auto"
          style={{
            width: "400px",
          }}
        >
          <h3>Login</h3>
          <div className="mb-3">
            <label>UserName</label>
            <input
              type="username"
              className="form-control"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3"></div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
