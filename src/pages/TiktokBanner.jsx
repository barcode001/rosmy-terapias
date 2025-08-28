// src/components/TiktokBanner.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";

export default function TiktokBanner() {
  return (
    <section className="tiktok-banner">
      <div className="tiktok-banner__inner wrapper">
        {/* TikTok Icon */}
        <div className="tiktok-banner__logo" aria-hidden="true">
          <FaTiktok size={50} />
        </div>

        {/* Text + Actions */}
        <div className="tiktok-banner__copy">
          <span className="tiktok-banner__badge">✨ En Vivo ✨</span>

          <h2 className="tiktok-banner__title">
            Síguenos en <span className="highlight">TikTok</span>
          </h2>

          <p className="tiktok-banner__subtitle">
            Transmisiones en vivo{" "}
            <strong>Lunes a Sábado de 6:00 PM a 8:00 PM</strong>
          </p>

          <div className="tiktok-banner__actions">
            <a
              href="https://www.tiktok.com/@rosmyterapias1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Seguir en TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
