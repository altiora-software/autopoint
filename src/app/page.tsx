'use client';

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { event as gaEvent } from 'nextjs-google-analytics';

const LandingAutos = () => {
  const handleCTAClick = () => {
    gaEvent('cta_autos_click', { category: 'CTA', label: 'Conseguir Auto 0km - Empezar ahora' });
    window.open('https://wa.me/5493884136771?text=Hola!%20Quiero%20mi%200km%20en%207%20d%C3%ADas%20🚗🔥', '_blank');
  };

  return (
    <>
      <Head>
        <title>Tu 0km en 7 Días | AUTOPOINT JUJUY</title>
        <meta name="description" content="Conseguí tu Renault Logan o Fiat Cronos. Ideal para Uber o tu primer 0km. Financiación accesible y entrega rápida garantizada." />
        <meta property="og:title" content="Tu 0km en 7 Días | AUTOPOINT JUJUY" />
        <meta property="og:description" content="Comprá tu auto nuevo con entrega en 7 días. Accedé al sueño del primer 0km con planes flexibles." />
        <meta property="og:image" content="/autos-promo.webp" />
        <meta property="og:url" content="https://autopoint.com.ar/0km" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://autopoint.com.ar/0km" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <section className={styles.hero}>
            <h1 className={styles.title}>Tu Auto 0km en Solo 7 Días 🚗🔥</h1>
            <p className={styles.subtitle}>Conseguí hoy tu Renault Logan o Fiat Cronos. Ideal para Uber o tu primer 0km.</p>
            <img className={styles.heroImage} src="/autos-promocion.png" alt="Autos Logan y Cronos" />
          </section>

          <section className={styles.details}>
            <h2 className={styles.tableTitle}>Detalles de la promoción</h2>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <td className={styles.iconCell}>✅</td>
                  <td className={styles.label}>Acceso al sueño del primer 0km</td>
                  <td className={styles.value}>Con solo <strong>$3.500.000</strong> de entrega inicial.</td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>⚡</td>
                  <td className={styles.label}>Entrega rápida</td>
                  <td className={styles.value}>Recibí tu auto en 7 a 10 días hábiles.</td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>🚖</td>
                  <td className={styles.label}>Ideal para trabajar</td>
                  <td className={styles.value}>Iniciá tu camino en Uber o Cabify desde ya.</td>
                </tr>
                <tr>
                  <td className={styles.iconCell}>🔥</td>
                  <td className={styles.label}>Cuotas fijas</td>
                  <td className={styles.value}>
                    48 cuotas de <strong>$650.000*</strong> mensuales. Financiación real.
                  </td>
                </tr>
              </tbody>
            </table>
            <p className={styles.legal}>*Monto y cuotas sujetas a evaluación crediticia.</p>
          </section>


          <section className={styles.ctaSection}>
            <h2>Consultá ahora</h2>
            <p>¡Reservá tu unidad <strong>antes del próximo cierre</strong>!</p>
            <button className={styles.ctaButton} onClick={handleCTAClick}>
              🟢 Quiero mi 0km ahora
            </button>
          </section>
        </main>

        <footer className={styles.footer}>
          AUTOPOINT JUJUY – Automatizando tu próxima compra inteligente
        </footer>
      </div>
    </>
  );
};

export default LandingAutos;
