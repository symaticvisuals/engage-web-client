import React from "react";
import Data from "./../shared/Data.const";

function Mentors() {
  const mentorsList = Data.find((x) => x.id === "mentorsList");
  return <div>Mentors Section</div>;
}

export default Mentors;
