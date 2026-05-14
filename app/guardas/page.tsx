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

const categories = [
  {
    title: "Guardas perimetrales",
    desc: "Sistemas modulares de protección para robots y maquinaria automatizada.",
    image: "/guarda1.jpg",
  },
  {
    title: "Cabinas 360°",
    desc: "Cabinas cerradas para máxima seguridad y visibilidad operativa.",
    image: "/guarda2.jpg",
  },
  {
    title: "Acceso rotatorio",
    desc: "Mecanismos industriales de acceso controlado y seguro.",
    image: "/guarda3.jpg",
  },
  {
    title: "Cabinas de acero",
    desc: "Estructuras resistentes para procesos industriales exigentes.",
    image: "/guarda4.jpg",
  },
];

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

      {/* ================= FONDO ================= */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/fondo_blanco.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      <main className="relative z-10 text-black overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative h-screen overflow-hidden">

           <img
            src="/fondo_guardas.jpg"
            className="absolute inset-0 w-full h-full object-cover"
           />

          <div className="absolute inset-0 bg-black/60" />

          {/* GLOWS */}
          <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[900px] h-[350px] bg-blue-500/20 blur-[160px] rounded-full" />

          <div className="absolute bottom-[-20%] left-[10%] w-[500px] h-[200px] bg-cyan-400/10 blur-[120px] rounded-full" />

          {/* GRID */}
          <div className="absolute inset-0 opacity-[0.06]">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="relative z-10 h-full flex items-center px-6 md:px-14">

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-[620px]"
            >

              <p className="uppercase tracking-[0.45em] text-xs text-white/70 mb-8">
                Seguridad industrial
              </p>

              <h1 className="text-[58px] md:text-[108px] leading-[0.9] font-light text-white mb-8">
                Guardas
                <br />
                industriales
              </h1>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-[520px]">
                Sistemas de protección industrial diseñados
                para maquinaria, automatización y entornos
                de alta exigencia operativa.
              </p>

            </motion.div>

          </div>

        </section>


        {/* ================= SISTEMAS ================= */}
        <section className="px-6 md:px-14 py-24 md:py-32">

          <div className="max-w-[1500px] mx-auto">

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
                  integradas a procesos automatizados,
                  robots y maquinaria especializada.
                </p>

              </div>

            </div>


            {/* FEATURES */}
            <div className="grid md:grid-cols-4 gap-10 border-t border-black/10 pt-16">

              {[
                {
                  icon: Shield,
                  title: "Protección",
                  desc: "Seguridad para operadores y maquinaria industrial.",
                },
                {
                  icon: Grid2X2,
                  title: "Modularidad",
                  desc: "Diseños adaptables a múltiples procesos industriales.",
                },
                {
                  icon: Cog,
                  title: "Integración",
                  desc: "Compatibilidad con automatización y líneas productivas.",
                },
                {
                  icon: Factory,
                  title: "Fabricación",
                  desc: "Materiales industriales de alta durabilidad.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden border border-black/5 rounded-[22px] p-8 bg-white/60 backdrop-blur-xl"
                >

                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <item.icon
                    size={34}
                    strokeWidth={1.3}
                    className="mb-8 text-blue-500 relative z-10"
                  />

                  <h3 className="uppercase tracking-[0.3em] text-xs mb-5 relative z-10">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {item.desc}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </section>


        {/* ================= TIPOS ================= */}
        <section className="px-6 md:px-14 py-20">

          <div className="max-w-[1500px] mx-auto border-t border-black/10 pt-20">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">

              <div>

                <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-6">
                  Catálogo
                </p>

                <h2 className="text-[44px] md:text-[76px] leading-[0.95] font-light">
                  Tipos de
                  guardas
                </h2>

              </div>

              <p className="text-gray-600 text-lg leading-relaxed max-w-[420px]">
                Soluciones industriales adaptadas
                a distintos entornos y procesos productivos.
              </p>

            </div>


            <div className="space-y-8">

              {categories.map((item, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  whileHover={{ scale: 1.01 }}
                  className="group relative overflow-hidden rounded-[28px]"
                >

                  <div className="absolute inset-0 bg-black/40 z-10" />

                  <img
                    src={item.image}
                    className="w-full h-[340px] md:h-[500px] object-cover group-hover:scale-[1.04] transition duration-[1800ms]"
                  />

                  <div className="absolute inset-0 z-20 p-8 md:p-14 flex flex-col justify-end">

                    <div className="max-w-[560px]">

                      <h3 className="text-white text-[36px] md:text-[58px] font-light leading-none mb-6">
                        {item.title}
                      </h3>

                      <p className="text-white/75 text-lg leading-relaxed">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= BENEFICIOS ================= */}
        <section className="relative bg-black overflow-hidden py-28">

          <div className="absolute inset-0">

            <div className="absolute top-[20%] left-[10%] w-[500px] h-[300px] bg-blue-500/20 blur-[140px]" />

            <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[220px] bg-cyan-500/10 blur-[120px]" />

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

                  <div className="text-blue-500/20 text-6xl font-light mb-8">
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


        {/* ================= GALERÍA ================= */}
        <section className="px-6 md:px-14 py-10">

          <div className="max-w-[1500px] mx-auto border-t border-black/10 pt-20">

             <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">

              <div>

                <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-6">
                  Proyectos
                </p>

                <h2 className="text-[42px] md:text-[72px] leading-[0.95] font-light">
                  Galería
                  industrial
                </h2>

              </div>

              <p className="text-gray-600 text-lg leading-relaxed max-w-[420px]">
                Fabricación e integración de sistemas
                industriales de seguridad y automatización.
              </p>

            </div>


            {/* MASONRY */}
            <div className="columns-1 md:columns-2 gap-5 space-y-5">

              {[
                "/guarda1.jpg",
                "/guarda2.jpg",
                "/guarda3.jpg",
                "/guarda4.jpg",
                "/guarda_detalle.jpg",
                "/fondo_guarda.jpg",
              ].map((image, i) => (

                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden rounded-[24px] group break-inside-avoid"
                >

                  <img
                    src={image}
                    className="w-full object-cover group-hover:scale-[1.04] transition duration-[1800ms]"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-700" />

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= STATS ================= */}
        <section className="px-6 md:px-14 py-28">

          <div className="max-w-[1500px] mx-auto">

            <div className="relative overflow-hidden rounded-[32px] bg-black px-10 py-20 md:px-20">

              <div className="absolute inset-0">

                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[280px] bg-blue-500/20 blur-[160px]" />

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
                      className="text-blue-400 mb-8"
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


        {/* ================= CTA ================= */}
        <section className="px-6 md:px-14 py-24">

          <div className="max-w-[1500px] mx-auto border-t border-black/10 pt-20">

            <div className="grid md:grid-cols-2 gap-20 items-center">

            <div>

                <p className="uppercase tracking-[0.45em] text-xs text-gray-400 mb-8">
                  ¿Tienes un proyecto?
                </p>

                <h2 className="text-[52px] md:text-[82px] font-light leading-[0.95] text-black">
                  Hablemos de tu
                  siguiente solución
                </h2>

              </div>


            <div>

                <p className="text-gray-600 text-lg leading-relaxed max-w-[420px] mb-12">
                  Desarrollamos sistemas industriales
                  que impulsan seguridad, automatización
                  y eficiencia operativa.
                </p>

                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20guardas%20industriales",
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