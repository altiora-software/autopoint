"use client";

import { motion } from "framer-motion";
import {
  CarIcon,
  BadgeDollarSign,
  SparklesIcon,
  TruckIcon,
} from "lucide-react";

const promos = [
  {
    title: "0km en 7 días",
    subtitle:
      "Accedé a nuestras promociones y llevate tu 0km en tan solo 7 días hábiles.",
    icon: <CarIcon className="w-7 h-7" />,
  },
  {
    title: "Cuotas reales",
    subtitle:
      "Elegí entre cuotas fijas o UVA, con planes adaptados a tu perfil crediticio.",
    icon: <BadgeDollarSign className="w-7 h-7" />,
  },
  {
    title: "Todo incluido",
    subtitle:
      "Patente, traslado, gestoría y más. Entregas sin sorpresas ni costos ocultos.",
    icon: <SparklesIcon className="w-7 h-7" />,
  },
  {
    title: "Entrega asegurada",
    subtitle:
      "Reservá tu auto hoy y asegurá tu entrega sin demoras, con condiciones claras.",
    icon: <TruckIcon className="w-7 h-7" />,
  },
];

export default function PromosOptions() {
  return (
    <section className="bg-background text-foreground px-6">
      <motion.h2
        className="text-center text-3xl font-bold mb-10"
        animate={{
          scale: [1, 1.03, 1],
          opacity: [1, 0.9, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      >
        Promociones Activas
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {promos.map((promo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="min-h-[220px] bg-dark border-b-primary text-foreground p-5 rounded-xl shadow-md flex flex-col justify-start gap-3 transition-all duration-700 hover:bg-primary hover:text-black"
          >
            <div className="bg-[--color-background] p-2 rounded-full">
              {promo.icon}
            </div>
            <h3 className="text-lg font-semibold">{promo.title}</h3>
            <p className="text-sm opacity-80">{promo.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
