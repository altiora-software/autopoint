// "use client";

// import Head from "next/head";
// // import styles from "../styles/Home.module.css";
// // import { event as gaEvent } from "nextjs-google-analytics";
// import HeroCarousel from "@/components/HeroCarousel";
// import BannerRutaJujuy from "@/components/BannerRuta";
// import SectionHero from "@/components/SectionHero";
// import SectionDetails from "@/components/SectionDetails";

// const LandingAutos = () => {
//   // const handleCTAClick = () => {
//   //   gaEvent("cta_autos_click", {
//   //     category: "CTA",
//   //     label: "Conseguir Auto 0km - Empezar ahora",
//   //   });
//   //   window.open(
//   //     "https://wa.me/5493884136771?text=Hola!%20Quiero%20mi%200km%20en%207%20d%C3%ADas%20🚗🔥",
//   //     "_blank"
//   //   );
//   // };

//   return (
//     <>
//       <Head>
//         <title>Tu 0km en 7 Días | AUTOPOINT JUJUY</title>
//         <meta
//           name="description"
//           content="Conseguí tu Renault Logan o Fiat Cronos. Ideal para Uber o tu primer 0km. Financiación accesible y entrega rápida garantizada."
//         />
//         <meta
//           property="og:title"
//           content="Tu 0km en 7 Días | AUTOPOINT JUJUY"
//         />
//         <meta
//           property="og:description"
//           content="Comprá tu auto nuevo con entrega en 7 días. Accedé al sueño del primer 0km con planes flexibles."
//         />
//         <meta property="og:image" content="/autos-promo.webp" />
//         <meta property="og:url" content="https://autopoint.com.ar/0km" />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="canonical" href="https://autopoint.com.ar/0km" />
//       </Head>

//       <div className="flex flex-col items-center min-h-screen bg-[--color-background] text-[--color-foreground]">
//         {/* NAVBAR  */}

//         {/* HERO  */}
//         <HeroCarousel />
//         <main className="flex flex-col items-center w-full max-w-6xl px-6 md:px-10 py-12 gap-20">
//           <SectionHero />
//           {/* <section className={styles.details}>
//             <h2 className={styles.tableTitle}>Detalles de la promoción</h2>
//             <table className={styles.table}>
//               <tbody>
//                 <tr>
//                   <td className={styles.iconCell}>✅</td>
//                   <td className={styles.label}>
//                     Acceso al sueño del primer 0km
//                   </td>
//                   <td className={styles.value}>
//                     Con solo <strong>$3.500.000</strong> de entrega inicial.
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className={styles.iconCell}>⚡</td>
//                   <td className={styles.label}>Entrega rápida</td>
//                   <td className={styles.value}>
//                     Recibí tu auto en 7 a 10 días hábiles.
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className={styles.iconCell}>🚖</td>
//                   <td className={styles.label}>Ideal para trabajar</td>
//                   <td className={styles.value}>
//                     Iniciá tu camino en Uber o Cabify desde ya.
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className={styles.iconCell}>🔥</td>
//                   <td className={styles.label}>Cuotas fijas</td>
//                   <td className={styles.value}>
//                     48 cuotas de <strong>$650.000*</strong> mensuales.
//                     Financiación real.
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <p className={styles.legal}>
//               *Monto y cuotas sujetas a evaluación crediticia.
//             </p>
//           </section> */}

//           <SectionDetails />

//           {/* <section className={styles.ctaSection}>
//             <h2>Consultá ahora</h2>
//             <p>
//               ¡Reservá tu unidad <strong>antes del próximo cierre</strong>!
//             </p>
//             <button className={styles.ctaButton} onClick={handleCTAClick}>
//               🟢 Quiero mi 0km ahora
//             </button>
//           </section> */}
//         </main>
//         <BannerRutaJujuy />
//         {/* <footer className={styles.footer}>
//           AUTOPOINT JUJUY – Automatizando tu próxima compra inteligente
//         </footer> */}
//       </div>
//     </>
//   );
// };

// export default LandingAutos;


// 🚫 Elimina este import si migrás a `metadata` correctamente
// import Head from "next/head";

// Componentes principales de la landing
import HeroCarousel from "@/components/HeroCarousel";
import BannerRutaJujuy from "@/components/BannerRuta";
import SectionHero from "@/components/SectionHero";
import SectionDetails from "@/components/SectionDetails";
import Footer from "@/components/Footer";

// ✅ METADATOS PARA SEO AUTOMÁTICO (reemplaza el uso de <Head>)
export const metadata = {
  title: "Tu 0km en 7 Días | AUTOPOINT JUJUY",
  description:
    "Conseguí tu Renault Logan o Fiat Cronos. Ideal para Uber o tu primer 0km. Financiación accesible y entrega rápida garantizada.",
  keywords: [
    "Auto 0km Jujuy",
    "Comprar auto en cuotas",
    "Autos para Uber",
    "Renault Logan 0km",
    "Fiat Cronos 0km",
    "Financiación auto nuevo",
    "Entrega inmediata autos",
    "AUTOPOINT JUJUY",
    "Plan de auto 0km",
    "Primer auto 0km",
    "Autos con entrega rápida",
    "Autos en cuotas Jujuy",
  ],
  openGraph: {
    title: "AUTOPOINT JUJUY | Tu Auto 0KM en 7 Días",
    description:
      "Accedé a tu Renault Logan o Fiat Cronos hoy mismo. Entrega en 7 días, financiación en cuotas fijas y asesoramiento directo.",
    url: "https://autopoint.com.ar/0km",
    siteName: "AUTOPOINT JUJUY",
    images: [
      {
        url: "/autos-promo.webp",
        width: 1200,
        height: 630,
        alt: "Autos Renault Logan y Fiat Cronos - AUTOPOINT JUJUY",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AUTOPOINT JUJUY | Tu Auto 0KM en 7 Días",
    description:
      "Comprá tu auto 0km con entrega rápida y cuotas accesibles. Ideal para Uber o tu primer auto.",
    images: ["/autos-promo.webp"],
    creator: "@autopointjujuy",
  },
};

// 🧠 Página principal del funnel
const LandingAutos = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[--color-background] text-[--color-foreground]">
      {/* Carrusel superior con CTA principal */}
      <HeroCarousel />

      
      {/* Contenido central de la landing */}
      <main className="flex flex-col items-center w-full max-w-6xl px-6 md:px-10 py-12 gap-20">
        {/* Sección de título, subtítulo e imagen */}
        <SectionHero />

        {/* Sección con la tabla de beneficios y detalles */}
        <SectionDetails />

        {/* Próximamente: Sección CTA y Footer */}
        {/* <SectionCTA /> */}
      </main>

      {/* Banner final con ubicación o refuerzo visual */}
      <BannerRutaJujuy />
      {/* FOOTER  */}
      <Footer />
    </div>
  );
};

export default LandingAutos;
