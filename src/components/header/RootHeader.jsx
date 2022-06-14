import React from "react";

function RootHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          BeefPro
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex">
            <button className="btn btn-outline-success me-2" type="submit">
              Login
            </button>
            <button className="btn btn-outline-success" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default RootHeader;
