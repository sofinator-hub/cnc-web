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

          {/* IMAGEN HERO */}
          <img
            src="/hero_guardas_clean.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

          {/* CONTENIDO */}
         
     <div className="relative z-10 w-full px-6 md:px-20">

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >

              <p className="uppercase tracking-[0.35em] text-sm text-gray-300 mb-6">
                Seguridad Industrial
              </p>

              <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
                Guardas
                <br />
                industriales
              </h1>

              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Sistemas de protección diseñados para maquinaria,
                automatización y procesos industriales con enfoque
                en seguridad, integración y funcionalidad.
              </p>

            </motion.div>

          </div>

        </section>


        {/* ================= SISTEMAS ================= */}
        <section className="px-6 md:px-20 py-28">

          <div className="max-w-7xl mx-auto">

            {/* TITULO */}
            <div className="mb-20">

              <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-6">
                Sistemas
              </p>

              <h2 className="text-5xl font-light leading-tight">
                Soluciones modulares
              </h2>

           </div>

            {/* GRID */}
            <div className="grid md:grid-cols-3 gap-8">

              {[
                {
                  title: "Protección perimetral",
                  desc: "Diseñadas para delimitar áreas industriales y proteger maquinaria.",
                  img: "/guarda1.jpg",
                },
                {
                  title: "Acceso controlado",
                  desc: "Guardas con accesos modulares y configuraciones personalizadas.",
                  img: "/guarda2.jpg",
                },
                {
                  title: "Diseños personalizados",
                  desc: "Soluciones adaptadas a procesos industriales y automatización.",
                  img: "/guarda3.jpg",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >

                  {/* IMAGEN */}
                  <div className="relative overflow-hidden rounded-[32px] mb-8">


                    <img
                      src={item.img}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-700"
                    />

                    <div className="aspect-[4/5]" />

                  </div>

                  {/* TEXTO */}
                  <div>

                    <h3 className="text-3xl font-light mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= INFO TECNICA ================= */}
        <section className="px-6 md:px-20 py-28">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

            {/* TEXTO */}
            <div>

              <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-6">
                Integración industrial
              </p>

              <h2 className="text-5xl font-light leading-tight mb-10">
                Seguridad,
                precisión y
                funcionalidad
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
                Nuestras guardas están diseñadas para proteger
                operadores y maquinaria sin comprometer accesibilidad,
                operación ni integración industrial.
              </p>

              {/* LISTA */}
              <div className="space-y-5">

                {[
                  "Protección perimetral",
                  "Diseños modulares",
                  "Integración personalizada",
                  "Fabricación CNC",
                ].map((item, index) => (

                  <div
                    key={index}
                    className="border-b border-black/10 pb-4 text-lg"
                  >
                    {item}
                  </div>

                ))}

              </div>

           </div>

            {/* IMAGEN */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-[36px]"
            >

              <img
                src="/guardas_detalle.jpg"
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition duration-700"
              />

            </motion.div>

          </div>

        </section>


        {/* ================= CARRUSEL ================= */}
        <section className="px-6 md:px-20 py-28">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-6">
              Proyectos
            </p>

            <h2 className="text-5xl font-light">
              Sistemas industriales
            </h2>

          </div>

          <CarruselGuardas />

        </section>


        {/* ================= CTA ================= */}
        <section className="px-6 md:px-20 pb-32">

          <div className="max-w-5xl mx-auto text-center bg-white/70 backdrop-blur-xl border border-black/5 rounded-[40px] p-12 md:p-20 shadow-xl">

            <p className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-6">
              Sistemas personalizados
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
              ¿Necesitas una solución
              <br />
              de protección industrial?
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Diseñamos sistemas adaptados a maquinaria,
              automatización y procesos industriales.
            </p>

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
      nombre: "Acceso controlado",
      desc: "Sistemas modulares con acceso seguro.",
    },
    {
      img: "/guarda3.jpg",
      nombre: "Diseños personalizados",
      desc: "Integración adaptada a procesos industriales.",
    },
    {
      img: "/guarda4.jpg",
      nombre: "Protección industrial",
      desc: "Soluciones enfocadas en seguridad operativa.",
    },
  ];

  const prev = () => {
    setIndex((index - 1 + guardas.length) % guardas.length);
  };

  const next = () => {
    setIndex((index + 1) % guardas.length);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">

      <div className="relative overflow-hidden rounded-[40px] shadow-2xl">

        {/* IMAGEN */}
        <motion.img
          key={guardas[index].img}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          src={guardas[index].img}
          className="w-full h-[260px] md:h-[520px] object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />

        {/* INFO */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">

          <h3 className="text-3xl md:text-5xl font-light mb-4">
            {guardas[index].nombre}
          </h3>

          <p className="text-gray-200 text-lg max-w-xl">
            {guardas[index].desc}
          </p>

        </div>

      </div>

      {/* BOTONES */}
      <div className="flex justify-center gap-4 mt-10">

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
  );
}