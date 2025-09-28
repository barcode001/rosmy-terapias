import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Taller() {
  const nextThursday = (() => {
    const now = new Date();
    const day = now.getDay(); // 0=Sun..6=Sat
    const daysUntilThu = (4 - day + 7) % 7 || 7;
    const d = new Date(now);
    d.setDate(now.getDate() + daysUntilThu);
    return new Intl.DateTimeFormat("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(d);
  })();

  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>Taller de Energía y Bienestar | Rosmy Terapias</title>
        <meta
          name="description"
          content="Taller en línea por Zoom: energía, conciencia y liberación emocional. Bienestar físico y espiritual todos los jueves de 8:00 p.m. a 10:00 p.m. hora Texas."
        />
        <link rel="canonical" href="https://rosmyterapias.com/taller" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rosmyterapias.com/taller" />
        <meta
          property="og:title"
          content="Taller de Energía y Bienestar | Rosmy Terapias"
        />
        <meta
          property="og:description"
          content="Conéctate al Taller de Energía y Bienestar en línea. Jueves 8-10 p.m. hora de Texas. Energía vital, liberación emocional y bienestar integral."
        />
        <meta
          property="og:image"
          content="https://rosmyterapias.com/preview.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Taller de Energía y Bienestar | Rosmy Terapias"
        />
        <meta
          name="twitter:description"
          content="Sesiones en línea por Zoom todos los jueves de 8 a 10 p.m. (hora de Texas)."
        />
        <meta
          name="twitter:image"
          content="https://rosmyterapias.com/preview.webp"
        />

        {/* JSON-LD Schema */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Taller de Energía y Bienestar",
            "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "organizer": { "@type": "Person", "name": "Rosmy" },
            "location": {
              "@type": "VirtualLocation",
              "url": "https://rosmyterapias.com/taller"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://rosmyterapias.com/contact?reason=taller",
              "availability": "https://schema.org/InStock"
            },
            "startDate": "2025-01-01T20:00:00-06:00",
            "endDate": "2025-01-01T22:00:00-06:00",
            "description": "Taller en línea por Zoom. Energía y conciencia, liberación emocional y mental, bienestar físico y espiritual."
          }
        `}</script>
      </Helmet>

      {/* ✅ Page Content */}
      <section className="taller-page wrapper" aria-labelledby="taller-heading">
        <header className="taller-header">
          <h1 id="taller-heading">Talleres de Energía y Bienestar</h1>
          <p className="taller-sub">
            <strong>Formato:</strong> En línea por <strong>Zoom</strong> —
            conéctate desde cualquier lugar.
          </p>
          <p className="taller-time">
            <span>📅 Día:</span> <strong>Jueves</strong> &nbsp;·&nbsp;
            <span>🕗 Horario:</span> <strong>8:00 p.m. – 10:00 p.m.</strong>{" "}
            (hora de Texas) &nbsp;·&nbsp;
            <span>⏳ Duración:</span> <strong>2 horas</strong>
          </p>
          <p className="taller-next">
            Próxima fecha sugerida: <strong>{nextThursday}</strong>
          </p>

          <div className="cta">
            <Link to="/contact?reason=taller" className="btn-primary">
              Reservar mi lugar →
            </Link>
          </div>
        </header>

        <hr />

        <section className="taller-section">
          <h2>¿Qué trabajamos en cada encuentro?</h2>
          <ul className="bullets">
            <li>
              <strong>Energía y conciencia:</strong> aprendemos a conectar con
              la energía vital y a fortalecerla.
            </li>
            <li>
              <strong>Liberación emocional y mental:</strong> técnicas para
              soltar bloqueos, traumas y memorias del pasado.
            </li>
            <li>
              <strong>Bienestar físico y espiritual:</strong> integración del
              cuerpo, la mente y el espíritu para lograr equilibrio.
            </li>
            <li>
              <strong>Prácticas guiadas:</strong> meditaciones, ejercicios de
              respiración y conexión energética para elevar tu vibración.
            </li>
          </ul>
        </section>

        <section className="taller-section">
          <h2>Un espacio seguro y amoroso</h2>
          <p>
            Este taller es un espacio íntimo donde podrás{" "}
            <strong>aprender, sanar y crecer</strong>, compartiendo con personas
            que buscan lo mismo:{" "}
            <strong>expandir su conciencia y transformar su vida</strong>.
          </p>
        </section>

        <section className="taller-section">
          <h2>Preguntas frecuentes</h2>
          <details className="faq">
            <summary>¿Cómo recibo el enlace de Zoom?</summary>
            <p>
              Tras reservar, te enviaremos el enlace de Zoom y un recordatorio
              antes del taller.
            </p>
          </details>
          <details className="faq">
            <summary>¿Necesito experiencia previa?</summary>
            <p>
              No. Todo está guiado paso a paso, y las prácticas se adaptan a
              todos los niveles.
            </p>
          </details>
          <details className="faq">
            <summary>¿Qué debo preparar?</summary>
            <p>
              Un lugar tranquilo, audífonos si puedes, agua, y una libreta para
              anotar tus procesos e intención.
            </p>
          </details>
        </section>

        <div className="cta cta-bottom">
          <Link to="/contact?reason=taller" className="btn-primary">
            Quiero apartar mi lugar
          </Link>
        </div>
      </section>
    </>
  );
}
