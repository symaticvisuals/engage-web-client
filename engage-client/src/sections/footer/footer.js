import React from "react";
import "../../styles/all-styles.css";
function Footer() {
  return (
    <>
      <div className="socials">
        <div className="media">
          <span>
            <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
          </span>
          <span>
            <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
          </span>
          <span>
            <i className="fa fa-twitter-square fa-2x " aria-hidden="true"></i>
          </span>
        </div>
        <div className="uni-logo">
          <img src="images/ncu.png" alt="" />
        </div>
        <div className="copyright">
          <p>&copy; 2021 Engage Hackathon</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
