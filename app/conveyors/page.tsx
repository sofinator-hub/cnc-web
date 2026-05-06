"use client";

import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";
import { useState } from "react";

import {
  MoveHorizontal,
  Workflow,
  Cog,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

export default function ConveyorsPage() {
  return (
    <>
      <MobileMenu />

      {/* ================= FONDO GLOBAL ================= */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/fondo_blanco.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      <main className="relative z-10 text-black overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative min-h-screen overflow-hidden">

          {/* FONDO */}
          <img
            src="/fondo_conveyor.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* GLOW AZUL HORIZONTAL */}
          <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[900px] h-[300px] bg-blue-500/10 blur-[140px] rounded-full" />

          {/* CONTENIDO */}
          <div className="relative z-10 h-full px-6 md:px-14 py-32 flex items-center">

            <div className="grid md:grid-cols-2 gap-20 items-center w-full">

              {/* TEXTO */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-[560px]"
              >

                <p className="uppercase tracking-[0.45em] text-xs text-white/60 mb-8">
                  Automatización industrial
                </p>

                <h1 className="text-[58px] md:text-[100px] leading-[0.9] font-light text-white mb-8">
                  Sistemas
                  <br />
                  conveyors
                </h1>

                <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-[480px]">
                  Soluciones automatizadas para el transporte
                  eficiente de materiales en procesos industriales.
                </p>

              </motion.div>


              {/* VIDEO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >

                {/* GLOW */}
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-[30px] scale-110" />

                <video
                  className="relative w-full rounded-[28px] object-cover border border-white/10 shadow-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/video_conveyor.mp4" />
                </video>

              </motion.div>

            </div>

          </div>

        </section>


        {/* ================= SISTEMAS ================= */}
        <section className="px-6 md:px-14 py-24 md:py-32">

          <div className="max-w-[1500px] mx-auto">

            {/* TOP */}
            <div className="grid md:grid-cols-2 gap-14 mb-24">

              <div>

                <p className="uppercase tracking-[0.45em] text-xs text-gray-400 mb-8">
                  Sistemas
                </p>

                <h2 className="text-[48px] md:text-[78px] font-light leading-[0.95]">
                  Transporte
                  industrial
                  eficiente
                </h2>

              </div>

              <div className="flex items-center">

                <p className="text-gray-600 text-lg leading-relaxed max-w-[460px]">
                  Diseñamos sistemas conveyors adaptados
                  a líneas de producción y automatización,
                  optimizando flujo, movimiento y eficiencia operativa.
                </p>

              </div>

            </div>


            {/* FEATURES */}
            <div className="grid md:grid-cols-3 gap-10 border-t border-black/10 pt-16">

              <div className="pr-6 md:border-r border-black/10">

                <MoveHorizontal
                  size={34}
                  strokeWidth={1.3}
                  className="mb-8 text-blue-500"
                />

                <h3 className="uppercase tracking-[0.3em] text-xs mb-6">
                  Movimiento
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Sistemas diseñados para flujo continuo
                  y transporte eficiente de materiales.
                </p>

              </div>


              <div className="pr-6 md:border-r border-black/10">

                <Workflow
                  size={34}
                  strokeWidth={1.3}
                  className="mb-8 text-blue-500"
                />

                <h3 className="uppercase tracking-[0.3em] text-xs mb-6">
                  Integración
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Integración precisa con líneas
                  automatizadas y procesos industriales.
                </p>

              </div>


              <div>

                <Cog
                  size={34}
                  strokeWidth={1.3}
                  className="mb-8 text-blue-500"
                />

                <h3 className="uppercase tracking-[0.3em] text-xs mb-6">
                  Personalización
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Diseños personalizados según
                  necesidades específicas de producción.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= INFO ================= */}
        <section className="px-6 md:px-14 py-20">

          <div className="max-w-[1500px] mx-auto border-t border-black/10 pt-20">

            <div className="grid md:grid-cols-2 gap-20 items-center">

              {/* VIDEO */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-[10px]"
              >

                {/* GLOW AZUL */}
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl scale-110" />

                {/* SOLO AQUÍ B/N → COLOR */}
                <video
                  className="relative w-full h-[340px] md:h-[520px] object-cover grayscale hover:grayscale-0 transition duration-700"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/video_conveyor.mp4" />
                </video>

              </motion.div>


              {/* TEXTO */}
              <div>

                <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-8">
                  Ingeniería y automatización
                </p>

                <h2 className="text-[42px] md:text-[64px] leading-[1] font-light mb-8">
                  Soluciones
                  en movimiento
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-[520px]">
                  Sistemas conveyors desarrollados
                  para optimizar producción, automatización
                  y manejo eficiente de materiales.
                </p>

                {/* LISTA */}
                <div className="space-y-5">

                  {[
                    "Diseño personalizado",
                    "Automatización industrial",
                    "Integración con líneas de producción",
                    "Optimización de procesos",
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-4 text-gray-700"
                    >

                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />

                      {item}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= CARRUSEL ================= */}
        <section className="px-6 md:px-14 py-20">

          <div className="max-w-[1500px] mx-auto border-t border-black/10 pt-16">

            <CarruselConveyors />

          </div>

        </section>


        {/* ================= CTA FINAL ================= */}
        <section className="px-6 md:px-14 py-24">

          <div className="max-w-[1500px] mx-auto border-t border-black/10 pt-20">

            <div className="grid md:grid-cols-2 gap-20 items-center">

              {/* TEXTO */}
              <div>

                <p className="uppercase tracking-[0.45em] text-xs text-gray-400 mb-8">
                  ¿Tienes un proyecto?
                </p>

                <h2 className="text-[52px] md:text-[82px] font-light leading-[0.95] text-black">
                  Hablemos de tu
                  siguiente sistema
                </h2>

              </div>


              {/* DERECHA */}
              <div>

                <p className="text-gray-600 text-lg leading-relaxed max-w-[420px] mb-12">
                  Diseñamos conveyors industriales
                  adaptados a automatización y líneas
                  modernas de producción.
                </p>

                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20un%20sistema%20de%20conveyors",
                      "_blank"
                    )
                  }
                  className="bg-black text-white px-8 py-4 rounded-md flex items-center gap-4 hover:bg-blue-500 transition"
                >

                  CONTACTAR

                  <ArrowUpRight size={18} />

                </button>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}



/* ================= CARRUSEL ================= */

function CarruselConveyors() {
  const [index, setIndex] = useState(0);

  const slides = [
    "/conveyor1.jpg",
    "/conveyor2.jpg",
    "/conveyor3.jpg",
    "/conveyor4.png",
  ];

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">

        <p className="uppercase tracking-[0.4em] text-xs text-gray-400">
          Proyectos
        </p>

        <div className="flex items-center gap-8">

          <span className="text-sm text-gray-500">
            0{index + 1} / 0{slides.length}
          </span>

          <div className="flex gap-4">

            <button onClick={prev}>
              <ChevronLeft size={22} strokeWidth={1.5} />
            </button>

            <button onClick={next}>
              <ChevronRight size={22} strokeWidth={1.5} />
            </button>

          </div>

        </div>

      </div>


      {/* SLIDES */}
      <div className="grid md:grid-cols-3 gap-2 overflow-hidden rounded-[12px]">

        {[0, 1, 2].map((offset) => {
          const slideIndex = (index + offset) % slides.length;

          return (

            <motion.div
              key={slideIndex}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden group"
            >

              <img
                src={slides[slideIndex]}
                className="w-full h-[260px] md:h-[500px] object-cover"
              />

              {/* BORDE AZUL SUTIL */}
              <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-500/30 transition duration-500" />

            </motion.div>

          );
        })}

      </div>


      {/* INDICADORES */}
      <div className="flex justify-center gap-3 mt-10">

        {slides.map((_, i) => (

          <div
            key={i}
            className={`h-[2px] transition-all duration-300 ${
              i === index
                ? "w-10 bg-blue-500"
                : "w-6 bg-black/20"
            }`}
          />

        ))}

      </div>

    </div>
  );
}


