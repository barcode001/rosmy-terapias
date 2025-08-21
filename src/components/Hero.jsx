import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1>Rosmy Terapias – Sanación Energética en Houston</h1>
        <p>Sanación energética para cuerpo, mente y espíritu</p>
        <a href="#booking" className="hero__cta">
          Agendar sesión
        </a>
      </div>
    </section>
  );
}

export default Hero;
