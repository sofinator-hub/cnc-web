"use client";

import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";


import {
  MoveHorizontal,
  Workflow,
  Cog,
 
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
        <section className="relative h-screen overflow-hidden">

          {/* FONDO */}
          <img
            src="/fondo_conveyor.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/55" />

          {/* GLOW */}
          <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[900px] h-[300px] bg-blue-500/10 blur-[140px] rounded-full" />

          {/* CONTENIDO */}
          <div className="relative z-10 h-full flex items-center px-6 md:px-14">

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
                conveyors
              </h1>

              <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-[480px]">
                Soluciones automatizadas para el transporte
                eficiente de materiales en procesos industriales.
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
                  Transporte
                  industrial
                  eficiente
                </h2>

              </div>

              <div className="flex items-center">

                <p className="text-gray-600 text-lg leading-relaxed max-w-[460px]">
                  Diseñamos sistemas de conveyors adaptados
                  a líneas de producción y automatización,
                  optimizando flujo, movimiento y eficiencia operativa.
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

              </motion.div>


              {/* ITEM */}
              <motion.div
                whileHover={{ y: -6 }}
                className="pr-6 md:border-r border-black/10"
              >

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

              </motion.div>


              {/* ITEM */}
              <motion.div
                whileHover={{ y: -6 }}
              >

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

              </motion.div>

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


                <div className="absolute inset-0 bg-blue-500/10 blur-3xl scale-110" />


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
                  Sistemas de conveyors desarrollados
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
                  conveyors
                </h2>

              </div>

              <p className="text-gray-600 text-lg leading-relaxed max-w-[420px]">
                Sistemas desarrollados para automatización,
                transporte industrial y optimización de procesos.
              </p>

            </div>


{/* GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

  {[
    "/conveyor1.jpg",
    "/conveyor2.jpg",
    "/conveyor3.jpg",
    "/conveyor4.png",
  ].map((image, i) => (

    <motion.div
      key={i}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35 }}
      className="
        relative
        overflow-hidden
        rounded-[18px]
        group
      "
    >

      <img
        src={image}
        className="
          w-full
          h-[340px] md:h-[420px]
          object-cover

          transition duration-700
          group-hover:scale-[1.03]
        "
      />

      {/* OVERLAY */}
      <div className="
        absolute inset-0

        bg-black/10
        group-hover:bg-black/0

        transition duration-500
      " />

      {/* BORDE HOVER */}
      <div className="
        absolute inset-0

        border border-blue-500/0
        group-hover:border-blue-500/20

        transition duration-500
      " />

    </motion.div>

  ))}

</div>

              {/* DERECHA */}
              <div className="md:col-span-5 grid gap-4">

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-[18px] group"
                >

                  <img
                    src="/conveyor2.jpg"
                    className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />

                </motion.div>


                <div className="grid grid-cols-2 gap-4">

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.4 }}
                    className="relative overflow-hidden rounded-[18px] group"
                  >

                    <img
                      src="/conveyor3.jpg"
                      className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />

                  </motion.div>


                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.4 }}
                    className="relative overflow-hidden rounded-[18px] group"
                  >

                    <img
                      src="/conveyor4.png"
                      className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500" />

                  </motion.div>

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
                  siguiente proyecto
                </h2>

              </div>


              {/* DERECHA */}
              <div>

                <p className="text-gray-600 text-lg leading-relaxed max-w-[420px] mb-12">
                  Diseñamos conveyors industriales
                  adaptados a las necesidades de tu línea de producción.
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