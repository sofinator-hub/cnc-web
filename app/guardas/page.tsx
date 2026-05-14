"use client";

import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

import {
  Shield,
  Grid2X2,
  Cog,
  ArrowUpRight,
  Factory,
  Wrench,
  ScanSearch,
  Layers3,
} from "lucide-react";

const benefits = [
  "Alta resistencia",
  "Durabilidad industrial",
  "Adaptable a procesos",
  "Fácil reubicación",
  "Visibilidad operativa",
  "Resistencia mecánica",
];

const process = [
  {
    title: "Análisis",
    desc: "Evaluamos requerimientos técnicos y riesgos operativos.",
  },
  {
    title: "Diseño",
    desc: "Desarrollamos soluciones personalizadas y modulares.",
  },
  {
    title: "Fabricación",
    desc: "Producción con materiales industriales de alta calidad.",
  },
  {
    title: "Instalación",
    desc: "Montaje e integración en planta y líneas de producción.",
  },
  {
    title: "Soporte",
    desc: "Acompañamiento técnico y mantenimiento especializado.",
  },
];

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
                  src="/guardas_detalle.jpg"
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


            {/* GRID */}
            <div className="grid grid-cols-2 gap-4">

              {[
                "/guarda1.jpg",
                "/guarda2.jpg",
                "/guarda3.jpg",
                "/guarda4.jpg",
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
                    bg-white
                  "
                >

                  <div
                    className="
                      w-full
                      h-[260px] md:h-[340px]

                      flex items-center justify-center

                      overflow-hidden
                    "
                  >

                    <img
                      src={image}
                      className="
                        max-w-full
                        max-h-full

                        object-contain

                        transition duration-700
                        group-hover:scale-[1.03]
                      "
                    />

                  </div>

                  {/* OVERLAY */}
                  <div className="
                    absolute inset-0

                    bg-black/5
                    group-hover:bg-black/0

                    transition duration-500
                  " />

                  {/* BORDE */}
                  <div className="
                    absolute inset-0

                    border border-[#8C1C7D]/0
                    group-hover:border-[#8C1C7D]/20

                    transition duration-500
                  " />

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= BENEFICIOS ================= */}
        <section className="relative bg-black overflow-hidden py-28">

          {/* GLOWS */}
          <div className="absolute inset-0">

            <div className="absolute top-[20%] left-[10%] w-[500px] h-[300px] bg-[#8C1C7D]/20 blur-[140px]" />

            <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[220px] bg-[#542b7c]/20 blur-[120px]" />

          </div>

          <div className="relative z-10 px-6 md:px-14">

            <div className="max-w-[1500px] mx-auto">

              <div className="mb-20">

                <p className="uppercase tracking-[0.45em] text-xs text-white/40 mb-8">
                  Beneficios
                </p>

                <h2 className="text-[48px] md:text-[84px] font-light leading-[0.95] text-white max-w-[820px]">
                  Diseñadas para
                  máxima seguridad
                  industrial
                </h2>

              </div>


              <div className="grid md:grid-cols-3 gap-6">

                {benefits.map((item, i) => (

                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-[24px] p-10"
                  >

                    <div className="text-white/20 text-5xl font-light mb-10">
                      0{i + 1}
                    </div>

                    <h3 className="text-white text-2xl font-light mb-4">
                      {item}
                    </h3>

                    <p className="text-white/60 leading-relaxed">
                      Sistemas industriales desarrollados
                      para alto desempeño y operación segura.
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* ================= PROCESO ================= */}
        <section className="px-6 md:px-14 py-28">

          <div className="max-w-[1500px] mx-auto border-t border-black/10 pt-24">

            <div className="mb-20">

              <p className="uppercase tracking-[0.45em] text-xs text-gray-400 mb-8">
                Proceso
              </p>

              <h2 className="text-[48px] md:text-[82px] font-light leading-[0.95]">
                Desarrollo
                integral
              </h2>

            </div>


            <div className="grid md:grid-cols-5 gap-8">

              {process.map((item, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >

                  <div className="text-[#8C1C7D]/20 text-6xl font-light mb-8">
                    0{i + 1}
                  </div>

                  <h3 className="text-2xl font-light mb-5">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>
 

        {/* ================= STATS ================= */}
        <section className="px-6 md:px-14 pb-28">

          <div className="max-w-[1500px] mx-auto">

            <div className="relative overflow-hidden rounded-[32px] bg-black px-10 py-20 md:px-20">

              {/* GLOW */}
              <div className="absolute inset-0">

                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[280px] bg-[#8C1C7D]/20 blur-[160px]" />

              </div>

              <div className="relative z-10 grid md:grid-cols-4 gap-10">

                {[
                  {
                    number: "+50",
                    label: "Proyectos industriales",
                    icon: Factory,
                  },
                  {
                    number: "100%",
                    label: "Diseño personalizado",
                    icon: Wrench,
                  },
                  {
                    number: "24/7",
                    label: "Operación industrial",
                    icon: ScanSearch,
                  },
                  {
                    number: "Modular",
                    label: "Integración adaptable",
                    icon: Layers3,
                  },
                ].map((item, i) => (

                  <div key={i}>

                    <item.icon
                      size={34}
                      strokeWidth={1.3}
                      className="text-[#8C1C7D] mb-8"
                    />

                    <div className="text-white text-5xl md:text-6xl font-light mb-5">
                      {item.number}
                    </div>

                    <p className="text-white/60 text-lg">
                      {item.label}
                    </p>

                  </div>

                ))}

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