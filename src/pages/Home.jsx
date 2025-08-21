import React from "react";
// import clientInfo from "../config/clientInfo";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testmonials";
import Booking from "./Booking";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Booking />
    </div>
  );
}

export default Home;
