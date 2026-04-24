"use client";
import { useState } from "react";

export default function ConveyorsPage() {
return ( <main className="bg-white text-gray-900">


  {/* ================= SECCIÓN 1 ================= */}
  <section className="min-h-screen flex items-center relative overflow-hidden">

    {/* FONDO */}
    <img
      src="/fondo_conveyor.jpg"
      alt="Fondo conveyor"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

    {/* CONTENIDO */}
    <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center w-full px-6 md:px-20 text-white">

      <div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          SISTEMAS DE TRANSPORTE -CONVEYORS-
        </h1>

        <p className="text-gray-200 leading-relaxed">
          Soluciones automatizadas para el transporte eficiente de materiales en procesos industriales, optimizando tiempos y productividad
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
          <source src="/videos/video_conveyor.mp4" type="video/mp4" />
        </video>
      </div>

    </div>

  </section>


  {/* ================= SECCIÓN CARRUSEL ================= */}
  <section className="min-h-screen flex flex-col items-center justify-center relative px-6">

    {/* GRID */}
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)] bg-[size:50px_50px]" />

    {/* LÍNEAS */}
    <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-500 opacity-60" />
    <div className="absolute right-0 top-0 h-full w-[2px] bg-blue-500 opacity-60" />

    <div className="relative z-10 text-center">

      <h2 className="text-3xl md:text-4xl font-semibold mb-8">
        TIPOS DE CONVEYORS
      </h2>

      <CarruselConveyors />

    </div>

  </section>

</main>

);
}

/* ================= CARRUSEL ================= */

function CarruselConveyors() {
const [index, setIndex] = useState(0);

const conveyors = [
{
img: "/conveyors/conveyor1.jpg",
nombre: "Banda transportadora",
desc: "Movimiento continuo para materiales ligeros"
},
{
img: "/conveyors/conveyor2.jpg",
nombre: "Rodillos",
desc: "Ideal para carga pesada y pallets"
},
{
img: "/conveyors/conveyor3.jpg",
nombre: "Cadena",
desc: "Alta resistencia en procesos industriales"
},
{
img: "/conveyors/conveyor4.jpg",
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

return ( <div className="flex flex-col items-center">

  <img
    src={conveyors[index].img}
    alt={conveyors[index].nombre}
    className="w-[300px] md:w-[500px] h-auto object-contain rounded-2xl shadow-xl mb-6"
  />

  <h3 className="text-xl font-semibold">
    {conveyors[index].nombre}
  </h3>

  <p className="text-gray-600 mb-6">
    {conveyors[index].desc}
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

