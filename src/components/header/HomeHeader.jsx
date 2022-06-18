import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import userPic from "../../img/user.png";

function HomeHeader() {
  const { logout } = useAuth();

  return (
    <nav className="navbar navbar-dark bg-primary ">
      <div className="d-flex flex-row">
        <div className="bd-highlight text-white p-3 me-3" href="/">
          <h1>Beef Pro</h1>
        </div>
        <button
          type="button"
          className="align-self-center btn btn-light p-2 mb-0 me-3"
        >
          home
        </button>
        <button
          type="button"
          className="align-self-center btn btn-light p-2 me-3"
        >
          My Blog
        </button>
      </div>
      <div className="d-flex flex-row me-4">
        <div className="d-flex flex-column">
          <button
            type="button"
            className="align-self-center btn btn-danger btn-sm p-2 me-3"
            onClick={logout}
          >
            LogOut
          </button>
          <div className="text-white mt-1" style={{ fontSize: "12px" }}>
            {" "}
            UserName
          </div>
          <div className="text-white " style={{ fontSize: "12px" }}>
            {" "}
            UserId : 123456
          </div>
        </div>
        <img
          className=""
          style={{
            width: 45,
            height: 45,
          }}
          src={userPic}
          alt=""
        />
      </div>

      {/* <div className="d-flex flex-row">
        <div className="bd-highlight text-white p-3 me-3" href="/">
          <h1>Beef Pro</h1>
        </div>
        <button
          type="button"
          className="align-self-center btn btn-light p-2 mb-0 me-3"
        >
          home
        </button>
        <button
          type="button"
          className="align-self-center btn btn-light p-2 me-3"
        >
          My Blog
        </button>
        <div className="d-flex">
          <button
            type="button"
            className="align-self-center btn btn-danger p-2"
            onClick={logout}
          >
            LogOut
          </button>
          <div className="rounded float-end ">
            <img
              className=""
              style={{
                width: 50,
              }}
              src={userPic}
              alt=""
            />
          </div>
        </div>
      </div> */}
    </nav>
  );
}
export default HomeHeader;
