import React from "react";
import { Link } from "react-router-dom";

function getNextFirst() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 1, 9, 0, 0);
}
function formatEs(date) {
  return new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export default function TallerPromo({ price = null }) {
  const nextFirst = getNextFirst();
  const nextFirstLabel = formatEs(nextFirst);

  return (
    <section
      className="taller-banner "
      role="region"
      aria-label="Promoción del Taller Mensual"
    >
      <div className="taller-banner__inner wrapper ">
        <div className="taller-banner__copy">
          <div className="taller-banner__badge" aria-label="Cupo limitado">
            ✨ Cupo Limitado ✨
          </div>

          <p className="taller-note">
            Próxima fecha: <strong>{nextFirstLabel}</strong> — cada
            <strong> 1º de mes</strong>. ¡Reserva tu lugar con anticipación!
          </p>

          <h2 className="taller-banner__title">
            Reserva tu lugar para el{" "}
            <span className="highlight">Taller Mensual</span>
            {price && (
              <span className="price">
                · {typeof price === "number" ? price.toFixed(2) : price} USD
              </span>
            )}
          </h2>

          <p className="taller-banner__subtitle">
            Sesión de sanación y crecimiento personal en grupo reducido para
            comenzar el mes con energía renovada.
          </p>

          <ul className="taller-banner__bullets" aria-label="Lo que incluye">
            <li>Guía personalizada en un grupo íntimo</li>
            <li>Ritual de inicio de mes y enfoque de intención</li>
            <li>Prácticas de respiración, conexión y bienestar</li>
          </ul>

          <div className="taller-banner__actions">
            <Link to="/contact?reason=taller" className="btn-primary">
              Reservar mi lugar
            </Link>
            <Link to="/taller" className="btn-ghost">
              Más detalles
            </Link>
          </div>
        </div>

        <div className="taller-banner__art" aria-hidden="true">
          <img
            src="/images/taller-banner.webp"
            alt="Personas reunidas alrededor de un portátil durante el taller"
            className="taller-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
