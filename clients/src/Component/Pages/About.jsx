import React from "react";
import AboutContents from "../layouts/AboutContents";
import Footer from "../layouts/Footer";
import Team from "../layouts/Team";
import Navbar from "../Navbar/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <AboutContents />
      <Team />
      <Footer />
    </div>
  );
}

export default About;
