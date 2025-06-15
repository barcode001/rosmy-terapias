import React from "react";
import clientInfo from "../config/clientInfo";

function Home() {
  return (
    <div>
      <h1>Welcome to {clientInfo.businessName}</h1>
      <p>{clientInfo.tagline}</p>
    </div>
  );
}

export default Home;
