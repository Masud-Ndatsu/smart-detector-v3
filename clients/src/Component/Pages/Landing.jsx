import React from "react";
import Footer from "../layouts/Footer"
import Overview from "../layouts/Overview"
import Navbar from "../Navbar/Navbar";
import HardWare from "../layouts/HardWare"

import "../layouts/Landing.css";
import Features from "../layouts/Features"


function Landing() {
  return (
    <div>
    <Overview />
    <Navbar />
      <Features />
      <HardWare />
      <Footer />
    </div>
  );
}

export default Landing;
