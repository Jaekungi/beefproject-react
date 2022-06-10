import React, { Component } from "react";
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Register</h3>
        <div className="mb-3">
          <label>Username</label>
          <input type="text" className="form-control" placeholder="Username" />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="confirmpassword"
            className="form-control"
            placeholder="Confirm your password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">Login now?</a>
        </p>
      </form>
    );
  }
}
