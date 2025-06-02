import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AUTOPOINT JUJUY | Tu Auto 0KM en 7 Días",
  description:
    "Conseguí tu primer 0km con AUTOPOINT JUJUY. Renault Logan y Fiat Cronos con entrega inmediata, planes de financiación accesibles y atención personalizada para conductores nuevos o de Uber.",
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
    "Autos en cuotas Jujuy"
  ],
  metadataBase: new URL("https://autopoint.com.ar"),
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
