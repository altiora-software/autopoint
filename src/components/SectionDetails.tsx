"use client";

import Image from "next/image";

export default function SectionDetails() {
  const handleClick = () => {
    window.open(
      "https://wa.me/5493884136771?text=Hola!%20Quiero%20mi%200km%20en%207%20d%C3%ADas%20🚗🔥",
      "_blank"
    );
  };

  return (
    <section className="relative w-screen h-[640px] sm:h-[700px] md:h-[760px] lg:h-[820px] xl:h-[880px] overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/cronos.sectionDetails.jpg"
        alt="Fiat Cronos fondo"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Degradado lateral izquierdo */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10" />

      {/* Contenido encima */}
      <div className="relative z-20 h-full flex items-center pl-6 pr-4 sm:pl-10 md:pl-16 lg:pl-20">
        <div className="text-white max-w-xl space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            En Autopoint seguimos cumpliendo sueños
          </h2>
          <p className="text-base sm:text-lg text-neutral-200">
            Hoy podés subirte a tu 0km con entrega incluida y todos los gastos
            cubiertos, sin vueltas ni sorpresas.
          </p>
          <ul className="text-sm sm:text-base space-y-1 text-neutral-300 leading-relaxed">
            <li>🔥 Fiat Cronos o Renault Logan</li>
            <li>💰 Desde $3.500.000 de entrega inicial</li>
            <li>📦 El resto lo abonás en cuotas</li>
            <li>🛣️ Patente, traslado y todo incluido</li>
            <li>🕒 Sin trámites previos ni complicaciones</li>
            <li>📍 Ideal para invertir, trabajar o dejar de alquilar</li>
            <li>📄 Sujeto a evaluación crediticia</li>
          </ul>

          {/* Botón CTA */}
          <button
            onClick={handleClick}
            className="mt-6 bg-primary text-background px-6 py-3 rounded-full font-semibold text-lg hover:opacity-90 transition"
          >
            Quiero mi 0km ahora
          </button>
        </div>
      </div>
    </section>
  );
}
