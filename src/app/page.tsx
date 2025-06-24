
import HeroCarousel from "@/components/HeroCarousel";
import BannerRutaJujuy from "@/components/BannerRuta";
// import SectionHero from "@/components/SectionHero";
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
        {/* <SectionHero /> */}

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
