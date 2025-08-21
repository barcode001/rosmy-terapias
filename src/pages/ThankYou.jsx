import React from "react";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <section className="thank-you wrapper">
      <div className="thank-you__card">
        <h1>🎉 Thank You!</h1>
        <p>We’ve received your message and will get back to you shortly.</p>

        <Link to="/" className="btn-primary">
          ⬅ Back to Home
        </Link>
      </div>
    </section>
  );
}

export default ThankYou;
