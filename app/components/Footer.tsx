export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-gray-400">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Logo */}
          <div>

            <h2 className="text-3xl text-white font-light">
              FotoMomenty
            </h2>

            <p className="mt-4 leading-8">
              Natalia i Piotr
              <br />
              Fotografowie okolicznościowi
            </p>

          </div>

          {/* Menu */}
          <div>

            <h3 className="text-white text-xl mb-6">
              Menu
            </h3>

            <ul className="space-y-3">
              <li><a href="#hero" className="hover:text-yellow-400">Start</a></li>
              <li><a href="#onas" className="hover:text-yellow-400">O nas</a></li>
              <li><a href="#oferta" className="hover:text-yellow-400">Oferta</a></li>
              <li><a href="#portfolio" className="hover:text-yellow-400">Portfolio</a></li>
              <li><a href="#kontakt" className="hover:text-yellow-400">Kontakt</a></li>
            </ul>

          </div>

          {/* Kontakt */}
          <div>

            <h3 className="text-white text-xl mb-6">
              Kontakt
            </h3>

            <div className="space-y-3">

              <p>📍 Legionowo i okolice</p>

              <p>
                📞
                <a
                  href="tel:+48511337594"
                  className="hover:text-yellow-400 ml-2"
                >
                  511 337 594
                </a>
              </p>

              <p>
                📧
                <a
                  href="mailto:fotomomentykontakt@gmail.com"
                  className="hover:text-yellow-400 ml-2"
                >
                  fotomomentykontakt@gmail.com
                </a>
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-sm">
        © {year} FotoMomenty • Wszelkie prawa zastrzeżone.
      </div>

    </footer>
  );
}