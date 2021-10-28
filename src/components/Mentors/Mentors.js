import React from "react";
import "./Mentors.css";
import right from "../../images/right.png";
import left from "../../images/left.png";
import mentor from "../../images/mentor.png";

function Mentors() {
  return (
    <div className="mentor">
      <div className="about__heading">
        <img src={left} alt="" />
        <h1>Mentors</h1>
        <img src={right} alt="" />
      </div>
      <div className="margin">
        <div className="mentor-cards">
          <div className="mentor-card">
            <img src={mentor} alt="mentor" />
            <div className="mentor-details">
              <h3>Mentor Name</h3>
              <p>Software Developer at Zomato</p>
            </div>
          </div>
          <div className="mentor-card">
            <img src={mentor} alt="mentor" />
            <div className="mentor-details">
              <h3>Mentor Name</h3>
              <p>Software Developer at Zomato</p>
            </div>
          </div>
          <div className="mentor-card">
            <img src={mentor} alt="mentor" />
            <div className="mentor-details">
              <h3>Mentor Name</h3>
              <p>Software Developer at Zomato</p>
            </div>
          </div>
          <div className="mentor-card">
            <img src={mentor} alt="mentor" />
            <div className="mentor-details">
              <h3>Mentor Name</h3>
              <p>Software Developer at Zomato</p>
            </div>
          </div>
          <div className="mentor-card">
            <img src={mentor} alt="mentor" />
            <div className="mentor-details">
              <h3>Mentor Name</h3>
              <p>Software Developer at Zomato</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentors;
