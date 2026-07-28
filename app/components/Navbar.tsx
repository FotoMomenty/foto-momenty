"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="FotoMomenty"
            width={55}
            height={55}
          />

          <div>
            <h2 className="text-2xl text-white font-light">
              Foto<span className="text-yellow-400">Momenty</span>
            </h2>

            <p className="text-xs text-gray-300 tracking-[3px]">
              NATALIA & PIOTR
            </p>
          </div>
        </a>

        {/* Menu komputer */}
        <nav className="hidden lg:flex gap-8 text-white">
          <a href="#onas" className="hover:text-yellow-400 transition">
            O nas
          </a>

          <a href="#oferta" className="hover:text-yellow-400 transition">
            Oferta
          </a>

          <a href="#portfolio" className="hover:text-yellow-400 transition">
            Portfolio
          </a>

          <a href="#kontakt" className="hover:text-yellow-400 transition">
            Kontakt
          </a>
        </nav>

        <a
          href="tel:511337594"
          className="hidden lg:block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Zadzwoń
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white text-4xl"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu mobilne */}
      {open && (
        <nav className="lg:hidden flex flex-col bg-black text-white px-6 py-6 gap-5 border-t border-white/10">
          <a
            href="#onas"
            onClick={() => setOpen(false)}
            className="block text-lg hover:text-yellow-400 transition"
          >
            O nas
          </a>

          <a
            href="#oferta"
            onClick={() => setOpen(false)}
            className="block text-lg hover:text-yellow-400 transition"
          >
            Oferta
          </a>

          <a
            href="#portfolio"
            onClick={() => setOpen(false)}
            className="block text-lg hover:text-yellow-400 transition"
          >
            Portfolio
          </a>

          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="block text-lg hover:text-yellow-400 transition"
          >
            Kontakt
          </a>

          <a
            href="tel:511337594"
            onClick={() => setOpen(false)}
            className="mt-4 text-center bg-yellow-500 text-black rounded-full py-3 font-semibold hover:bg-yellow-400 transition"
          >
            📞 Zadzwoń
          </a>
        </nav>
      )}
    </header>
  );
}