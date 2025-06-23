// aqui va la info de la promo para sacar autos 0km
export default function SectionDetails() {
  return (
    <section className="w-full max-w-4xl bg-[#1b1b1b] text-[--color-foreground] py-10 px-4 sm:px-6 rounded-2xl shadow-[0_0_24px_rgba(255,215,0,0.08)] mb-20">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-[#fff3c2]">
        Detalles de la promoción
      </h2>

      <table className="w-full text-sm sm:text-base text-gray-100 border-collapse">
        <tbody>
          {[
            [
              "✅",
              "Acceso al sueño del primer 0km",
              "Con solo $3.500.000 de entrega inicial.",
            ],
            ["⚡", "Entrega rápida", "Recibí tu auto en 7 a 10 días hábiles."],
            [
              "🚖",
              "Ideal para trabajar",
              "Iniciá tu camino en Uber o Cabify desde ya.",
            ],
            [
              "🔥",
              "Cuotas fijas",
              "48 cuotas de $650.000* mensuales. Financiación real.",
            ],
          ].map(([icon, label, value], i) => (
            <tr
              key={i}
              className="border-b border-[#2a2a2a] last:border-none align-top"
            >
              <td className="w-8 text-center text-lg pt-1">{icon}</td>
              <td className="w-40 sm:w-48 font-semibold text-[#f5c542] pb-3">
                {label}
              </td>
              <td className="pb-3 text-[#e6e6e6] leading-relaxed">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-xs mt-4 text-right text-[#999] italic">
        *Monto y cuotas sujetas a evaluación crediticia.
      </p>
    </section>
  );
}
  