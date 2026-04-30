"use client";
import { useState } from "react";
import MobileMenu from "@/components/layout/MobileMenu";

export default function GuardasPage() {
  return (
    <>
      <MobileMenu />

      {/*  FONDO GLOBAL */}
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


          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />


          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center w-full px-6 md:px-20 text-white">


            <div>
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                GUARDAS INDUSTRIALES
              </h1>

              <p className="text-gray-200 leading-relaxed">
                Sistemas de protección diseñados para maquinaria industrial,
                garantizando seguridad, durabilidad y cumplimiento normativo.
              </p>
            </div>


            <div className="relative group flex justify-center">
              <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl rounded-2xl scale-110" />

              <img
                src="/guardas_main.jpg"

                className="relative rounded-2xl shadow-md w-[300px] md:w-[450px]"
              />
            </div>

          </div>

        </section>


        {/* ================= TIPOS ================= */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6">

          <div className="text-center">

            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              TIPOS DE GUARDAS
            </h2>

            <CarruselGuardas />

          </div>
        </section>


        {/* ================= NUEVA SECCIÓN  ================= */}
        <section className="min-h-screen flex items-center px-6 md:px-20">

          <div className="grid md:grid-cols-2 gap-12 items-center w-full">

            {/* TEXTO */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Normativa y seguridad
              </h2>

              <p className="text-gray-700 mb-4">
                Nuestras guardas están diseñadas bajo estándares industriales
                que garantizan la protección del personal y el correcto
                funcionamiento de la maquinaria.
              </p>

              <ul className="space-y-2 text-gray-600 text-sm mb-6">
                <li>• Cumplimiento de normativas de seguridad</li>
                <li>• Protección contra accesos no autorizados</li>
                <li>• Reducción de riesgos laborales</li>
                <li>• Integración con sistemas industriales</li>
              </ul>

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20guardas%20industriales",
                    "_blank"
                  )
                }
                className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
              >
                Solicitar cotización
              </button>
            </div>

            {/* IMAGEN */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gray-300 opacity-20 blur-3xl rounded-2xl scale-110" />

              <img
                src="/guardas_detalle.jpg"
                className="relative w-full h-[350px] object-cover rounded-2xl shadow-lg"
              />
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
      desc: "Protección alrededor de maquinaria."
    },
    {
      img: "/guarda2.jpg",
      nombre: "Guardas de seguridad",
      desc: "Prevención en zonas de riesgo."
    },
    {
      img: "/guarda3.jpg",
      nombre: "Guardas con puertas",
      desc: "Acceso controlado."
    },
    {
      img: "/guarda4.jpg",
      nombre: "Diseños personalizados",
      desc: "Adaptadas a cada proyecto."
    }
  ];

  const prev = () => {
    setIndex((index - 1 + guardas.length) % guardas.length);
  };

  const next = () => {
    setIndex((index + 1) % guardas.length);
  };

  return (
    <div className="flex flex-col items-center">

      <img
        src={guardas[index].img}

        className="w-[300px] md:w-[500px] max-h-[300px] object-contain rounded-2xl shadow-xl mb-6"
      />

      <h3 className="text-xl font-semibold">
        {guardas[index].nombre}
      </h3>

      <p className="text-gray-600 mb-6">
        {guardas[index].desc}
      </p>

      <div className="flex gap-6">
        <button onClick={prev} className="px-4 py-2 border rounded-full hover:bg-black hover:text-white transition">
          ←
        </button>

        <button onClick={next} className="px-4 py-2 border rounded-full hover:bg-black hover:text-white transition">
          →
        </button>
      </div>

    </div>
  );
}
