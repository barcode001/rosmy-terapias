import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="credits">
          © {new Date().getFullYear()} ClientName. All rights reserved.
        </p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
