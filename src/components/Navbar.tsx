"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "./Container";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background text-foreground shadow-md z-50 fixed top-0 w-full">
      <Container className="h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/autopoint.logo.png"
            alt="Autopoint Logo"
            width={140}
            height={30}
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#logan" className="hover:text-primary">
            Logan
          </a>
          <a href="#cronos" className="hover:text-primary">
            Cronos
          </a>
          <a href="#fotos" className="hover:text-primary">
            Fotos
          </a>
          <a href="#contacto" className="hover:text-primary">
            Contacto
          </a>
          <a
            href="#cta"
            className="bg-primary text-background px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
            Quiero mi 0km
          </a>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </Container>

      {/* Mobile nav animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-background px-4 pb-4 pt-2 text-lg font-medium space-y-6 shadow-lg text-center"
          >
            <a href="#logan" className="block hover:text-primary font-bold">
              Logan
            </a>
            <a href="#cronos" className="block hover:text-primary font-bold">
              Cronos
            </a>
            <a href="#fotos" className="block hover:text-primary font-bold">
              Fotos
            </a>
            <a href="#contacto" className="block hover:text-primary font-bold">
              Contacto
            </a>
            <a
              href="#cta"
              className="block bg-primary text-background px-4 py-2 rounded-md font-semibold text-center hover:opacity-90 transition"
            >
              Quiero mi 0km
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
