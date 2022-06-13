import React, { Component } from "react";
export default class Login extends Component {
  render() {
    return (
      <form>
        {/* <div className="login-box"></div> */}
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
