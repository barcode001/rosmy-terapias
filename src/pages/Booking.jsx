import React from "react";

export default function Booking() {
  // Exact Cal slug; added light background + brand color
  const calSrc =
    "https://cal.com/rosmy-terapias/15min" +
    "?embed=1&layout=month_view&hide_gdpr_banner=1" +
    "&background_color=ffffff&primary_color=7B3F9E";

  return (
    <section id="booking" className="booking wrapper">
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
