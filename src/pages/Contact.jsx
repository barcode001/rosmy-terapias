import React, { useRef, useState, useMemo } from "react";
import emailjs from "emailjs-com";
import { useNavigate, useLocation } from "react-router-dom";
import clientInfo from "../config/clientInfo";

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
          {/* Always include these for EmailJS */}
          <input type="hidden" name="to_name" value="Rosmy" />
          <input
            type="hidden"
            name="subject"
            value={subjectForReason(reason)}
          />

          {/* New: Motivo selector */}
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
