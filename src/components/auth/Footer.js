import React from "react";

function Footer() {
  return (
    <div className="main-footer bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h4>Hi hi hi hi</h4>
            <ul className="list-unstyle">
              <li>qwe</li>
              <li>qwe</li>
              <li>qqqqqq</li>
              <li>qwe</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text xs-center"></p>
          &copy;{new Date().getFullYear()} City Guide App - All Right Reserved
          to CodeCamp#11
        </div>
      </div>
    </div>
  );
}

export default Footer;
