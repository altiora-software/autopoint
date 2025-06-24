"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleCTAClick = () => {
    window.open(
      "https://wa.me/5493884136771?text=Hola!%20Quiero%20mi%200km%20en%207%20d%C3%ADas%20🚗🔥",
      "_blank"
    );
  };

  return (
    <div className="pt-16 relative">
      <Carousel
        autoPlay
        interval={6000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        showArrows={false}
        stopOnHover={false}
        swipeable
        emulateTouch
        onChange={(index) => setCurrentSlide(index)} // 👈 ¡acá!
      >
        {["/carusel1.png", "/carusel2.logan.png", "/carusel3.cronos.png"].map(
          (src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                width={1920}
                height={700}
                className="w-full h-[500px] object-cover md:h-[700px]"
                priority={idx === 0}
              />
            </motion.div>
          )
        )}
      </Carousel>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide} // 👈 clave única para reiniciar la animación cada vez
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
            <span className="text-primary">AUTOPOINT</span> te acerca tu 0km en
            solo 7 días
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Financiación real, entrega asegurada y todos los gastos incluidos.
          </p>
          <button
            onClick={handleCTAClick}
            className="mt-6 bg-primary text-background px-6 py-3 rounded-full font-bold text-lg hover:opacity-90 transition"
          >
            QUIERO MI 0KM AHORA
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
