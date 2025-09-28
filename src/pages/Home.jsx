import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testmonials";
import TallerPromo from "./TallerPromo";
import TiktokBanner from "./TiktokBanner";

function Home() {
  return (
    <div>
      <Helmet>
        {/* ===== Core Meta ===== */}
        <title>
          Rosmy Terapias – Sesiones de Sanación Energética en Houston
        </title>
        <meta
          name="description"
          content="Rosmy Terapias en Houston: sesiones de sanación energética para recuperar paz interior, liberar bloqueos emocionales y reconectar con tu energía vital."
        />
        <link rel="canonical" href="https://rosmyterapias.com/" />
        <meta name="author" content="Rosmy Terapias" />
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#9c27b0" />

        {/* ===== Open Graph (FB / WhatsApp) ===== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rosmyterapias.com/" />
        <meta
          property="og:title"
          content="Rosmy Terapias – Sanación Energética en Houston"
        />
        <meta
          property="og:description"
          content="Recupera tu paz interior con sesiones de terapia energética personalizada en Houston. Reserva fácil en línea."
        />
        <meta
          property="og:image"
          content="https://rosmyterapias.com/preview.webp"
        />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ===== Twitter Card ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rosmy Terapias – Sanación Energética en Houston"
        />
        <meta
          name="twitter:description"
          content="Recupera tu paz interior con sesiones de terapia energética personalizada en Houston. Reserva fácil en línea."
        />
        <meta
          name="twitter:image"
          content="https://rosmyterapias.com/preview.webp"
        />

        {/* ===== Local Business Schema ===== */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Rosmy Terapias",
            "image": "https://rosmyterapias.com/preview.webp",
            "@id": "https://rosmyterapias.com",
            "url": "https://rosmyterapias.com",
            "telephone": "+1-832-322-5236",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Houston",
              "addressRegion": "TX",
              "postalCode": "77013",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "29.8130",
              "longitude": "-95.2400"
            },
            "priceRange": "$$",
            "description": "Sesiones de terapia energética personalizadas en Houston, TX 77013 para armonizar cuerpo, mente y espíritu."
          }
        `}</script>
      </Helmet>

      <Hero />
      <About />
      <TiktokBanner />
      <Services />
      <Testimonials />
      <TallerPromo />
    </div>
  );
}

export default Home;
