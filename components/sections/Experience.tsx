"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-32 bg-white text-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* TÍTULO */}
        <h2 className="text-4xl font-bold mb-6">
          Nuestra experiencia
        </h2>

        <p className="text-gray-600 mb-12">
          Una empresa especializada en ingeniería y corte láser con más de 20 años de experiencia
        </p>

        {/* VIDEO */}
        <motion.div
          className="relative mx-auto max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

<video
  src="/videos/carro_matei.mp4"
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="w-full h-auto object-cover"
/>

          {/*  DIFUMINADO SUAVE (sin blur) */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/70 via-transparent to-white/70" />

          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/60 via-transparent to-white/60" />

        </motion.div>

      </div>
    </section>
  );
}