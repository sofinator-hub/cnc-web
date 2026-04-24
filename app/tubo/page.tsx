"use client";
import { useState } from "react";

export default function TuboPage() {
return ( <main className="bg-white text-gray-900">

  {/* ================= SECCIÓN 1 ================= */}
  <section className="min-h-screen flex items-center relative overflow-hidden">

    {/* FONDO */}
    <img
      src="/fondo_tubo.jpg"
      alt="Fondo tubo"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* OVERLAY */}
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

    {/* CONTENIDO */}
    <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center w-full px-6 md:px-20 text-white">

      <div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          CORTE LÁSER DE TUBO
        </h1>

        <p className="text-gray-200 leading-relaxed">
          La tecnología de corte por láser de tubos optimiza los procesos de fabricación gracias a la obtención de tuberías con cortes precisos que encajan perfectamente con los componentes de tu proyecto.
        </p>
      </div>

      <div className="relative group">
        <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl rounded-2xl scale-110" />

        <video
          className="relative rounded-2xl shadow-md w-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/video_corte_tubo.mp4" type="video/mp4" />
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

    <CarruselTubo />

  </section>


</main>


);
}

function CarruselTubo() {
const [index, setIndex] = useState(0);

const tubos = [
{
img: "/tipo_de_tubo1.jpg",
nombre: "Perfil cuadrado",
desc: "Alta resistencia para estructura"
},
{
img: "/tipo_de_tubo2.jpg",
nombre: "Tubo redondo",
desc: "Versátil y estético para múltiples usos"
},
{
img: "/tipo_de_tubo3.jpg",
nombre: "Ángulo",
desc: "Refuerzo estructural en esquinas"
},
{
img: "/tipo_de_tubo4.jpg",
nombre: "Canal C",
desc: "Soporte firme para cargas y bastidores"
}
];

const prev = () => {
setIndex((index - 1 + tubos.length) % tubos.length);
};

const next = () => {
setIndex((index + 1) % tubos.length);
};

return ( <div className="relative z-10 flex flex-col items-center">


  <img
    src={tubos[index].img}
    alt={tubos[index].nombre}
    className="w-[300px] md:w-[500px] h-[300px] md:h-[400px] object-contain rounded-2xl shadow-xl mb-6"
  />

  <h3 className="text-xl font-semibold">
    {tubos[index].nombre}
  </h3>

  <p className="text-gray-600 mb-6">
    {tubos[index].desc}
  </p>

  <div className="flex gap-6">
    <button onClick={prev} className="px-4 py-2 border rounded-full">
      ←
    </button>

    <button onClick={next} className="px-4 py-2 border rounded-full">
      →
    </button>
  </div>

</div>

);
}
