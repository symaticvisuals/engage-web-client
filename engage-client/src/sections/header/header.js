import React from "react";
import Data from "./../../shared/Data.const";
import "../../styles/all-styles.css";
const Header = () => {
  const landing = Data.find((x) => x.id === "landing");
  return (
    <header>
      <div className="logo">
        <img src="images/engage.png" alt="" />
      </div>
      <div className="slogan">
        <h3>{landing.slogan}</h3>
      </div>
      <div className="description">
        {landing.description}
        <p></p>
      </div>
      <button className="register">Register now</button>
    </header>
  );
};

export default Header;
