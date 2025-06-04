"use client";

import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

const links = [
  { label: "Logan", href: "#logan" },
  { label: "Cronos", href: "#cronos" },
  { label: "Fotos", href: "#fotos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para agregar sombra a la navbar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll suave para anclas
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a
          href="#"
          className={styles.logo}
          onClick={(e) => handleLinkClick(e, "#")}
        >
          AUTOPOINT
        </a>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.barActive : styles.bar}></span>
          <span className={menuOpen ? styles.barActive : styles.bar}></span>
          <span className={menuOpen ? styles.barActive : styles.bar}></span>
        </button>

        <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleLinkClick(e, href)}
              className={styles.link}
            >
              {label}
            </a>
          ))}
          <button
            className={styles.ctaButton}
            onClick={() => {
              window.open(
                "https://wa.me/5493884136771?text=Hola!%20Quiero%20mi%200km%20en%207%20d%C3%ADas%20🚗🔥",
                "_blank"
              );
            }}
          >
            Quiero mi 0km
          </button>
        </div>
      </div>
    </nav>
  );
}
