import React from "react";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  const pageUrl = "https://rosmyterapias.com/privacy";

  return (
    <section className="privacy wrapper">
      <Helmet>
        <title>Política de Privacidad y Aviso Legal | Rosmy Terapias</title>
        <meta
          name="description"
          content="Lee la política de privacidad y el aviso legal de Rosmy Terapias en Houston. Conoce cómo manejamos tu información personal y los alcances de nuestros servicios de sanación energética."
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:title"
          content="Política de Privacidad y Aviso Legal | Rosmy Terapias"
        />
        <meta
          property="og:description"
          content="Transparencia y confianza: revisa la política de privacidad y los términos legales de Rosmy Terapias en Houston."
        />
        <meta
          property="og:image"
          content="https://rosmyterapias.com/preview.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Política de Privacidad | Rosmy Terapias"
        />
        <meta
          name="twitter:description"
          content="Descubre cómo protegemos tu información y los términos legales de nuestros servicios de sanación energética en Houston."
        />
        <meta
          name="twitter:image"
          content="https://rosmyterapias.com/preview.webp"
        />
      </Helmet>

      <header className="privacy__header">
        <h1>Privacy & Disclaimer</h1>
        <p className="privacy__meta">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      {/* ESPAÑOL */}
      <article className="privacy__block">
        <h2>Política de Privacidad</h2>
        <p>
          Rosmy Terapias respeta tu privacidad. Cuando nos contactas o reservas
          una sesión, podemos recopilar información personal básica (nombre,
          correo, teléfono). Usamos esta información únicamente para agendar y
          comunicarnos contigo sobre tus sesiones.
        </p>
        <ul>
          <li>
            No vendemos, compartimos ni alquilamos tu información personal.
          </li>
          <li>La información que proporciones se mantiene confidencial.</li>
          <li>
            Si deseas actualizar o eliminar tus datos, contáctanos directamente.
          </li>
        </ul>

        <h2>Aviso Legal</h2>
        <p>
          Los servicios de Rosmy Terapias apoyan el crecimiento personal, la
          relajación y el bienestar espiritual, pero{" "}
          <strong>no sustituyen</strong> el tratamiento médico, psicológico o
          psiquiátrico profesional. Si tienes una condición médica o de salud
          mental, consulta a un profesional de la salud autorizado.
        </p>
        <p>
          Al reservar una sesión, reconoces que entiendes y aceptas estos
          términos.
        </p>
      </article>
    </section>
  );
}
