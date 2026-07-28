import FadeIn from "./FadeIn";

const reviews = [
  {
    name: "Anna K.",
    text: "Przepiękne zdjęcia z chrztu naszego synka. Cudowna atmosfera i pełen profesjonalizm!",
  },
  {
    name: "Karolina i Michał",
    text: "Sesja rodzinna wyszła rewelacyjnie. Zdjęcia naturalne i pełne emocji. Polecamy z całego serca.",
  },
  {
    name: "Magdalena",
    text: "Bardzo miła współpraca, szybki kontakt i piękne fotografie. Na pewno wrócimy na kolejną sesję.",
  },
];

export default function Reviews() {
  return (
    <FadeIn>
      <section
        id="opinie"
        className="bg-zinc-100 py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <p className="text-center uppercase tracking-[6px] text-yellow-600">
            Opinie
          </p>

          <h2 className="text-center text-5xl font-light text-black mt-4 mb-16">
            Co mówią nasi klienci?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-yellow-500 text-2xl mb-4">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="text-gray-700 leading-8 italic">
                  "{review.text}"
                </p>

                <h3 className="mt-8 text-xl font-semibold text-black">
                  {review.name}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}