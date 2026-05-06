"use client";

import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";
import { useState } from "react";

import {
  CircleDashed,
  Sparkles,
   Cog,
  ArrowUpRight,
} from "lucide-react";

export default function TuboPage() {
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
            src="/fondo_tubo.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* GLOW AZUL SUTIL */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full" />

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
                  Tecnología de precisión
                </p>

                <h1 className="text-[58px] md:text-[100px] leading-[0.9] font-light text-white mb-8">
                  Corte láser
                  <br />
                  de tubo
                </h1>

                <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-[480px]">
                  Tecnología especializada para cortes
                  precisos en tubos y perfiles industriales
                  con máxima eficiencia y repetibilidad.
                </p>

              </motion.div>


              {/* VIDEO */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >

                {/* GLOW SUTIL */}
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-[30px] scale-110" />

                <video
                  className="relative w-full rounded-[28px] object-cover border border-white/10 shadow-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/video_corte_tubo.mp4" />
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
                  Capacidades
                </p>

                <h2 className="text-[48px] md:text-[78px] font-light leading-[0.95]">
                  Precisión
                  industrial
                  avanzada
                </h2>

              </div>

              <div className="flex items-center">

                <p className="text-gray-600 text-lg leading-relaxed max-w-[460px]">
                  Sistemas de corte láser diseñados para
                  optimizar fabricación, automatización
                  y ensamblaje industrial con precisión extrema.
                </p>

              </div>

            </div>


            {/* FEATURES */}
            <div className="grid md:grid-cols-3 gap-10 border-t border-black/10 pt-16">

              <div className="pr-6 md:border-r border-black/10">

                <CircleDashed
                  size={34}
                  strokeWidth={1.3}
                  className="mb-8 text-blue-500"
                />

                <h3 className="uppercase tracking-[0.3em] text-xs mb-6">
                  Precisión
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Cortes exactos con alta repetibilidad
                  para procesos industriales avanzados.
                </p>

              </div>


              <div className="pr-6 md:border-r border-black/10">

                <Sparkles
                  size={34}
                  strokeWidth={1.3}
                  className="mb-8 text-blue-500"
                />

                <h3 className="uppercase tracking-[0.3em] text-xs mb-6">
                  Optimización
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Minimización de desperdicio y
                  máxima eficiencia de producción.
                </p>

              </div>


              <div>

                <Cog
                  size={34}
                  strokeWidth={1.3}
                  className="mb-8 text-blue-500"
                />

                <h3 className="uppercase tracking-[0.3em] text-xs mb-6">
                  Integración
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Integración precisa con líneas
                  industriales y automatización.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= TIPOS DE PERFIL ================= */}
        <section className="px-6 md:px-14 py-20">

          <div className="max-w-[1500px] mx-auto border-t border-black/10 pt-20">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">

              <div>

                <p className="uppercase tracking-[0.45em] text-xs text-gray-400 mb-8">
                  Tipos de perfil
                </p>

                <h2 className="text-[42px] md:text-[72px] font-light leading-[0.95]">
                  Perfiles
                  industriales
                </h2>

              </div>

              <p className="text-gray-600 max-w-[420px] leading-relaxed">
                Trabajamos diferentes perfiles y geometrías
                para fabricación industrial y estructuras
                metálicas de alta precisión.
              </p>

            </div>

            <SliderTubos />

          </div>

        </section>


        {/* ================= INFO ================= */}
        <section className="px-6 md:px-14 py-20">

          <div className="max-w-[1500px] mx-auto border-t border-black/10 pt-20">

            <div className="grid md:grid-cols-2 gap-20 items-center">

              {/* IMAGEN */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-[10px]"
              >

                {/* GLOW */}
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl scale-110" />

                {/* SOLO AQUÍ B/N → COLOR */}
                <img
                  src="/tubo_detalle.jpg"
                  className="relative w-full h-[340px] md:h-[520px] object-cover grayscale hover:grayscale-0 transition duration-700"
                />

              </motion.div>


              {/* TEXTO */}
              <div>

                <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-8">
                  Tecnología y fabricación
                </p>

                <h2 className="text-[42px] md:text-[64px] leading-[1] font-light mb-8">
                  Soluciones
                  de alta
                  precisión
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-[520px]">
                  Maquinaria especializada para corte
                  láser de tubos y perfiles industriales
                  con enfoque en calidad y productividad.
                </p>

                {/* LISTA */}
                <div className="space-y-5">

                  {[
                    "Tubos redondos y cuadrados",
                    "Alta repetibilidad",
                    "Minimización de desperdicio",
                    "Procesos automatizados",
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
                  siguiente pieza
                </h2>

              </div>


              {/* DERECHA */}
              <div>

                <p className="text-gray-600 text-lg leading-relaxed max-w-[420px] mb-12">
                  Desarrollamos soluciones de corte láser
                  para fabricación industrial moderna
                  y automatización de precisión.
                </p>

                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20corte%20láser%20de%20tubo",
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



/* ================= SLIDER TÉCNICO ================= */

function SliderTubos() {
  const [active, setActive] = useState(0);

  const tubos = [
    {
      img: "/tipo_de_tubo1.jpg",
      nombre: "Perfil cuadrado",
      desc: "Alta resistencia estructural.",
    },
    {
      img: "/tipo_de_tubo2.jpg",
      nombre: "Tubo redondo",
      desc: "Versátil y funcional.",
    },
    {
      img: "/tipo_de_tubo3.jpg",
      nombre: "Ángulo",
      desc: "Refuerzo estructural.",
    },
    {
      img: "/tipo_de_tubo4.jpg",
      nombre: "Canal C",
      desc: "Soporte para bastidores.",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-4">

      {tubos.map((tubo, index) => (

        <motion.div
          key={index}
          onMouseEnter={() => setActive(index)}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className={`group cursor-pointer border rounded-[18px] overflow-hidden transition-all duration-500 ${
            active === index
              ? "border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.12)]"
              : "border-black/10"
          }`}
        >

          {/* IMAGEN */}
          <div className="relative overflow-hidden">

            <img
              src={tubo.img}
              className={`w-full h-[260px] object-cover transition duration-700 ${
                active === index
                  ? "grayscale-0"
                  : "grayscale"
              }`}
            />

          </div>

          {/* INFO */}
          <div className="p-6">

            <h3 className="text-xl font-light mb-3">
              {tubo.nombre}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {tubo.desc}
            </p>

          </div>

        </motion.div>

      ))}

    </div>
  );
}


