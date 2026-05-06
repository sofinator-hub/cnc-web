"use client";

 import { motion } from "framer-motion";
 import MobileMenu from "@/components/layout/MobileMenu";
 import { useState } from "react";
 import {
  Shield,
  Grid2X2,
  Cog,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

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
        <section className="relative h-screen overflow-hidden">

          {/* IMAGEN */}
          <img
            src="/hero_guardas_clean.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/55" />

          {/* NAV SUPERIOR */}
          <div className="absolute top-0 left-0 w-full z-20 px-6 md:px-14 py-8 flex justify-between items-center text-white">

            <h1 className="text-3xl font-light tracking-tight">
              CNC
            </h1>

            <div className="hidden md:flex gap-10 text-xs tracking-[0.25em] uppercase text-white/80">
              <span>Inicio</span>
              <span>Conveyors</span>
              <span className="text-white">Guardas</span>
              <span>Ingeniería</span>
              <span>Contacto</span>
            </div>

            <div className="text-2xl">
              ☰
            </div>

          </div>

          {/* CONTENIDO */}
          <div className="relative z-10 h-full flex items-center px-6 md:px-14">

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[520px]"
            >

              <p className="uppercase tracking-[0.45em] text-xs text-white/70 mb-8">
                Seguridad industrial
              </p>

              <h1 className="text-[58px] md:text-[96px] leading-[0.9] font-light text-white mb-8">
                Guardas
                <br />
                industriales
              </h1>

              <p className="text-white/80 text-lg leading-relaxed">
                Sistemas de protección para maquinaria,
                automatización y procesos industriales.
              </p>

            </motion.div>

          </div>

          {/* SCROLL */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-3xl">
            
          </div>

        </section>


        {/* ================= SISTEMAS ================= */}
        <section className="px-6 md:px-14 py-24 md:py-32 bg-[#f7f7f5]">

          <div className="max-w-[1500px] mx-auto">

            {/* TOP */}
            <div className="grid md:grid-cols-2 gap-14 mb-24">

              <div>

                <p className="uppercase tracking-[0.45em] text-xs text-gray-400 mb-8">
                  Sistemas
                </p>

                <h2 className="text-[48px] md:text-[78px] font-light leading-[0.95]">
                  Protección modular
                  para entornos
                  industriales
                </h2>

              </div>

              <div className="flex items-center">

                <p className="text-gray-600 text-lg leading-relaxed max-w-[460px]">
                  Diseñamos y fabricamos guardas industriales
                  que se integran a tus equipos y procesos,
                  cumpliendo con los más altos estándares
                  de seguridad y calidad.
                </p>

              </div>

            </div>


            {/* FEATURES */}
            <div className="grid md:grid-cols-3 gap-10 border-t border-black/10 pt-16">

              <div className="pr-6 md:border-r border-black/10">

                <Shield
                  size={34}
                  strokeWidth={1.3}
                  className="mb-8"
                />

                <h3 className="uppercase tracking-[0.3em] text-xs mb-6">
                  Protección
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Sistemas diseñados para proteger
                  operadores y maquinaria en áreas industriales.
                </p>

              </div>


              <div className="pr-6 md:border-r border-black/10">

                <Grid2X2
                  size={34}
                  strokeWidth={1.3}
                  className="mb-8"
                />

                <h3 className="uppercase tracking-[0.3em] text-xs mb-6">
                  Modularidad
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Diseños modulares que se adaptan
                  a diferentes espacios, equipos y necesidades.
                </p>

              </div>


              <div>

                <Cog
                  size={34}
                  strokeWidth={1.3}
                  className="mb-8"
                />

                <h3 className="uppercase tracking-[0.3em] text-xs mb-6">
                  Integración
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Integración precisa con sistemas
                  existentes de automatización y producción.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= INFO ================= */}
        <section className="px-6 md:px-14 py-20 bg-[#f7f7f5]">

          <div className="max-w-[1500px] mx-auto border-t border-black/10 pt-20">

            <div className="grid md:grid-cols-2 gap-20 items-center">

              {/* IMAGEN */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-[10px]"
              >

                <img
                  src="/guardas_detalle.jpg"
                  className="w-full h-[340px] md:h-[520px] object-cover grayscale"
                />

              </motion.div>


              {/* TEXTO */}
              <div>

                <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-8">
                  Diseño y fabricación
                </p>

                <h2 className="text-[42px] md:text-[64px] leading-[1] font-light mb-8">
                  Soluciones
                  a la medida
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-[520px]">
                  Cada proyecto es desarrollado según
                  los requerimientos de tu operación,
                  garantizando funcionalidad, durabilidad
                  y cumplimiento con normas de seguridad industrial.
                </p>

                {/* LISTA */}
                <div className="space-y-5">

                  {[
                    "Análisis y diseño",
                    "Fabricación CNC",
                    "Acabados de alta calidad",
                    "Instalación y soporte técnico",
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-4 text-gray-700"
                    >

                      <div className="w-1.5 h-1.5 rounded-full bg-black" />

                      {item}

                    </div>

                  ))}

                </div>

            </div>

           </div>

         </div>

        </section>


        {/* ================= CARRUSEL ================= */}
        <section className="px-6 md:px-14 py-20 bg-[#f7f7f5]">

          <div className="max-w-[1500px] mx-auto border-t border-black/10 pt-16">

            <CarruselExacto />

          </div>

        </section>


        {/* ================= CTA FINAL ================= */}
        <section className="relative px-6 md:px-14 py-24 overflow-hidden bg-black">

          {/* FONDO */}
          <img
            src="/hero_guardas_clean.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-black/80" />

          <div className="relative z-10 max-w-[1500px] mx-auto grid md:grid-cols-2 gap-20 items-center">

            {/* TEXTO */}
            <div>

              <p className="uppercase tracking-[0.45em] text-xs text-white/50 mb-8">
                ¿Tienes un proyecto?
              </p>

              <h2 className="text-[52px] md:text-[82px] font-light leading-[0.95] text-white">
                Hablemos de tu
                siguiente solución
              </h2>

            </div>


            {/* DERECHA */}
            <div>

              <p className="text-white/70 text-lg leading-relaxed max-w-[420px] mb-12">
                Desarrollamos sistemas de guardas industriales
                que impulsan la seguridad y eficiencia
                de tu operación.
              </p>

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20guardas%20industriales",
                    "_blank"
                  )
                }
                className="bg-white text-black px-8 py-4 rounded-md flex items-center gap-4 hover:opacity-90 transition"
              >

                CONTACTAR

                <ArrowUpRight size={18} />

              </button>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}



/* ================= CARRUSEL EXACTO ================= */

function CarruselExacto() {
  const [index, setIndex] = useState(0);

  const slides = [
    "/guarda1.jpg",
    "/guarda2.jpg",
    "/guarda3.jpg",
    "/guarda4.jpg",
    "/guardas_main.jpg",
    "/guardas_detalle.jpg",
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
              className="relative overflow-hidden"
            >

              <img
                src={slides[slideIndex]}
                className="w-full h-[260px] md:h-[500px] object-cover grayscale hover:grayscale-0 transition duration-700"
              />

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
                ? "w-10 bg-black"
                : "w-6 bg-black/20"
            }`}
          />

        ))}

      </div>

    </div>
  );
}