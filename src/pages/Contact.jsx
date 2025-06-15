import React from "react";
import clientInfo from "../config/clientInfo";

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Phone: {clientInfo.contact.phone}</p>
      <p>Email: {clientInfo.contact.email}</p>
      <p>Address: {clientInfo.contact.address}</p>
    </div>
  );
}

export default Contact;
