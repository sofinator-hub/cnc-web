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
          alt="Fondo soldadura"
        />

        <div className="absolute inset-0 bg-black/70" />

        {/* Glow morado */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#911C82]/10 mix-blend-screen" />
      </div>

      <main className="relative z-10 text-white overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="min-h-[85vh] flex items-center justify-center relative px-4">

          {/* Glow Effects */}
          <div className="absolute top-10 left-5 w-56 h-56 bg-[#911C82] blur-3xl opacity-20" />

          <div className="absolute bottom-10 right-5 w-56 h-56 bg-[#911C82] blur-3xl opacity-20" />

          {/* Ondas */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[260px] h-[260px]">

              <span className="absolute inset-0 rounded-full border border-[#911C82]/50 opacity-40 animate-ping"></span>

              <span className="absolute inset-0 rounded-full border border-[#911C82]/30 opacity-30 animate-ping [animation-delay:0.6s]"></span>

              <span className="absolute inset-0 rounded-full border border-[#911C82]/20 opacity-20 animate-ping [animation-delay:1.2s]"></span>

            </div>
          </div>

          {/* Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-8 md:p-14 max-w-4xl w-full shadow-2xl text-center"
          >

            <div className="inline-block mb-5 px-4 py-1 rounded-full border border-[#911C82]/40 bg-[#911C82]/10 text-[#d86acc] text-sm tracking-[0.2em] uppercase">
              Tecnología Industrial
            </div>

            <h1 className="text-3xl md:text-6xl font-semibold mb-6 tracking-[0.15em]">
              SOLDADURA
              <span className="block text-[#d14dc0]">
                ULTRASÓNICA
              </span>
            </h1>

            <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Tecnología avanzada que permite uniones limpias, rápidas y de alta precisión
              para aplicaciones industriales de alto rendimiento.
            </p>

          </motion.div>
        </section>


        {/* ================= EXPLICACIÓN ================= */}
        <section className="px-6 md:px-20 py-24">

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              <div className="inline-block mb-4 text-[#d86acc] tracking-[0.2em] uppercase text-sm">
                Ingeniería de precisión
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
                ¿Qué es la soldadura por ultrasonido?
              </h2>

              <p className="text-white/70 mb-6 leading-relaxed">
                Es un proceso que utiliza vibraciones de alta frecuencia para unir materiales,
                generando calor por fricción sin necesidad de fuentes térmicas externas.
              </p>

              <p className="text-white/70 leading-relaxed">
                Ideal para aplicaciones donde la precisión, limpieza y velocidad
                son fundamentales en líneas de producción industriales.
              </p>

            </motion.div>

            {/* Video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
            >

              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[320px] md:h-[420px] object-cover"
              >
                <source src="videos/video_ultrasonido.mp4" />
              </video>

            </motion.div>

          </div>
        </section>


        {/* ================= PANEL ================= */}
        <section className="grid md:grid-cols-[260px_1fr] min-h-[60vh] border-y border-white/10">

          {/* Sidebar */}
          <div className="border-r border-white/10 p-6 space-y-4 backdrop-blur-xl bg-black/20">

            {Object.keys(tabs).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`block w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 ${
                  active === key
                    ? "bg-[#911C82] shadow-lg shadow-[#911C82]/30"
                    : "hover:bg-white/10"
                }`}
              >
                {tabs[key as keyof typeof tabs].title}
              </button>
            ))}

          </div>

          {/* Content */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-10 md:p-20 flex items-center"
          >

            <div>
              <div className="text-[#d86acc] uppercase tracking-[0.2em] text-sm mb-4">
                Información técnica
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                {data.title}
              </h2>

              <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
                {data.desc}
              </p>
            </div>

          </motion.div>

        </section>


        {/* ================= BENEFICIOS ================= */}
        <section className="px-6 md:px-20 py-28">

          <div className="text-center mb-16">

            <div className="text-[#d86acc] uppercase tracking-[0.2em] text-sm mb-4">
              Ventajas competitivas
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold">
              Ventajas del proceso
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Card */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition">

              <div className="w-12 h-12 rounded-2xl bg-[#911C82]/20 flex items-center justify-center mb-6">
                <div className="w-5 h-5 rounded-full bg-[#d14dc0]" />
              </div>

              <h3 className="font-semibold text-xl mb-3">
                Alta precisión
              </h3>

              <p className="text-white/70 leading-relaxed">
                Permite uniones exactas sin afectar la integridad del material.
              </p>

            </div>

            {/* Card */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition">

              <div className="w-12 h-12 rounded-2xl bg-[#911C82]/20 flex items-center justify-center mb-6">
                <div className="w-5 h-5 rounded-full bg-[#d14dc0]" />
              </div>

              <h3 className="font-semibold text-xl mb-3">
                Proceso limpio
              </h3>

              <p className="text-white/70 leading-relaxed">
                No genera residuos ni contaminantes durante el proceso.
              </p>

            </div>

            {/* Card */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition">

              <div className="w-12 h-12 rounded-2xl bg-[#911C82]/20 flex items-center justify-center mb-6">
                <div className="w-5 h-5 rounded-full bg-[#d14dc0]" />
              </div>

              <h3 className="font-semibold text-xl mb-3">
                Alta velocidad
              </h3>

              <p className="text-white/70 leading-relaxed">
                Ideal para líneas de producción eficientes y automatizadas.
              </p>

            </div>

          </div>

        </section>


{/* ================= EMPRESAS SECTION ================= */}
<section className="px-6 md:px-20 py-32 relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#911C82]/20 blur-[180px] rounded-full pointer-events-none" />

  <div className="relative z-10">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="text-center max-w-5xl mx-auto mb-24"
    >

      <div className="text-[#d86acc] uppercase tracking-[0.25em] text-sm mb-5">
        Tecnología Europea
      </div>

      <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
        Precisión que une.
        <span className="block text-[#d14dc0]">
          Tecnología que trasciende.
        </span>
      </h2>

      <p className="text-white/70 text-lg md:text-xl leading-relaxed">
        Elevamos tus estándares de producción con sistemas de soldadura por ultrasonido
        de <span className="text-white font-medium">Tironi Ultrasonic</span>.
        La ingeniería Europea líder, ahora a tu alcance a través de Matei.
      </p>

    </motion.div>


    {/* Logos */}
    <div className="grid md:grid-cols-3 gap-8 items-center mb-24">

      {/* Tironi */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="group bg-white/5 border border-white/10 rounded-[32px] p-10 min-h-[220px] flex items-center justify-center backdrop-blur-xl relative overflow-hidden"
      >

        <div className="absolute inset-0 bg-[#911C82]/0 group-hover:bg-[#911C82]/10 transition duration-500" />

        <img
          src="/logos/logo_tironi.svg"
          alt="Tironi Ultrasonic"
          className="relative z-10 max-h-[110px] object-contain opacity-90 group-hover:opacity-100 transition duration-500"
        />

      </motion.div>


      {/* Logo Matei */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="group bg-white/5 border border-white/10 rounded-[32px] p-10 min-h-[220px] flex items-center justify-center backdrop-blur-xl relative overflow-hidden"
      >

        <div className="absolute inset-0 bg-[#911C82]/0 group-hover:bg-[#911C82]/10 transition duration-500" />

        <img
          src="/logos/logo_matei.svg"
          alt="Matei"
          className="relative z-10 max-h-[100px] object-contain opacity-90 group-hover:opacity-100 transition duration-500"
        />

      </motion.div>


      {/* Logo Clei */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="group bg-white/5 border border-white/10 rounded-[32px] p-10 min-h-[220px] flex items-center justify-center backdrop-blur-xl relative overflow-hidden"
      >

        <div className="absolute inset-0 bg-[#911C82]/0 group-hover:bg-[#911C82]/10 transition duration-500" />

        <img
          src="/logos/logo_clei.svg"
          alt="Empresa"
          className="relative z-10 max-h-[100px] object-contain opacity-90 group-hover:opacity-100 transition duration-500"
        />

      </motion.div>

    </div>


    {/* Content */}
    <div className="grid md:grid-cols-2 gap-16 items-start">

      {/* Left */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <div className="text-[#d86acc] uppercase tracking-[0.2em] text-sm mb-5">
          La evolución de la unión plástica
        </div>

        <h3 className="text-3xl md:text-5xl font-semibold mb-8 leading-tight">
          Ingeniería diseñada para producción industrial moderna
        </h3>

        <p className="text-white/70 leading-relaxed text-lg mb-6">
          En Matei entendemos que la eficiencia no es negociable.
          Como distribuidores exclusivos de Tironi Ultrasonic,
          traemos a México soluciones de soldadura que eliminan
          la necesidad de adhesivos, tornillos o solventes.
        </p>

        <p className="text-white/70 leading-relaxed text-lg">
          El resultado: ciclos de producción más rápidos,
          acabados impecables y procesos industriales más limpios.
        </p>

      </motion.div>


      {/* Right Cards */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="space-y-6"
      >

        {[
          {
            title: "Velocidad",
            desc: "Soldaduras en fracciones de segundo."
          },
          {
            title: "Sostenibilidad",
            desc: "Proceso limpio sin consumibles químicos."
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
            whileHover={{ x: 8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
          >

            <div className="flex items-start gap-5">

              <div className="min-w-[50px] h-[50px] rounded-2xl bg-[#911C82]/20 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#d14dc0]" />
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2">
                  {item.title}
                </h4>

                <p className="text-white/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>

            </div>

          </motion.div>

        ))}

      </motion.div>

    </div>


    {/* Bottom CTA */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mt-28 text-center"
    >

      <h3 className="text-3xl md:text-5xl font-semibold mb-6">
        ¿Tienes un desafío de ensamble?
      </h3>

      <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
        Transformemos tu línea de producción con la precisión de Tironi.
      </p>

      <button
        onClick={() =>
          window.open(
            "https://wa.me/5215562045546?text=Hola,%20quiero%20información%20sobre%20soldadura%20ultrasónica",
            "_blank"
          )
        }
        className="bg-[#911C82] px-8 py-4 rounded-2xl hover:bg-[#7d176f] transition duration-300 shadow-xl shadow-[#911C82]/30"
      >
        Solicitar información
      </button>

    </motion.div>

  </div>
</section>


        {/* ================= CTA ================= */}
        <section className="px-6 md:px-20 py-32 text-center relative overflow-hidden">

          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[500px] h-[500px] bg-[#911C82] blur-[180px] opacity-20 rounded-full" />
          </div>

          <div className="relative z-10">

            <div className="text-[#d86acc] uppercase tracking-[0.2em] text-sm mb-4">
              Cotización industrial
            </div>

            <h2 className="text-3xl md:text-6xl font-semibold mb-8 leading-tight">
              ¿Tienes un proyecto?
            </h2>

            <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Contáctanos para desarrollar soluciones industriales con soldadura
              ultrasónica de alta precisión y rendimiento.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20un%20proyecto%20de%20soldadura%20ultrasónica",
                  "_blank"
                )
              }
              className="bg-[#911C82] px-8 py-4 rounded-2xl hover:bg-[#7d176f] transition duration-300 shadow-xl shadow-[#911C82]/30"
            >
              Cotizar ahora
            </button>

          </div>

        </section>

      </main>
    </>
  );
}