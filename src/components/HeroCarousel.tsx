"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Estilos del carrusel
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/HeroCarousel.module.css";

export default function HeroCarousel() {
  const handleCTAClick = () => {
    // Aquí podés agregar eventos de analytics o pixel si querés
    window.open(
      "https://wa.me/5493884136771?text=Hola!%20Quiero%20mi%200km%20en%207%20d%C3%ADas%20🚗🔥",
      "_blank"
    );
  };

  return (
    <div className={styles.hero}>
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
          <img src="/carusel1.png" alt="Renault Logan" />
        </div>
        <div>
          <img src="/carusel2.logan.png" alt="Fiat Cronos" />
        </div>
        <div>
          <img src="/carusel3.cronos.png" alt="Interior del auto" />
        </div>
      </Carousel>

      <div className={styles.overlay}>
        <h1>Tu Auto 0km en Solo 7 Días</h1>
        <button className={styles.ctaButton} onClick={handleCTAClick}>
        Quiero mi 0km ahora
        </button>
      </div>
    </div>
  );
}
