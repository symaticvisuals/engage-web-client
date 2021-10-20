import React from "react";

import Tracks from "./Tracks";
import Footer from "./../sections/footer/footer";
import Header from "./../sections/header/header";
import Mentors from "./Mentors";

const Home = () => {
  return (
    <div>
      <Header />
      <Tracks />
      <Mentors />
      <Footer />
    </div>
  );
};

export default Home;
