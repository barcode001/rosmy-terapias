import React from "react";
import { Helmet } from "react-helmet-async";

export default function Booking() {
  const calSrc =
    "https://cal.com/rosmy-terapias/15min" +
    "?embed=1&layout=month_view&hide_gdpr_banner=1" +
    "&background_color=ffffff&primary_color=7B3F9E";

  return (
    <section id="booking" className="booking wrapper">
      {/* ✅ SEO meta tags */}
      <Helmet>
        <title>Reserva tu Sesión | Rosmy Terapias en Houston</title>
        <meta
          name="description"
          content="Agenda tu sesión de sanación energética con Rosmy en Houston. Selecciona la fecha y hora que mejor se adapte a ti a través de nuestra plataforma en línea."
        />
        <link rel="canonical" href="https://rosmyterapias.com/booking" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rosmyterapias.com/booking" />
        <meta
          property="og:title"
          content="Reserva tu Sesión | Rosmy Terapias en Houston"
        />
        <meta
          property="og:description"
          content="Selecciona tu horario ideal para reservar sesiones de sanación energética en línea o presenciales."
        />
        <meta
          property="og:image"
          content="https://rosmyterapias.com/preview.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Reserva tu Sesión | Rosmy Terapias"
        />
        <meta
          name="twitter:description"
          content="Agenda fácilmente tu próxima sesión de sanación energética."
        />
        <meta
          name="twitter:image"
          content="https://rosmyterapias.com/preview.webp"
        />
      </Helmet>

      <h2>Agenda tu sesión</h2>
      <p>
        Selecciona la fecha y hora que más te convenga para reservar tu sesión
        con Rosmy.
      </p>

      <div className="booking__embed">
        <iframe
          src={calSrc}
          title="Reserva con Rosmy"
          loading="lazy"
          allow="clipboard-write *; fullscreen *; microphone *; camera *"
        />
      </div>
    </section>
  );
}
