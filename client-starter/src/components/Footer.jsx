import { Link } from "react-router-dom";
import "./Footer.scss"; // optional, if you're using SCSS or want to customize styles

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
