"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "/imagen1.jpeg",
  "/imagen2.jpeg",
  "/imagen3.jpeg",
  "/imagen4.jpeg",
  "/imagen5.jpeg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-32 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-16 text-center">
          Nuestro Trabajo
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl cursor-pointer border border-gray-200"
              onClick={() => setSelected(src)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >

              {/* IMAGEN */}
              <motion.img
                src={src}
                className="w-full h-[250px] object-cover"
                animate={{
                  scale: hovered === i ? 1.08 : 1,
                }}
              />

              {/* 🔥 LÁSER REAL */}
              {hovered === i && (
                <motion.div
                  className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                  }}
                />
              )}

              {/* OVERLAY */}
              <div
                className={`absolute inset-0 bg-black/20 flex items-center justify-center transition ${
                  hovered === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-white text-sm tracking-wide">
                  Ver proyecto
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.img
            src={selected}
            className="max-w-[90%] max-h-[80%] rounded-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </section>
  );
}