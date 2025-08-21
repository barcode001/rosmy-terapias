import React from "react";

function Booking() {
  return (
    <section id="booking" className="booking wrapper">
      <h2>Agenda tu sesión</h2>
      <p>
        Selecciona la fecha y hora que más te convenga para reservar tu sesión
        con Rosmy.
      </p>

      <div className="booking__embed">
        <iframe
          src="https://cal.com/rosmy-terapias/15min"
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </section>
  );
}

export default Booking;
