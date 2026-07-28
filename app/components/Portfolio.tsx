"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/portfolio/1.jpg",
  "/portfolio/2.jpg",
  "/portfolio/3.jpg",
  "/portfolio/4.jpg",
  "/portfolio/5.jpg",
  "/portfolio/6.jpg",
  "/portfolio/7.jpg",
  "/portfolio/8.jpg",
  "/portfolio/9.jpg",
  "/portfolio/10.jpg",
  "/portfolio/11.jpg",
  "/portfolio/12.jpg",
];

export default function Portfolio() {
  const [index, setIndex] = useState(-1);

  return (
    <FadeIn>
      <section
        id="portfolio"
        className="bg-white py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <p className="text-center uppercase tracking-[6px] text-yellow-600">
            Portfolio
          </p>

          <h2 className="text-center text-5xl font-light text-black mt-4 mb-16">
            Nasze realizacje
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

            {images.map((src, i) => (

              <button
                key={i}
                onClick={() => setIndex(i)}
                className="group relative overflow-hidden rounded-3xl aspect-square shadow-xl"
              >

                <Image
                  src={src}
                  alt={`Zdjęcie ${i + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500" />

                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition">

                  <span className="text-white font-semibold">
                    FotoMomenty
                  </span>

                </div>

              </button>

            ))}

          </div>

        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={images.map((src) => ({ src }))}
        />

      </section>
    </FadeIn>
  );
}