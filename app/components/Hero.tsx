import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden"
    >
      {/* Zdjęcie */}
      <Image
        src="/hero/hero.jpg"
        alt="FotoMomenty"
        fill
        priority
        className="object-cover"
      />

      {/* Przyciemnienie */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Treść */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl">

          <p className="uppercase tracking-[8px] text-yellow-400 mb-6">
            Fotografowie okolicznościowi
          </p>

          <h1 className="text-6xl md:text-8xl font-light mb-8">
            FotoMomenty
          </h1>

          <h2 className="text-2xl md:text-3xl font-light mb-8">
            Natalia & Piotr
          </h2>

          <p className="text-lg md:text-xl leading-9 text-gray-200">
            Tworzymy fotografie pełne emocji i naturalnych chwil.
            Chrzciny • Roczki • Komunie • Sesje ciążowe •
            Sesje narzeczeńskie • 18-stki
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

            <a
              href="#portfolio"
              className="rounded-full bg-yellow-500 px-10 py-4 text-lg font-semibold text-black hover:bg-yellow-400 transition"
            >
              Zobacz portfolio
            </a>

            <a
              href="#kontakt"
              className="rounded-full border border-white px-10 py-4 text-lg hover:bg-white hover:text-black transition"
            >
              Skontaktuj się
            </a>

          </div>

        </div>
      </div>

      {/* Strzałka przewijania */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white text-4xl">
        ↓
      </div>
    </section>
  );
}