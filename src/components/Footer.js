import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Address And Contact</h4>
            <h1 className="list-unstyled">
              <li>Address</li>
              <li>Contact</li>
              <li>About</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Submission</h4>
            <ui className="list-unstyled">
              <li>Explore Categories</li>
              <li>Add Categories</li>
              <li>Submit Articles</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled">
              <li>Yeah </li>
              <li>Nothing</li>
              <li>Is Happening</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Test Project | All rights reserved 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
