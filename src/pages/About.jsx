import React from "react";
import clientInfo from "../config/clientInfo";
import profilePic from "../assets/logo/images/profilepic.webp";

function About() {
  return (
    <section id="about" className="about wrapper">
      <div className="about__image">
        <img
          src={profilePic}
          alt={`Foto de ${clientInfo.ownerName}`}
          loading="lazy"
        />
      </div>
      <div className="about__content">
        <p>
          Soy Rosmy, facilitadora de energía y creadora del espacio
          <strong> Conexión con la Energía</strong>. Acompaño procesos de
          sanación y conciencia desde el amor, ayudando a liberar bloqueos
          emocionales y reconectar con la fuerza interior. Creo firmemente en la
          ley de dar y recibir: lo que compartimos con amor regresa
          multiplicado.
        </p>
        <ul>
          <li>✨ Amor y compasión en cada sesión</li>
          <li>🌿 Reconexión con la energía vital</li>
          <li>🕊️ Espacio seguro para sanar</li>
        </ul>
        <a href="/booking" className="btn-primary">
          Agenda tu sesión
        </a>
      </div>
    </section>
  );
}

export default About;
