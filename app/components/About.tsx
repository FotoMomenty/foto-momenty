import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <FadeIn>
      <section
        id="onas"
        className="bg-white py-24 px-6"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Zdjęcie */}

          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">

            <Image
              src="/about/about.jpg"
              alt="Natalia i Piotr - FotoMomenty"
              fill
              className="object-cover"
            />

          </div>

          {/* Tekst */}

          <div>

            <p className="uppercase tracking-[6px] text-yellow-600 mb-4">
              O nas
            </p>

            <h2 className="text-5xl text-black font-light mb-8">
              Natalia i Piotr
            </h2>

            <div className="space-y-6 text-lg leading-9 text-gray-700">

              <p>
                Jesteśmy duetem fotografów tworzących markę
                <strong> FotoMomenty</strong>.
              </p>

              <p>
                Uwielbiamy zatrzymywać emocje, naturalne uśmiechy i chwile,
                do których będziecie wracać przez wiele lat.
              </p>

              <p>
                Fotografujemy chrzciny, komunie, roczki, sesje rodzinne,
                ciążowe, narzeczeńskie oraz 18-stki.
              </p>

              <p>
                Każde zlecenie traktujemy indywidualnie, dbając o swobodną
                atmosferę i najwyższą jakość zdjęć.
              </p>

              <p>
                Działamy głównie na terenie Legionowa, Warszawy oraz okolic,
                ale z przyjemnością dojedziemy również w inne miejsca.
              </p>

            </div>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#portfolio"
                className="rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black hover:bg-yellow-400 transition"
              >
                Zobacz portfolio
              </a>

              <a
                href="#kontakt"
                className="rounded-full border-2 border-black px-8 py-4 font-semibold text-black hover:bg-black hover:text-white transition"
              >
                Skontaktuj się
              </a>

            </div>

          </div>

        </div>
      </section>
    </FadeIn>
  );
}