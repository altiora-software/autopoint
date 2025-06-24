"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground px-6 py-12 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12"
      >
        {/* Logo y derechos */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col items-start gap-4"
        >
          <Image
            src="/autopoint.logo.png"
            alt="Autopoint Jujuy Logo"
            width={140}
            height={40}
            className="object-contain"
          />
          <p className="text-sm text-[--color-secondary]">
            © 2025 Autopoint Jujuy. Todos los derechos reservados.
          </p>
        </motion.div>

        {/* Enlaces */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 text-base"
        >
          {[
            ["0 KM", "/0km"],
            ["Plan de ahorro", "/plan-ahorro"],
            ["Motos", "/motos"],
            ["Usados", "/usados"],
            ["Postventa", "/postventa"],
            ["Empresas", "/empresas"],
            ["Contacto", "/contacto"],
            ["Legales", "/legales"],
          ].map(([label, href], index) => (
            <Link
              key={index}
              href={href}
              className="hover:text-[--color-primary] transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </motion.div>

        {/* WhatsApp Logo animado (opcional) */}
        <motion.a
          href="https://wa.me/5493884136771"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="hidden md:block"
        >
          <Image
            src="/autopoint.logo.png"
            alt="WhatsApp"
            width={48}
            height={48}
            className="rounded-full"
          />
        </motion.a>
      </motion.div>
    </footer>
  );
};

export default Footer;
