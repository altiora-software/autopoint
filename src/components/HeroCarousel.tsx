"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function HeroCarousel() {
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
      >
        <div>
          <Image
            src="/carusel1.png"
            alt="Renault Logan"
            width={1920}
            height={700}
            className="w-full h-[500px] object-cover md:h-[700px]"
            priority
          />
        </div>
        <div>
          <Image
            src="/carusel2.logan.png"
            alt="Fiat Cronos"
            width={1920}
            height={700}
            className="w-full h-[500px] object-cover md:h-[700px]"
          />
        </div>
        <div>
          <Image
            src="/carusel3.cronos.png"
            alt="Interior del auto"
            width={1920}
            height={700}
            className="w-full h-[500px] object-cover md:h-[700px]"
          />
        </div>
      </Carousel>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
          Tu Auto 0km en Solo 7 Días
        </h1>
        <button
          onClick={handleCTAClick}
          className="mt-6 bg-primary text-background px-6 py-3 rounded-full font-bold text-lg hover:opacity-90 transition"
        >
          QUIERO MI 0KM AHORA
        </button>
      </div>
    </div>
  );
}
