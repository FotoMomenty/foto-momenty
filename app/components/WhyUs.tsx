export default function WhyUs() {
  const items = [
    {
      icon: "📸",
      title: "Naturalne zdjęcia",
      text: "Stawiamy na prawdziwe emocje i uchwycenie wyjątkowych chwil.",
    },
    {
      icon: "🤝",
      title: "Indywidualne podejście",
      text: "Każde zlecenie traktujemy wyjątkowo i dopasowujemy się do Waszych oczekiwań.",
    },
    {
      icon: "📍",
      title: "Działamy lokalnie",
      text: "Legionowo, Warszawa i okolice do 50 km.",
    },
    {
      icon: "❤️",
      title: "Pasja",
      text: "Fotografia to dla nas coś więcej niż praca – to sposób na zatrzymywanie wspomnień.",
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-center uppercase tracking-[6px] text-yellow-400">
          Dlaczego FotoMomenty?
        </p>

        <h2 className="text-center text-5xl font-light mt-4 mb-16">
          Dlaczego warto nam zaufać?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-zinc-900 p-8 text-center border border-white/10 hover:border-yellow-400 transition"
            >
              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}