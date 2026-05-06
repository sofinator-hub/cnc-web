"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

export default function GuardasPage() {
  return (
    <>
      <MobileMenu />

      {/* FONDO GLOBAL */}
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

          <div className="absolute inset-0 bg-black/55" />

          {/* GRID TECNICO */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:70px_70px]" />
          </div>

          {/* NUMERO */}
          <div className="absolute right-10 md:right-24 top-10 text-[120px] md:text-[220px] text-white/10 font-bold">
            01
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center w-full px-6 md:px-20 text-white">

            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <p className="uppercase tracking-[0.4em] text-sm text-gray-300 mb-6">
                Seguridad Industrial
              </p>

              <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
                Guardas industriales
                <br />
                para maquinaria
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-10">
                Sistemas de protección industrial diseñados para maquinaria,
                automatización y líneas de producción, integrando seguridad,
                resistencia y funcionalidad operativa.
              </p>

              {/* METRICAS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-2xl font-light mb-2">
                    +20
                  </h3>

                  <p className="text-xs text-gray-300">
                    Sistemas fabricados
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
                    100%
                  </h3>

                  <p className="text-xs text-gray-300">
                    Diseño personalizado
                  </p>
                </div>

              </div>

            </motion.div>

            {/* IMAGEN */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >

              {/* OVERLAYS */}
              <div className="absolute top-8 left-8 border border-white/20 rounded-xl px-4 py-2 backdrop-blur-xl bg-black/20 text-sm">
                Safety Zone
              </div>

              <div className="absolute bottom-10 right-8 border border-white/20 rounded-xl px-4 py-2 backdrop-blur-xl bg-black/20 text-sm">
                Industrial Protection
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

              <p className="uppercase tracking-[0.4em] text-sm text-gray-500 mb-6">
                Aplicaciones
              </p>

              <h2 className="text-5xl font-light mb-8">
                Sistemas de protección
              </h2>

              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Diseñadas para integrarse en diferentes entornos industriales,
                automatización y maquinaria especializada.
              </p>

            </div>

            <div className="grid md:grid-cols-4 gap-8">

              {[
                "Robots industriales",
                "Conveyors",
                "Zonas automatizadas",
                "Áreas de corte",
              ].map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
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
        <section className="px-6 md:px-20 py-28 relative overflow-hidden">

          <div className="absolute inset-0">

            <div
              className="absolute inset-0 bg-fixed bg-center bg-cover"
              style={{
                backgroundImage: "url('/fondo_negro.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-black/70" />

          </div>

          <div className="relative z-10">

            <div className="text-center mb-20 text-white">

              <p className="uppercase tracking-[0.4em] text-sm text-gray-400 mb-6">
                Tipos de guardas
              </p>

              <h2 className="text-5xl font-light">
                Sistemas modulares
              </h2>

            </div>

            <CarruselGuardas />

          </div>

        </section>


        {/* ================= SEGURIDAD ================= */}
        <section className="px-6 md:px-20 py-32">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

            {/* TEXTO */}
            <div>

              <p className="uppercase tracking-[0.4em] text-sm text-gray-500 mb-6">
                Normativa y seguridad
              </p>

              <h2 className="text-5xl font-light leading-tight mb-10">
                Protección operativa
                <br />
                industrial
              </h2>

              <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                Nuestras guardas están desarrolladas para reducir riesgos,
                proteger operadores y mantener seguridad en procesos industriales.
              </p>

              <div className="grid grid-cols-2 gap-5 mb-10">

                {[
                  "Cumplimiento normativo",
                  "Protección perimetral",
                  "Reducción de riesgos",
                  "Integración industrial",
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
              whileHover={{ scale: 1.02 }}
              className="relative"
            >

              {/* OVERLAY TECNICO */}
              <div className="absolute top-6 left-6 border border-white/20 bg-black/40 backdrop-blur-xl rounded-xl px-4 py-2 text-white text-sm z-10">
                Safety Panel
              </div>

              <div className="absolute bottom-6 right-6 border border-white/20 bg-black/40 backdrop-blur-xl rounded-xl px-4 py-2 text-white text-sm z-10">
                Controlled Access
              </div>

              <img
                src="/guardas_detalle.jpg"
                className="w-full h-[500px] object-cover rounded-[32px] shadow-2xl"
              />

            </motion.div>

          </div>

        </section>


        {/* ================= TIMELINE ================= */}
        <section className="relative px-6 md:px-20 py-32 text-white overflow-hidden">

          {/* FONDO */}
          <div className="absolute inset-0">

            <div
              className="absolute inset-0 bg-fixed bg-center bg-cover"
              style={{
                backgroundImage: "url('/fondo_negro.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-black/70" />

          </div>

          <div className="relative z-10 max-w-6xl mx-auto">

            <div className="text-center mb-28">

              <p className="uppercase tracking-[0.4em] text-sm text-gray-500 mb-6">
                Proceso de fabricación
              </p>

              <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8">
                Desarrollo modular
                <br />
                estructurado
              </h2>

            </div>

            <div className="relative">

              <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/10" />

              <div className="space-y-28">

                {[
                  {
                    number: "01",
                    title: "Levantamiento",
                    desc: "Evaluación de maquinaria y zonas de riesgo.",
                  },
                  {
                    number: "02",
                    title: "Diseño",
                    desc: "Modelado y desarrollo estructural personalizado.",
                  },
                  {
                    number: "03",
                    title: "Fabricación",
                    desc: "Producción CNC y ensamblaje industrial.",
                  },
                  {
                    number: "04",
                    title: "Instalación",
                    desc: "Integración y ajuste operativo.",
                  },
                ].map((step, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      index % 2 === 0
                        ? "md:justify-start"
                        : "md:justify-end"
                    }`}
                  >

                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      className="relative w-full md:w-[46%] backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden"
                    >

                      <div className="absolute -top-6 -right-2 text-[120px] font-bold text-white/[0.04] leading-none">
                        {step.number}
                      </div>

                      <div className="relative z-10">

                        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
                          Etapa {step.number}
                        </p>

                        <h3 className="text-3xl font-light mb-6">
                          {step.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed text-lg">
                          {step.desc}
                        </p>

                      </div>

                    </motion.div>

                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-4 border-black z-20" />

                  </motion.div>

                ))}

              </div>

            </div>

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
    <div className="flex flex-col items-center relative z-10">

      <motion.img
        key={guardas[index].img}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        src={guardas[index].img}
        className="w-[320px] md:w-[700px] max-h-[500px] object-cover rounded-[32px] shadow-2xl mb-10 border border-white/10"
      />

      <h3 className="text-3xl font-light text-white mb-4">
        {guardas[index].nombre}
      </h3>

      <p className="text-gray-400 mb-10 text-lg">
        {guardas[index].desc}
      </p>

      <div className="flex gap-6">

        <button
          onClick={prev}
          className="px-5 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition text-white"
        >
          ←
        </button>

        <button
          onClick={next}
          className="px-5 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition text-white"
        >
          →
        </button>

      </div>

    </div>
  );
}
