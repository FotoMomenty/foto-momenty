import FadeIn from "./FadeIn";

const services = [
  {
    icon: "👶",
    title: "Chrzciny",
    text: "Reportaż z uroczystości oraz rodzinne zdjęcia pełne emocji.",
  },
  {
    icon: "⛪",
    title: "Komunie",
    text: "Pamiątka z jednego z najważniejszych dni w życiu dziecka.",
  },
  {
    icon: "🎂",
    title: "Roczki i urodziny",
    text: "Naturalne zdjęcia z pierwszych urodzin oraz imprez rodzinnych.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Sesje rodzinne",
    text: "Ciepłe, pełne emocji fotografie całej rodziny.",
  },
  {
    icon: "🤰",
    title: "Sesje ciążowe",
    text: "Piękne kadry z wyjątkowego okresu oczekiwania na dziecko.",
  },
  {
    icon: "💍",
    title: "Sesje narzeczeńskie",
    text: "Romantyczne zdjęcia zakochanych w plenerze.",
  },
];

export default function Offer() {
  return (
    <FadeIn>
      <section id="oferta" className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="text-center uppercase tracking-[6px] text-yellow-400">
            Oferta
          </p>

          <h2 className="text-center text-5xl font-light mt-4 mb-16">
            Co fotografujemy?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-zinc-900 p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-5xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {service.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>
    </FadeIn>
  );
}