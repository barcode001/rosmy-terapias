import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import ThankYou from "./pages/ThankYou";
import Contact from "./pages/Contact";
import FairyCursor from "./components/FairyCursor";
import ScrollToTop from "./components/ScrollToTop";
import Booking from "./pages/Booking";
import Taller from "./pages/Taller";

function App() {
  return (
    <>
      <ScrollToTop />
      <FairyCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/taller" element={<Taller />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
