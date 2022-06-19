import React from "react";
import { Link, Outlet } from "react-router-dom";

function RootHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            BeefPro
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              <Link
                to="/auth/login"
                className="btn btn-success me-2"
                type="submit"
                href="/"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-success"
                type="submit"
              >
                Register
              </Link>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default RootHeader;
