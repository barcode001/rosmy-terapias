import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import clientInfo from "../config/clientInfo";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
        // optionally clear the form
        formRef.current?.reset();
        // redirect to Thank You page
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
        ¿Tienes preguntas o quieres reservar una sesión? Envíanos un mensaje.
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
          {/* Helpful hidden fields for the email template */}
          <input type="hidden" name="to_name" value="Rosmy" />
          <input
            type="hidden"
            name="subject"
            value="Nuevo mensaje desde rosmyterapias.com"
          />

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
            <textarea name="message" rows="5" required></textarea>
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
