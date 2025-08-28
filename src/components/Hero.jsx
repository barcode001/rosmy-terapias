import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Rosmy Terapias hero">
      <picture className="hero__media" aria-hidden="true">
        {/* Optional larger source — use the same file if you don't have a 2x yet */}
        <source
          media="(min-width: 900px)"
          srcSet="/hero.webp"
          type="image/webp"
        />
        <img
          src="/hero.webp"
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1080"
          srcSet="/hero.webp 1280w, /hero.webp 1920w"
          sizes="(min-width: 900px) 1100px, 100vw"
        />
      </picture>

      <div className="hero__overlay" />

      <div className="hero__content">
        <h1>Rosmy Terapias – Sanación Energética en Houston</h1>
        <p>Sanación energética para cuerpo, mente y espíritu</p>
        <a href="/booking" className="hero__cta">
          Agendar sesión
        </a>
      </div>
    </section>
  );
}
