import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Tracks from "../components/Tracks/Tracks";
import Sponsors from "../components/Sponsors/Sponsors";
import Footer from "../components/Footer/Footer";
import Faqs from "../components/FAQs/Faqs";
import Mentors from "../components/Mentors/Mentors";
function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Mentors />
      <Sponsors />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Main;
