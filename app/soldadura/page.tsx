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

      {/*  FONDO FIJO GLOBAL */}
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
          <div className="absolute top-10 left-5 w-48 h-48 bg-blue-500 blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-5 w-48 h-48 bg-cyan-400 blur-3xl opacity-20" />

          {/* Ondas */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[250px] h-[250px]">

              <span className="absolute inset-0 rounded-full border border-blue-400 opacity-40 animate-ping"></span>
              <span className="absolute inset-0 rounded-full border border-cyan-300 opacity-30 animate-ping [animation-delay:0.6s]"></span>
              <span className="absolute inset-0 rounded-full border border-blue-500 opacity-20 animate-ping [animation-delay:1.2s]"></span>

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
        <section className="px-6 md:px-20 py-24 bg-black/60 backdrop-blur-sm">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-2xl md:text-4xl font-semibold mb-6">
                ¿Qué es la soldadura por ultrasonido?
              </h2>

              <p className="text-white/70 mb-4">
                Es un proceso que utiliza vibraciones de alta frecuencia para unir materiales,
                generando calor por fricción sin necesidad de fuentes térmicas externas.
              </p>

              <p className="text-white/70">
                Ideal para aplicaciones donde la precisión, limpieza y velocidad son fundamentales.
              </p>
            </div>


            <div className="rounded-2xl overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[300px] md:h-[400px] object-cover"
              >
                <source src="videos/video_ultrasonido.mp4" />
              </video>
            </div>

          </div>
        </section>


        {/* ================= PANEL ================= */}
        <section className="grid md:grid-cols-[250px_1fr] min-h-[60vh] bg-black/70 backdrop-blur-sm">

          <div className="border-r border-white/10 p-6 space-y-4">

            {Object.keys(tabs).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition ${
                  active === key
                    ? "bg-blue-600"
                    : "hover:bg-white/10"
                }`}
              >
                {tabs[key as keyof typeof tabs].title}
              </button>
            ))}

          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 flex items-center"
          >
            <div>
              <h2 className="text-3xl mb-4">{data.title}</h2>
              <p className="text-white/70 max-w-xl">{data.desc}</p>
            </div>
          </motion.div>

        </section>


        {/* ================= BENEFICIOS ================= */}
        <section className="px-6 md:px-20 py-24 bg-black/60 backdrop-blur-sm">

          <h2 className="text-2xl md:text-4xl font-semibold mb-12 text-center">
            Ventajas del proceso
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="p-6 rounded-2xl bg-white/10">
              <h3 className="font-semibold mb-2">Alta precisión</h3>
              <p className="text-white/70 text-sm">
                Permite uniones exactas sin afectar el material.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10">
              <h3 className="font-semibold mb-2">Proceso limpio</h3>
              <p className="text-white/70 text-sm">
                No genera residuos ni contaminantes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/10">
              <h3 className="font-semibold mb-2">Alta velocidad</h3>
              <p className="text-white/70 text-sm">
                Ideal para producción eficiente.
              </p>
            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="px-6 md:px-20 py-24 text-center bg-black/70 backdrop-blur-sm">

          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            ¿Tienes un proyecto?
          </h2>

          <p className="text-white/70 mb-6">
            Contáctanos para desarrollar soluciones con soldadura de alta precisión.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20un%20proyecto%20de%20soldadura%20ultrasónica",
                "_blank"
              )
            }
            className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Cotizar ahora
          </button>

        </section>

      </main>
    </>
  );
}