import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container wrapper">
        <p className="footer__credits">
          © {new Date().getFullYear()} Rosmy Terapias. Todos los derechos
          reservados.
        </p>

        <nav className="footer__links">
          <HashLink smooth to="/#hero">
            Inicio
          </HashLink>
          <HashLink smooth to="/#services">
            Servicios
          </HashLink>
          <HashLink smooth to="/#about">
            Sobre mí
          </HashLink>
          <HashLink smooth to="/#contact">
            Contacto
          </HashLink>
          <Link to="/privacy">Privacidad & Aviso Legal</Link>
        </nav>

        <p className="footer__dev">
          Sitio creado por{" "}
          <a
            href="https://theedenscode.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            EdensCode
          </a>
        </p>
      </div>
    </footer>
  );
}
