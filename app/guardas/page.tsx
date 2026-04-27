"use client";
import { useState } from "react";
import MobileMenu from "@/components/layout/MobileMenu";

export default function GuardasPage() {
  return (
    <>
      <MobileMenu />

      <main className="bg-white text-gray-900">

        {/* ================= HERO ================= */}
        <section className="min-h-screen flex items-center relative overflow-hidden">

          {/* FONDO */}
          <img
            src="/fondo_guardas.jpg"
            alt="Fondo guardas"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* CONTENIDO */}
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center w-full px-6 md:px-20 text-white">

            {/* TEXTO */}
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                GUARDAS INDUSTRIALES
              </h1>

              <p className="text-gray-200 leading-relaxed">
                Sistemas de protección diseñados para maquinaria y procesos industriales, garantizando seguridad, durabilidad y cumplimiento normativo.
              </p>
            </div>

            {/* IMAGEN / VIDEO */}
            <div className="relative group flex justify-center">
              <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl rounded-2xl scale-110" />

              <img
                src="/guardas_main.jpg"
                alt="Guardas industriales"
                className="relative rounded-2xl shadow-md w-[300px] md:w-[450px]"
              />
            </div>

          </div>

        </section>


        {/* ================= TIPOS ================= */}
        <section className="min-h-screen flex flex-col items-center justify-center relative px-6">

          {/* GRID */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* LÍNEAS */}
          <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-500 opacity-60" />
          <div className="absolute right-0 top-0 h-full w-[2px] bg-blue-500 opacity-60" />

          <div className="relative z-10 text-center">

            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              TIPOS DE GUARDAS
            </h2>

            <CarruselGuardas />

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
      desc: "Protección alrededor de maquinaria para evitar accesos no autorizados."
    },
    {
      img: "/guarda2.jpg",
      nombre: "Guardas de seguridad",
      desc: "Diseñadas para prevenir accidentes en zonas de riesgo."
    },
    {
      img: "/guarda3.jpg",
      nombre: "Guardas con puertas",
      desc: "Acceso controlado para mantenimiento y operación."
    },
    {
      img: "/guarda4.jpg",
      nombre: "Diseños personalizados",
      desc: "Soluciones adaptadas a las necesidades del cliente."
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
        alt={guardas[index].nombre}
        className="w-[300px] md:w-[500px] max-h-[300px] object-contain rounded-2xl shadow-xl mb-6"
      />

      <h3 className="text-xl font-semibold">
        {guardas[index].nombre}
      </h3>

      <p className="text-gray-600 mb-6">
        {guardas[index].desc}
      </p>

      <div className="flex gap-6">
        <button
          onClick={prev}
          className="px-4 py-2 border rounded-full hover:bg-black hover:text-white transition"
        >
          ←
        </button>

        <button
          onClick={next}
          className="px-4 py-2 border rounded-full hover:bg-black hover:text-white transition"
        >
          →
        </button>
      </div>

    </div>
  );
}
