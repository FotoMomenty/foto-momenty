export default function Stats() {
  return (
    <section className="bg-yellow-500 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-5xl font-bold text-black">150+</h2>
            <p className="mt-3 text-black text-lg">
              Wykonanych sesji
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-black">100%</h2>
            <p className="mt-3 text-black text-lg">
              Zadowolonych klientów
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-black">5★</h2>
            <p className="mt-3 text-black text-lg">
              Profesjonalna obsługa
            </p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-black">24h</h2>
            <p className="mt-3 text-black text-lg">
              Odpowiedź na wiadomości
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}