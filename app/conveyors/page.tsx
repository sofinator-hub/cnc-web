"use client";
import { useState } from "react";
import MobileMenu from "@/components/layout/MobileMenu";

export default function ConveyorsPage() {
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
            src="/fondo_conveyor.jpg"

            className="absolute inset-0 w-full h-full object-cover"
          />


          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />


          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center w-full px-6 md:px-20 text-white">

            <div>
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                SISTEMAS DE TRANSPORTE -CONVEYORS-
              </h1>

              <p className="text-gray-200 leading-relaxed">
                Soluciones automatizadas para el transporte eficiente de materiales en procesos industriales.
              </p>
            </div>

            <div className="relative group flex justify-center">
              <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl rounded-2xl scale-110" />

              <video
                className="relative rounded-2xl shadow-md w-[300px] md:w-[450px]"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/video_conveyor.mp4" />
              </video>
            </div>

          </div>

        </section>


        {/* ================= CARRUSEL ================= */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6">

          <div className="text-center">

            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              TIPOS DE CONVEYORS
            </h2>

            <CarruselConveyors />

          </div>
        </section>


        {/* ================= NUEVA SECCIÓN 🔥 ================= */}
        <section className="min-h-screen flex items-center px-6 md:px-20">

          <div className="grid md:grid-cols-2 gap-12 items-center w-full">

            {/* TEXTO */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ingeniería en movimiento
              </h2>

              <p className="text-gray-700 mb-4">
                Diseñamos sistemas de transporte adaptados a tus necesidades,
                optimizando flujo de trabajo, tiempos y eficiencia operativa.
              </p>

              <ul className="space-y-2 text-gray-600 text-sm mb-6">
                <li>• Diseño personalizado</li>
                <li>• Integración con líneas de producción</li>
                <li>• Automatización de procesos</li>
                <li>• Mantenimiento y optimización</li>
              </ul>

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20un%20sistema%20de%20conveyors",
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
                src="/conveyor_detalle.jpg"
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

function CarruselConveyors() {
  const [index, setIndex] = useState(0);

  const conveyors = [
    {
      img: "/conveyor1.jpg",
      nombre: "Transportadores de rodillo",
      desc: "Los transportadores de rodillos por gravedad."
    },
    {
      img: "/conveyor2.jpg",
      nombre: "Bandas transportadoras motorizadas",
      desc: "Las cintas transportadoras eléctricas son una solución económica."
    },
    {
      img: "/conveyor3.jpg",
      nombre: "Bandas transportadoras inclinadas",
      desc: "Si necesita llevar un producto a otro nivel."
    },
    {
      img: "/conveyor4.png",
      nombre: "Sistema personalizado",
      desc: "Diseñado según tus necesidades"
    }
  ];

  const prev = () => {
    setIndex((index - 1 + conveyors.length) % conveyors.length);
  };

  const next = () => {
    setIndex((index + 1) % conveyors.length);
  };

  return (
    <div className="flex flex-col items-center">

      <img
        src={conveyors[index].img}

        className="w-[300px] md:w-[500px] max-h-[300px] object-contain rounded-2xl shadow-xl mb-6"
      />

      <h3 className="text-xl font-semibold">
        {conveyors[index].nombre}
      </h3>

      <p className="text-gray-600 mb-6">
        {conveyors[index].desc}
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

