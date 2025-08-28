import React from "react";
// import clientInfo from "../config/clientInfo";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testmonials";

import TallerPromo from "./TallerPromo";
import TiktokBanner from "./TiktokBanner";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <TiktokBanner />
      <Services />
      <Testimonials />
      <TallerPromo />
    </div>
  );
}

export default Home;
