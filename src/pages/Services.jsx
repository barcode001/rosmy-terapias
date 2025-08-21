import React from "react";
import energyIcon from "../assets/icons/icon-energy2.png";

const items = [
  {
    title: "Terapias Energéticas 1:1",
    desc: "Sesiones para armonizar cuerpo y mente, liberar emociones y recuperar paz interior.",
    icon: <img src={energyIcon} alt="Energía icono" className="service__img" />,
  },
  {
    title: "Talleres y Grupos",
    desc: "Espacios colectivos para sanar desde la conciencia (energía, peso consciente, hábitos).",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 13c-2.8 0-5 2.2-5 5 0 .6.4 1 1 1h8c.6 0 1-.4 1-1 0-2.8-2.2-5-5-5Zm10 0c-.7 0-1.4.1-2 .4 1.8 1 3 2.8 3 4.9 0 .6-.4 1-1 1h5c.6 0 1-.4 1-1 0-2.8-2.2-5-5-5Z" />
      </svg>
    ),
  },
  {
    title: "Acompañamiento Amoroso",
    desc: "Integración de energía, hábitos diarios y conexión espiritual.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.1 20.3a1 1 0 0 1-1.2 0C7.1 17.6 2 13.8 2 9.1 2 6.3 4.3 4 7.1 4c1.6 0 3.1.7 4.1 1.9A5.3 5.3 0 0 1 15.3 4c2.8 0 5.1 2.3 5.1 5.1 0 4.7-5.1 8.5-8.3 11.2Z" />
      </svg>
    ),
  },
];
export default function Services() {
  return (
    <section id="services" className="services wrapper">
      <header className="services__header">
        <h2>Qué ofrezco</h2>
        <p className="services__sub">
          Apoyo integral para tu bienestar energético, emocional y espiritual.
        </p>
      </header>

      <ul className="services__grid" role="list">
        {items.map(({ title, desc, icon }) => (
          <li key={title} className="service">
            <div className="service__icon" aria-hidden="true">
              {icon}
            </div>
            <h3 className="service__title">{title}</h3>
            <p className="service__desc">{desc}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
