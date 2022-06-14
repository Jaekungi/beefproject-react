import React, { useState } from "react";
function SignupComponent(props) {
  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="username.1"
            className="form-control mb-3"
            id="usernameid"
            aria-describedby="UserHelp"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group text-left mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control mb-3"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control mb-3"
            id="confirmPassword"
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default SignupComponent;
