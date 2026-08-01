"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
            href="tel:+48511337594"
            className="hidden lg:block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Zadzwoń
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white text-4xl"
            aria-label="Otwórz menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Przyciemnione tło */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Menu mobilne */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black z-50 transform transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setOpen(false)}
            className="text-white text-4xl"
            aria-label="Zamknij menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col text-white text-xl">
          <a
            href="#onas"
            onClick={() => setOpen(false)}
            className="px-8 py-5 border-b border-white/10 hover:bg-white/10 transition"
          >
            O nas
          </a>

          <a
            href="#oferta"
            onClick={() => setOpen(false)}
            className="px-8 py-5 border-b border-white/10 hover:bg-white/10 transition"
          >
            Oferta
          </a>

          <a
            href="#portfolio"
            onClick={() => setOpen(false)}
            className="px-8 py-5 border-b border-white/10 hover:bg-white/10 transition"
          >
            Portfolio
          </a>

          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="px-8 py-5 hover:bg-white/10 transition"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </>
  );
}