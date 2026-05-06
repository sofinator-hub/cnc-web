"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import MobileMenu from "@/components/layout/MobileMenu";

 export default function GuardasPage() {
  return (
    <>
      <MobileMenu />

      {/* ================= FONDO GLOBAL ================= */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/fondo_blanco.jpg"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-white/80" />
      </div>

      <main className="relative z-10 text-black overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative min-h-screen flex items-end overflow-hidden">

          {/* IMAGEN */}
          <img
            src="/hero_guardas_clean.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/55" />

          {/* CONTENIDO */}
          <div className="relative z-10 w-full px-6 md:px-20 pb-20 md:pb-28">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[700px]"
            >

              <p className="uppercase tracking-[0.45em] text-xs md:text-sm text-gray-300 mb-8">
                Seguridad Industrial
              </p>

              <h1 className="text-[52px] md:text-[120px] font-light leading-[0.9] text-white mb-10">
                Guardas
                <br />
                industriales
              </h1>

              <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-[520px]">
                Sistemas modulares de protección
                diseñados para automatización,
                maquinaria y procesos industriales.
              </p>

            </motion.div>

          </div>

        </section>


        {/* ================= BLOQUE EDITORIAL ================= */}
        <section className="px-6 md:px-20 py-32 md:py-44">

          <div className="max-w-[1600px] mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-24 items-center">

            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="uppercase tracking-[0.45em] text-xs text-gray-500 mb-10">
                Integración industrial
              </p>

              <h2 className="text-[46px] md:text-[88px] font-light leading-[0.95] mb-12">
                Diseño
                modular
                y preciso
              </h2>

              <p className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-[500px] mb-16">
                Soluciones desarrolladas para proteger
                operadores, maquinaria y procesos
                industriales sin comprometer funcionalidad.
              </p>

              {/* LISTA */}
              <div className="space-y-6">

                {[
                 "Protección perimetral",
                 "Fabricación CNC",
                 "Diseños personalizados",
                 "Integración industrial",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="border-b border-black/10 pb-5 text-lg md:text-xl"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </motion.div>

            {/* IMAGEN */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >

              <div className="overflow-hidden rounded-[40px]">

                <img
                  src="/guardas_detalle.jpg"
                  className="w-full h-[420px] md:h-[820px] object-cover grayscale hover:grayscale-0 transition duration-700"
                />

              </div>

            </motion.div>

          </div>

        </section>


        {/* ================= CARRUSEL EDITORIAL ================= */}
        <section className="px-6 md:px-20 py-20 md:py-32 overflow-hidden">

          <div className="max-w-[1700px] mx-auto">

           <div className="mb-20 md:mb-28">

              <p className="uppercase tracking-[0.45em] text-xs text-gray-500 mb-8">
                Sistemas
              </p>

              <h2 className="text-[46px] md:text-[100px] font-light leading-[0.92]">
               Protección
               industrial
              </h2>

            </div>

            <CarruselEditorial />

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="px-6 md:px-20 pt-12 pb-32 md:pb-40">

          <div className="max-w-[1600px] mx-auto border border-black/10 rounded-[42px] bg-white/60 backdrop-blur-xl p-10 md:p-24">

            <div className="max-w-[900px]">

              <p className="uppercase tracking-[0.45em] text-xs text-gray-500 mb-8">
                Sistemas personalizados
              </p>

              <h2 className="text-[46px] md:text-[96px] font-light leading-[0.95] mb-12">
                Diseñadas
                para procesos
                reales
              </h2>

              <p className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-[700px] mb-16">
                Soluciones adaptadas a automatización,
                maquinaria y entornos industriales
                con enfoque en seguridad y funcionalidad.
              </p>

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20guardas%20industriales",
                    "_blank"
                  )
                }
                className="px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition text-lg"
              >
                Solicitar cotización
              </button>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}


/* ================= CARRUSEL ================= */

function CarruselEditorial() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      img: "/guarda1.jpg",
      title: "Protección perimetral",
      desc: "Diseñadas para delimitar y proteger áreas industriales.",
    },
    {
      img: "/guarda2.jpg",
      title: "Acceso controlado",
      desc: "Configuraciones modulares adaptadas a cada proceso.",
    },
    {
      img: "/guarda3.jpg",
      title: "Diseños personalizados",
      desc: "Integración enfocada en funcionalidad y precisión.",
    },
    {
      img: "/guarda4.jpg",
      title: "Protección industrial",
      desc: "Soluciones estructurales para automatización.",
    },
  ];

  const prev = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setIndex((index + 1) % slides.length);
  };

  return (
    <div className="relative">

     <motion.div
        key={slides[index].img}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-[1.25fr_0.75fr] gap-10 md:gap-20 items-end"
      >

        {/* IMAGEN */}
        <div className="relative overflow-hidden rounded-[40px]">

          <img
            src={slides[index].img}
            className="w-full h-[320px] md:h-[820px] object-cover grayscale hover:grayscale-0 transition duration-700"
          />

        </div>

        {/* INFO */}
        <div className="pb-4 md:pb-12">

          <div className="text-[90px] md:text-[220px] font-light text-black/[0.04] leading-none mb-6">
            0{index + 1}
          </div>

          <h3 className="text-[40px] md:text-[74px] font-light leading-[0.95] mb-8">
            {slides[index].title}
          </h3>

          <p className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-[420px] mb-14">
            {slides[index].desc}
          </p>

          {/* BOTONES */}
          <div className="flex gap-4">

            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-black/10 hover:bg-black hover:text-white transition flex items-center justify-center text-xl"
            >
              ←
            </button>

            <button
              onClick={next}
              className="w-14 h-14 rounded-full border border-black/10 hover:bg-black hover:text-white transition flex items-center justify-center text-xl"
            >
              →
          </button>

          </div>

        </div>

      </motion.div>

    </div>
  );
}