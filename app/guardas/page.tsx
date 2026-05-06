 "use client";

 import { motion } from "framer-motion";
 import { useState } from "react";
 import MobileMenu from "@/components/layout/MobileMenu";


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
      <div className="absolute inset-0 bg-white/75" />
      </div>

      <main className="relative z-10 text-gray-900 overflow-hidden">

        {/* ================= HERO ================= */}
        <section className="relative min-h-screen flex items-center overflow-hidden">

          {/* FONDO */}
          <img
            src="/hero_guardas_clean.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/55" />

          {/* CONTENIDO */}
          <div className="relative z-10 w-full px-6 md:px-20 pt-32">

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >

              <p className="uppercase tracking-[0.45em] text-sm text-gray-300 mb-8">
                Seguridad Industrial
              </p>

              <h1 className="text-6xl md:text-[110px] font-light text-white leading-[0.95] mb-10">
                Guardas
                <br />
                industriales
              </h1>

              <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-xl">
                Sistemas de protección para maquinaria,
                automatización y procesos industriales.
              </p>

            </motion.div>

          </div>

        </section>


        {/* ================= INTRO ================= */}
        <section className="px-6 md:px-20 py-32">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-8">
                Integración industrial
              </p>

              <h2 className="text-5xl md:text-7xl font-light leading-[1.05] mb-10">
                Seguridad,
                precisión
                y diseño
              </h2>

              <p className="text-gray-600 text-xl leading-relaxed max-w-xl mb-14">
                Diseñamos soluciones modulares enfocadas
                en protección operativa, integración industrial
                y funcionalidad estructural.
              </p>

              {/* LISTA */}
              <div className="space-y-6">

                {[
                  "Protección perimetral",
                  "Diseños modulares",
                  "Integración personalizada",
                  "Fabricación CNC",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="border-b border-black/10 pb-5 text-lg md:text-xl"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </motion.div>

            {/* IMAGEN */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[40px]"
            >

              <img
                src="/guardas_detalle.jpg"
                className="w-full h-[420px] md:h-[720px] object-cover grayscale hover:grayscale-0 transition duration-700"
              />

            </motion.div>

          </div>

        </section>


        {/* ================= CARRUSEL EDITORIAL ================= */}
        <section className="px-6 md:px-20 py-32">

          <div className="max-w-7xl mx-auto">

            {/* HEADER */}
            <div className="mb-20 md:mb-28">

              <p className="uppercase tracking-[0.4em] text-sm text-gray-500 mb-8">
                Sistemas
              </p>

              <h2 className="text-5xl md:text-7xl font-light leading-[1.05]">
                Protección
                <br />
                industrial
              </h2>

            </div>

            <CarruselEditorial />

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="px-6 md:px-20 pb-32">

          <div className="max-w-6xl mx-auto border border-black/10 rounded-[40px] bg-white/60 backdrop-blur-xl p-12 md:p-24">

            <div className="max-w-3xl">

              <p className="uppercase tracking-[0.4em] text-sm text-gray-500 mb-8">
                Sistemas personalizados
              </p>

              <h2 className="text-5xl md:text-7xl font-light leading-[1.05] mb-10">
                Diseñadas para
                procesos reales
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-14 max-w-2xl">
                Soluciones adaptadas a maquinaria,
                automatización y entornos industriales
                con enfoque en seguridad y funcionalidad.
              </p>

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20guardas%20industriales",
                    "_blank"
                  )
                }
                className="px-8 py-4 bg-black text-white rounded-2xl hover:bg-gray-800 transition text-lg"
              >
                Solicitar cotización
              </button>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}


/* ================= CARRUSEL EDITORIAL ================= */

function CarruselEditorial() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      img: "/guarda1.jpg",
      title: "Protección perimetral",
      desc: "Sistemas diseñados para delimitar y proteger áreas industriales.",
    },
    {
      img: "/guarda2.jpg",
      title: "Acceso controlado",
      desc: "Configuraciones modulares adaptadas a cada proceso.",
    },
    {
      img: "/guarda3.jpg",
      title: "Diseños personalizados",
      desc: "Integración industrial enfocada en funcionalidad y precisión.",
    },
    {
      img: "/guarda4.jpg",
      title: "Protección industrial",
      desc: "Soluciones estructurales para automatización y maquinaria.",
    },
  ];

  const prev = () => {
    setIndex((index - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setIndex((index + 1) % slides.length);
  };

  return (
    <div className="relative">

      {/* CARD */}
      <motion.div
        key={slides[index].img}
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 items-end"
      >

        {/* IMAGEN */}
        <div className="relative overflow-hidden rounded-[40px]">

          <img
            src={slides[index].img}
            className="w-full h-[300px] md:h-[720px] object-cover grayscale hover:grayscale-0 transition duration-700"
          />

        </div>

        {/* INFO */}
        <div className="pb-4 md:pb-10">

          <div className="text-[90px] md:text-[160px] font-light text-black/5 leading-none mb-6">
            0{index + 1}
          </div>

          <h3 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            {slides[index].title}
          </h3>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 max-w-md">
            {slides[index].desc}
          </p>

          {/* CONTROLES */}
          <div className="flex gap-4">

            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-black/10 hover:bg-black hover:text-white transition flex items-center justify-center text-xl"
            >
              ←
            </button>

            <button
              onClick={next}
              className="w-14 h-14 rounded-full border border-black/10 hover:bg-black hover:text-white transition flex items-center justify-center text-xl"
            >
              →

            </button>

          </div>

        </div>

      </motion.div>

    </div>
  );
}