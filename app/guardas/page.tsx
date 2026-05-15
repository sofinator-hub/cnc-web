"use client";

import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

import {
   Shield,
   Grid2X2,
   Cog,
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
      </div>

      <main className="relative z-10 text-black overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative h-screen overflow-hidden">

          {/* IMAGEN */}
          <img
            src="/fondo_guardas.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/55" />

          {/* GLOW */}
          <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[850px] h-[280px] bg-[#8C1C7D]/10 blur-[140px] rounded-full" />

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
                  Protección modular
                  para entornos
                  industriales
                </h2>

              </div>

              <div className="flex items-center">

                <p className="text-gray-600 text-lg leading-relaxed max-w-[460px]">
                  Diseñamos y fabricamos guardas industriales
                  que se integran a tus equipos,
                  cumpliendo con altos estándares de seguridad y calidad.
                </p>

              </div>

            </div>


            {/* FEATURES */}
            <div className="grid md:grid-cols-3 gap-10 border-t border-black/10 pt-16">

              {/* ITEM */}
              <motion.div
                whileHover={{ y: -6 }}
                className="pr-6 md:border-r border-black/10"
              >

                <Shield
                  size={34}
                  strokeWidth={1.3}
                  className="mb-8 text-[#8C1C7D]"
                />

                <h3 className="uppercase tracking-[0.3em] text-xs mb-6">
                  Protección
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Sistemas diseñados para proteger
                  operadores y maquinaria industrial.
                </p>

              </motion.div>


              {/* ITEM */}
              <motion.div
                whileHover={{ y: -6 }}
                className="pr-6 md:border-r border-black/10"
              >

                <Grid2X2
                  size={34}
                  strokeWidth={1.3}
                  className="mb-8 text-[#8C1C7D]"
                />

                <h3 className="uppercase tracking-[0.3em] text-xs mb-6">
                  Modularidad
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Diseños modulares adaptados
                  a diferentes procesos y espacios.
                </p>

              </motion.div>


              {/* ITEM */}
              <motion.div
                whileHover={{ y: -6 }}
              >

                <Cog
                  size={34}
                  strokeWidth={1.3}
                  className="mb-8 text-[#8C1C7D]"
                />

                <h3 className="uppercase tracking-[0.3em] text-xs mb-6">
                  Integración
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Integración precisa con maquinaria
                  y líneas de producción.
                </p>

              </motion.div>

            </div>

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
                <div className="absolute inset-0 bg-[#8C1C7D]/10 blur-3xl scale-110" />

                <img
                  src="/guardita.jpg"
                  className="relative w-full h-[340px] md:h-[520px] object-cover grayscale hover:grayscale-0 transition duration-700"
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
                  garantizando funcionalidad y durabilidad.
                </p>

                {/* LISTA */}
                <div className="space-y-5">

                  {[
                    "Análisis y diseño",
                    "Cumplimiento con normativas nacionales e internacionales",
                    "Acabados de alta calidad",
                    "Instalación y soporte técnico",
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-4 text-gray-700"
                    >

                      <div className="w-1.5 h-1.5 rounded-full bg-[#8C1C7D]" />

                      {item}

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= GALERÍA ================= */}
        <section className="px-6 md:px-14 py-24">

          <div className="max-w-[1500px] mx-auto border-t border-black/10 pt-20">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">

              <div>

                <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-6">
                  Proyectos
                </p>

                <h2 className="text-[42px] md:text-[72px] leading-[0.95] font-light">
                  Galería de
                  guardas
                </h2>

              </div>

              <p className="text-gray-600 text-lg leading-relaxed max-w-[420px]">
                Sistemas de protección industrial desarrollados
                para seguridad, automatización y operación eficiente.
              </p>

            </div>
</div>

{/* GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

  {[
    "/guarda1.jpg",
    "/guarda2.jpg",
    "/guarda3.jpg",
    "/guarda4.jpg",
  ].map((image, i) => {

    return (

      <motion.div
        key={i}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.35 }}
        className="
          relative
          overflow-hidden
          rounded-[18px]
          group
          cursor-pointer
        "
      >

        <div
          className="
            w-full
            h-[240px]
            md:h-[420px]

            overflow-hidden
          "
        >

          <motion.img
            src={image}
            loading="lazy"
            alt="Guarda industrial"

            className="
              w-full
              h-full
              object-cover
            "

            whileHover={{
              scale: 1.05,
            }}

            transition={{
              duration: 0.5,
            }}
          />

        </div>

        {/* LÁSER */}
        <motion.div
          className="
            absolute
            top-0
            left-[-100%]
            w-full
            h-[2px]
            bg-gradient-to-r
            from-transparent
            via-[#8C1C7D]
            to-transparent

            opacity-0
            group-hover:opacity-100
          "

          animate={{
            left: ["-100%", "100%"],
          }}

          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

      </motion.div>

    );

  })}

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
                  siguiente solución
                </h2>

              </div>


              {/* DERECHA */}
              <div>

                <p className="text-gray-600 text-lg leading-relaxed max-w-[420px] mb-12">
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
                  className="bg-black text-white px-8 py-4 rounded-md flex items-center gap-4 hover:bg-[#8C1C7D] transition"
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