import React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <section id="booking" className="booking wrapper">
      <h2>Agenda tu sesión</h2>
      <p>
        Selecciona la fecha y hora que más te convenga para reservar tu sesión
        con Rosmy.
      </p>

      <Cal
        namespace="15min"
        calLink="rosmy-terapias/15min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </section>
  );
}
