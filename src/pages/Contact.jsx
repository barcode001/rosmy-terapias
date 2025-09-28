import React, { useRef, useState, useMemo } from "react";
import emailjs from "emailjs-com";
import { useNavigate, useLocation } from "react-router-dom";
import clientInfo from "../config/clientInfo";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { search } = useLocation();

  // Prefill "reason" from ?reason=taller
  const initialReason = useMemo(() => {
    const q = new URLSearchParams(search);
    const r = (q.get("reason") || "").toLowerCase();
    if (r === "taller") return "taller";
    if (r === "sesion") return "sesion";
    return "consulta";
  }, [search]);

  const [reason, setReason] = useState(initialReason);

  const subjectForReason = (r) => {
    switch (r) {
      case "taller":
        return "Reserva Taller Mensual – rosmyterapias.com";
      case "sesion":
        return "Reserva Sesión Individual – rosmyterapias.com";
      default:
        return "Nuevo mensaje desde rosmyterapias.com";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setError("");

    emailjs
      .sendForm(
        "service_x2b8ex9",
        "template_kri3ouh",
        formRef.current,
        "Zmrny_Qj3qwgY6rPU"
      )
      .then(() => {
        formRef.current?.reset();
        navigate("/thank-you");
      })
      .catch((err) => {
        console.error(err);
        setError("Ocurrió un error. Intenta de nuevo.");
      })
      .finally(() => setSending(false));
  };

  return (
    <section className="contact wrapper">
      {/* ✅ SEO meta tags */}
      <Helmet>
        <title>
          Contacto – Rosmy Terapias en Houston | Sesiones Energéticas
        </title>
        <meta
          name="description"
          content="Ponte en contacto con Rosmy Terapias en Houston para consultas o reservas de sesiones de sanación energética y talleres mensuales."
        />
        <link rel="canonical" href="https://rosmyterapias.com/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rosmyterapias.com/contact" />
        <meta
          property="og:title"
          content="Contacto – Rosmy Terapias en Houston"
        />
        <meta
          property="og:description"
          content="Contáctanos para reservar sesiones de terapia energética o apartar tu lugar en el taller mensual."
        />
        <meta
          property="og:image"
          content="https://rosmyterapias.com/preview.webp"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contacto – Rosmy Terapias en Houston"
        />
        <meta
          name="twitter:description"
          content="Consulta general, sesión individual o taller mensual. Escríbenos hoy mismo."
        />
        <meta
          name="twitter:image"
          content="https://rosmyterapias.com/preview.webp"
        />
      </Helmet>

      <h1>Contáctanos</h1>
      <p className="contact__intro">
        ¿Tienes preguntas o quieres reservar una sesión o el taller? Envíanos un
        mensaje.
      </p>

      <div className="contact__grid">
        {/* Contact Info */}
        <div className="contact__info">
          <h3>📞 Teléfono</h3>
          <p>{clientInfo.contact.phone}</p>

          <h3>✉️ Correo</h3>
          <p>{clientInfo.contact.email}</p>

          <h3>📍 Dirección</h3>
          <p>{clientInfo.contact.address}</p>
        </div>

        {/* Contact Form */}
        <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
          <input type="hidden" name="to_name" value="Rosmy" />
          <input
            type="hidden"
            name="subject"
            value={subjectForReason(reason)}
          />

          <label>
            Motivo
            <select
              name="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            >
              <option value="taller">Reservar Taller Mensual</option>
              <option value="sesion">Reservar Sesión Individual</option>
              <option value="consulta">Consulta General</option>
            </select>
          </label>

          <label>
            Nombre
            <input type="text" name="name" required />
          </label>

          <label>
            Correo electrónico
            <input type="email" name="email" required />
          </label>

          <label>
            Mensaje
            <textarea
              name="message"
              rows="5"
              required
              placeholder={
                reason === "taller"
                  ? "Quiero reservar mi lugar para el próximo Taller Mensual..."
                  : reason === "sesion"
                  ? "Me gustaría agendar una sesión individual..."
                  : "Mi consulta es..."
              }
            />
          </label>

          <button type="submit" className="btn-primary" disabled={sending}>
            {sending ? "Enviando..." : "Enviar mensaje"}
          </button>

          {error && (
            <p className="error" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
