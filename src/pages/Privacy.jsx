import React from "react";

export default function Privacy() {
  return (
    <section className="privacy wrapper">
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
