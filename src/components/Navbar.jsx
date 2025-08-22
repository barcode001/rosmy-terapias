import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.webp";
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar backdrop">
      <div className="navbar-container wrapper">
        <Link
          to="/"
          className="logo"
          onClick={() => {
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img loading="eager" src={logo} alt="Logo" />
        </Link>

        {/* Hamburger icon */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "✖️" : "☰"}
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMenuOpen(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <HashLink smooth to="/#about" onClick={() => setMenuOpen(false)}>
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#services" onClick={() => setMenuOpen(false)}>
              Services
            </HashLink>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
