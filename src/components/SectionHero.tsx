import Image from "next/image";

export default function SectionHero() {
  return (
    <section className="w-full max-w-4xl bg-[#222] text-center px-4 sm:px-6 py-10 rounded-[20px] mb-12 shadow-[0_0_20px_rgba(255,215,0,0.15)]">
      <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-[#fff8dc] bg-clip-text text-transparent mb-4">
        Tu Auto 0km en Solo 7 Días 🚗🔥
      </h1>
      <p className="text-base sm:text-lg text-gray-300 mb-6">
        Conseguí hoy tu Renault Logan o Fiat Cronos. Ideal para Uber o tu primer
        0km.
      </p>
      <Image
        src="/autos-promocion.png"
        alt="Autos Logan y Cronos"
        width={1000}
        height={600}
        className="w-full h-auto mx-auto rounded-xl shadow-[0_0_12px_rgba(255,215,0,0.3)]"
      />
    </section>
  );
}
