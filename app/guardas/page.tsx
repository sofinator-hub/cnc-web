"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

export default function GuardasPage() {
  return (
    <>
      <MobileMenu />

      {/* FONDO */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/fondo_blanco.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <main className="relative z-10 text-gray-900">

        {/* ================= HERO ================= */}
        <section className="min-h-screen flex items-center relative overflow-hidden">


          <img
            src="/fondo_guardas.jpg"
  
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          {/* GRID */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:70px_70px]" />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-14 items-center w-full px-6 md:px-20 text-white">

            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <p className="uppercase tracking-[0.35em] text-sm text-gray-300 mb-6">
                Seguridad Industrial
              </p>

              <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
                Guardas
                <br />
                industriales
              </h1>

              <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mb-10">
                Sistemas de protección diseñados para maquinaria,
                automatización y líneas de producción industriales.
              </p>

              {/* MÉTRICAS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-2xl font-light mb-2">
                    CNC
                  </h3>

                  <p className="text-xs text-gray-300">
                    Fabricación precisa
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-2xl font-light mb-2">
                    SAFE
                  </h3>

                  <p className="text-xs text-gray-300">
                    Protección industrial
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-2xl font-light mb-2">
                    MOD
                  </h3>

                  <p className="text-xs text-gray-300">
                    Sistemas modulares
                  </p>
                </div>

                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-2xl font-light mb-2">
                    24/7
                  </h3>

                  <p className="text-xs text-gray-300">
                    Protección operativa
                  </p>
                </div>

              </div>

            </motion.div>

            {/* IMAGEN */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >


              <div className="absolute top-6 left-6 border border-white/20 rounded-xl px-4 py-2 backdrop-blur-xl bg-black/20 text-sm">
                Safety Zone
              </div>

              <div className="absolute bottom-6 right-6 border border-white/20 rounded-xl px-4 py-2 backdrop-blur-xl bg-black/20 text-sm">
                Modular System
              </div>

              <img
                src="/guardas_main.jpg"
                className="relative rounded-[32px] shadow-2xl w-[320px] md:w-[520px] border border-white/10"
              />

            </motion.div>

          </div>

        </section>


        {/* ================= APLICACIONES ================= */}
        <section className="px-6 md:px-20 py-28">

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-20">

              <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-6">
                Aplicaciones
              </p>

              <h2 className="text-5xl font-light mb-8">
                Protección industrial
              </h2>

              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Sistemas diseñados para maquinaria,
                automatización y procesos industriales.
              </p>

            </div>

            <div className="grid md:grid-cols-4 gap-8">

              {[
                "Robots industriales",
                "Conveyors",
                "Áreas automatizadas",
                "Zonas de corte",
              ].map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="bg-white/70 backdrop-blur-xl border border-black/5 rounded-[28px] p-10 shadow-xl"
                >

                  <div className="text-6xl text-black/10 font-bold mb-6">
                    0{index + 1}
                  </div>

                  <h3 className="text-2xl font-light">
                    {item}
                  </h3>

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= CARRUSEL ================= */}
        <section className="px-6 md:px-20 py-28">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-6">
              Tipos de guardas
            </p>

            <h2 className="text-5xl font-light">
              Sistemas modulares
            </h2>

          </div>

          <CarruselGuardas />



        </section>


        {/* ================= SEGURIDAD ================= */}
        <section className="px-6 md:px-20 py-32">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

            {/* TEXTO */}
            <div>

              <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-6">
                Seguridad y protección
              </p>

              <h2 className="text-5xl font-light leading-tight mb-10">
                Sistemas pensados
                <br />
                para la industria
              </h2>

              <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                Diseñamos soluciones enfocadas en protección operativa,
                reducción de riesgos e integración industrial.
              </p>

              <div className="grid grid-cols-2 gap-5 mb-10">

              
              
          {[
                  "Protección perimetral",
                  "Acceso controlado",
                  "Reducción de riesgos",
                  "Integración modular",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-white/70 backdrop-blur-xl border border-black/5 rounded-2xl p-5"
                  >
                    {item}
                  </div>

                ))}

              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20guardas%20industriales",
                    "_blank"
                  )
                }
                className="px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition"
              >
                Solicitar cotización
              </button>

            </div>

            {/* IMAGEN */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative"
            >


              <div className="absolute top-6 left-6 border border-white/20 bg-black/30 backdrop-blur-xl rounded-xl px-4 py-2 text-white text-sm z-10">
                Safety Panel
              </div>



              <img
                src="/guardas_detalle.jpg"
                className="w-full h-[500px] object-cover rounded-[32px] shadow-2xl"
              />

            </motion.div>

          </div>

        </section>




      </main>
    </>
  );
}


/* ================= CARRUSEL ================= */

function CarruselGuardas() {
  const [index, setIndex] = useState(0);

  const guardas = [
    {
      img: "/guarda1.jpg",
      nombre: "Guardas perimetrales",
      desc: "Protección alrededor de maquinaria industrial.",
    },
    {
      img: "/guarda2.jpg",
      nombre: "Guardas de seguridad",
      desc: "Prevención en zonas de riesgo operativo.",
    },
    {
      img: "/guarda3.jpg",
      nombre: "Guardas con puertas",
      desc: "Acceso controlado y modular.",
    },
    {
      img: "/guarda4.jpg",
      nombre: "Diseños personalizados",
      desc: "Adaptadas a cada proceso industrial.",
    },
  ];

  const prev = () => {
    setIndex((index - 1 + guardas.length) % guardas.length);
  };

  const next = () => {
    setIndex((index + 1) % guardas.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4">

      <div className="bg-white/70 backdrop-blur-xl border border-black/5 rounded-[36px] p-5 md:p-8 shadow-2xl">

        {/* IMAGEN */}
        <motion.img
          key={guardas[index].img}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          src={guardas[index].img}
          className="w-full h-[220px] md:h-[380px] object-contain rounded-[28px] shadow-xl mb-8"
        />

        {/* INFO */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          <div className="text-left">

            <h3 className="text-2xl md:text-4xl font-light mb-4">
              {guardas[index].nombre}
            </h3>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {guardas[index].desc}
            </p>

          </div>

          {/* BOTONES */}
          <div className="flex gap-4">

            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-black/10 hover:bg-black hover:text-white transition flex items-center justify-center"
            >
              ←
            </button>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-black/10 hover:bg-black hover:text-white transition flex items-center justify-center"
            >
              →
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
