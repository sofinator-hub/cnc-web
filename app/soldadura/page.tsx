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
        <section className="px-6 md:px-20 py-24">

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
        <section className="grid md:grid-cols-[250px_1fr] min-h-[60vh]">

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
        <section className="px-6 md:px-20 py-24">

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


        {/* ================= TIRONI SECTION ================= */}
        <section className="px-6 md:px-20 py-28 relative overflow-hidden">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500 blur-[160px] opacity-10 rounded-full pointer-events-none" />

          <div className="relative z-10">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center max-w-5xl mx-auto mb-20"
            >

              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
                Precisión que une.
                <span className="block text-cyan-300">
                  Tecnología que trasciende.
                </span>
              </h2>

              <p className="text-white/70 text-lg leading-relaxed">
                Elevamos tus estándares de producción con sistemas de soldadura
                por ultrasonido de <span className="text-white">Tironi Ultrasonic</span>.
                La ingeniería Europea líder, ahora a tu alcance a través de Matei.
              </p>

            </motion.div>


            {/* Logos */}
            <div className="grid md:grid-cols-3 gap-8 items-center mb-24">

              {/* Tironi */}
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white/10 border border-white/10 rounded-3xl p-10 min-h-[200px] flex items-center justify-center backdrop-blur-xl"
              >
                <img
                  src="/logos/logo_tironi.svg"
                  alt="Tironi"
                  className="max-h-[90px] w-full object-contain"
                />
              </motion.div>


              {/* Matei */}
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white/10 border border-white/10 rounded-3xl p-10 min-h-[200px] flex items-center justify-center backdrop-blur-xl"
              >
                <img
                  src="/logos/logo_matei.svg"
                  alt="Matei"
                  className="max-h-[90px] w-full object-contain"
                />
              </motion.div>


              {/* Clei */}
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white/10 border border-white/10 rounded-3xl p-10 min-h-[200px] flex items-center justify-center backdrop-blur-xl"
              >
                <img
                  src="/logos/logo_clei.svg"
                  alt="Clei"
                  className="max-h-[90px] w-full object-contain"
                />
              </motion.div>

            </div>


            {/* Content */}
            <div className="grid md:grid-cols-2 gap-14 items-start">

              {/* Texto */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >

                <h3 className="text-3xl md:text-4xl font-semibold mb-8">
                  La evolución de la unión plástica
                </h3>

                <p className="text-white/70 leading-relaxed mb-6">
                  En Matei entendemos que la eficiencia no es negociable.
                  Como distribuidores exclusivos de Tironi Ultrasonic,
                  traemos a México soluciones de soldadura que eliminan
                  la necesidad de adhesivos, tornillos o solventes.
                </p>

                <p className="text-white/70 leading-relaxed">
                  Garantizando ciclos de producción más rápidos y acabados
                  estéticamente impecables.
                </p>

              </motion.div>


              {/* Cards */}
              <div className="space-y-5">

                {[
                  {
                    title: "Velocidad",
                    desc: "Soldaduras en fracciones de segundo."
                  },
                  {
                    title: "Sostenibilidad",
                    desc: "Proceso limpio, sin consumibles químicos."
                  },
                  {
                    title: "Repetibilidad",
                    desc: "Resultados constantes con control digital avanzado."
                  },
                  {
                    title: "Integridad",
                    desc: "Uniones de alta resistencia mecánica sin dañar las piezas."
                  }
                ].map((item, i) => (

                  <motion.div
                    key={i}
                    whileHover={{ x: 6 }}
                    className="bg-white/10 rounded-2xl p-6 backdrop-blur-xl"
                  >

                    <h4 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h4>

                    <p className="text-white/70">
                      {item.desc}
                    </p>

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