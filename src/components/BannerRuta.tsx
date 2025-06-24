"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BannerRutaJujuy() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/ruta.jujuy.png"
        alt="Ruta 40 en Jujuy"
        width={1600}
        height={400}
        className="object-cover w-full h-full"
        priority
      />

      {/* Capa oscura y contenido animado */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 bg-black/50 flex items-center px-6 sm:px-10"
      >
        <div className="text-white max-w-xl">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            Llevate tu <span className="text-[var(--color-primary)]">0KM</span>{" "}
            sin moverte de casa
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-[var(--color-secondary)] mb-5"
          >
            Envíos a toda la provincia de Jujuy · 100% online · Sin vueltas
          </motion.p>

          <motion.a
            href="https://wa.me/549388123456"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block bg-[var(--color-primary)] text-black font-semibold px-6 py-3 rounded shadow transition"
          >
            Cotizá por WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
