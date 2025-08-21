import React from "react";

const testimonials = [
  {
    name: "María",
    text: "Una experiencia transformadora, sentí mucha paz después de la sesión.",
    date: "Julio 2025",
  },
  {
    name: "José",
    text: "Rosmy es increíble, muy amorosa y dedicada en su trabajo.",
    date: "Junio 2025",
  },
  {
    name: "Ana",
    text: "Muy buena sesión, me ayudó a reconectar conmigo misma.",
    date: "Mayo 2025",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials wrapper">
      <h2>Testimonios</h2>
      <div className="testimonials__grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-card__text">“{t.text}”</p>
            <h4 className="testimonial-card__name">— {t.name}</h4>
            <small className="testimonial-card__date">{t.date}</small>
          </div>
        ))}
      </div>

      {/* TikTok CTA */}
      <div className="testimonials__cta">
        <p>
          Conoce más experiencias y sesiones en vivo en TikTok:
          <a
            href="https://www.tiktok.com/@rosmyterapias1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @rosmyterapias1
          </a>
        </p>
      </div>
    </section>
  );
}
