"use client";

import Image from "next/image";

export default function BannerRutaJujuy() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/ruta.jujuy.png" // Asegurate de moverla a /public
        alt="Ruta 40 en Jujuy"
        width={1600}
        height={400}
        className="object-cover w-full h-full"
        priority
      />

      {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 bg-black/50 flex items-center mx-6">
        <div className="text-white max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Tu próximo <span className="text-[var(--color-primary)]">0KM</span>{" "}
            te espera en Jujuy
          </h2>
          <p className="text-lg text-[var(--color-secondary)] mb-5">
            Entregas en toda la provincia · 100% online
          </p>
          <a
            href="https://wa.me/549388123456"
            className="inline-block bg-[var(--color-primary)] text-black font-semibold px-6 py-3 rounded hover:scale-105 transition-transform shadow"
          >
            Cotizá por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
