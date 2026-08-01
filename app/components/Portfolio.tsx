"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const IMAGE_COUNT = 34;

const images = Array.from(
  { length: IMAGE_COUNT },
  (_, i) => `/portfolio/${i + 1}.jpg`
);

export default function Portfolio() {
  const [index, setIndex] = useState(-1);

  return (
    <FadeIn>
      <section id="portfolio" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="text-center uppercase tracking-[6px] text-yellow-600">
            Portfolio
          </p>

          <h2 className="text-center text-5xl font-light text-black mt-4 mb-16">
            Nasze realizacje
          </h2>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">

            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="group relative mb-5 w-full overflow-hidden rounded-3xl shadow-2xl break-inside-avoid"
              >
                <Image
                  src={src}
                  alt={`Zdjęcie ${i + 1}`}
                  width={800}
                  height={1200}
                  className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

                <div className="absolute bottom-4 left-4 opacity-0 transition duration-500 group-hover:opacity-100">
                  <span className="rounded-full bg-black/70 px-3 py-1 text-sm text-white backdrop-blur">
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