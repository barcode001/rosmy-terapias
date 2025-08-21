import React from "react";
import clientInfo from "../config/clientInfo";

function Contact() {
  return (
    <section className="contact wrapper">
      <h1>Contact Us</h1>
      <p className="contact__intro">
        Got questions or want to book a session? Reach out below or send us a
        message directly.
      </p>

      <div className="contact__grid">
        {/* Contact Details */}
        <div className="contact__info">
          <h3>📞 Phone</h3>
          <p>{clientInfo.contact.phone}</p>

          <h3>✉️ Email</h3>
          <p>{clientInfo.contact.email}</p>

          <h3>📍 Address</h3>
          <p>{clientInfo.contact.address}</p>
        </div>

        {/* Contact Form */}
        <form
          className="contact__form"
          action="/thank-you" // redirect after submit
          method="POST"
        >
          <label>
            Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <label>
            Message
            <textarea name="message" rows="5" required></textarea>
          </label>

          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
