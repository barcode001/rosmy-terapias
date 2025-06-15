import React from "react";
import clientInfo from "../config/clientInfo";

function About() {
  return (
    <div>
      <h1>About {clientInfo.businessName}</h1>
      <p>Owner: {clientInfo.ownerName}</p>
    </div>
  );
}

export default About;
