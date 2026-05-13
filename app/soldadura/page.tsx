"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import MobileMenu from "@/components/layout/MobileMenu";

export default function UltrasonidoPage() {

  const [active, setActive] = useState("proceso");

  const tabs = {
    proceso: {
      title: "Proceso",
      desc: "La soldadura ultrasónica utiliza vibraciones de alta frecuencia para generar uniones limpias sin calor externo."
    },
    beneficios: {
      title: "Beneficios",
      desc: "Alta precisión, rapidez y procesos completamente limpios."
    },
    aplicaciones: {
      title: "Aplicaciones",
      desc: "Industria automotriz, electrónica, plásticos técnicos y dispositivos médicos."
    },
    tecnologia: {
      title: "Tecnología",
      desc: "Sistema basado en vibración mecánica controlada que mejora la calidad y reduce tiempos."
    }
  };

  const data = tabs[active as keyof typeof tabs];

  return (
    <>
      <MobileMenu />

      {/* ================= FONDO GLOBAL ================= */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/fondo_soldadura.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <main className="relative z-10 text-white">

        {/* ================= HERO ================= */}
        <section className="min-h-[85vh] flex items-center justify-center relative px-4">

          {/* Glow */}
          <div className="absolute top-10 left-5 w-48 h-48 bg-[#911C82] blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-5 w-48 h-48 bg-[#d86acc] blur-3xl opacity-20" />

          {/* Ondas */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[250px] h-[250px]">

              <span className="absolute inset-0 rounded-full border border-[#911C82] opacity-40 animate-ping"></span>
              <span className="absolute inset-0 rounded-full border border-[#d86acc] opacity-30 animate-ping [animation-delay:0.6s]"></span>
              <span className="absolute inset-0 rounded-full border border-[#911C82] opacity-20 animate-ping [animation-delay:1.2s]"></span>

            </div>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-14 max-w-3xl w-full shadow-xl text-center"
          >
            <h1 className="text-2xl md:text-5xl font-semibold mb-6 tracking-[0.2em]">
              SOLDADURA ULTRASÓNICA
            </h1>

            <p className="text-white/80">
              Tecnología avanzada que permite uniones limpias, rápidas y de alta precisión.
            </p>
          </motion.div>

        </section>


        {/* ================= EXPLICACIÓN ================= */}
        <section className="px-6 md:px-20 py-24">

          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              <h2 className="text-2xl md:text-4xl font-semibold mb-6">
                ¿Qué es la soldadura por ultrasonido?
              </h2>

              <p className="text-white/70 mb-4 leading-relaxed">
                Es un proceso que utiliza vibraciones de alta frecuencia para unir materiales,
                generando calor por fricción sin necesidad de fuentes térmicas externas.
              </p>

              <p className="text-white/70 leading-relaxed">
                Ideal para aplicaciones donde la precisión, limpieza y velocidad son fundamentales.
              </p>

            </motion.div>


            {/* VIDEOS */}
            <div className="grid gap-6">

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden"
              >

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[220px] md:h-[280px] object-cover"
                >
                  <source src="videos/video_ultrasonido1.mp4" />
                </video>

              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden"
              >

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[220px] md:h-[280px] object-cover"
                >
                  <source src="videos/video_ultrasonido2.mp4" />
                </video>

              </motion.div>

            </div>

          </div>

        </section>


        {/* ================= PANEL ================= */}
        <section className="grid md:grid-cols-[250px_1fr] min-h-[60vh]">

          {/* SIDEBAR */}
          <div className="border-r border-white/10 p-6 space-y-4">

            {Object.keys(tabs).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition ${
                  active === key
                    ? "bg-[#911C82]"
                    : "hover:bg-white/10"
                }`}
              >
                {tabs[key as keyof typeof tabs].title}
              </button>
            ))}

          </div>


          {/* CONTENT */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 flex items-center"
          >

            <div className="grid md:grid-cols-2 gap-10 items-center w-full">

              {/* TEXTO */}
              <div>

                <h2 className="text-3xl mb-4">
                  {data.title}
                </h2>

                <p className="text-white/70 max-w-xl leading-relaxed">
                  {data.desc}
                </p>

              </div>


              {/* VIDEO SOLO EN APLICACIONES */}
              {active === "aplicaciones" && (

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-2xl overflow-hidden border border-white/10"
                >

                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-[240px] md:h-[320px] object-cover"
                  >
                    <source src="videos/video_ultrasonido3.mp4" />
                  </video>

                </motion.div>

              )}

            </div>

          </motion.div>

        </section>


        {/* ================= BENEFICIOS ================= */}
        <section className="px-6 md:px-20 py-24">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >

            <h2 className="text-2xl md:text-4xl font-semibold mb-6">
              Ventajas del proceso
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              Procesos industriales optimizados para producción moderna,
              precisión extrema y resultados repetibles.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            {[
              {
                title: "Alta precisión",
                desc: "Permite uniones exactas sin afectar el material."
              },
              {
                title: "Proceso limpio",
                desc: "No genera residuos ni contaminantes."
              },
              {
                title: "Alta velocidad",
                desc: "Ideal para producción eficiente."
              }
            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10"
              >

                <div className="w-14 h-14 mx-auto rounded-2xl bg-[#911C82]/15 border border-[#911C82]/20 flex items-center justify-center mb-5">
                  <div className="w-3 h-3 rounded-full bg-[#d86acc] shadow-[0_0_12px_rgba(216,106,204,0.8)]" />
                </div>

                <h3 className="font-semibold mb-3 text-xl">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </section>

      </main>
    </>
  );
}