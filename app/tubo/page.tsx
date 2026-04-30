"use client";
import { useState } from "react";
import MobileMenu from "@/components/layout/MobileMenu";

export default function TuboPage() {
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
            src="/fondo_tubo.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center w-full px-6 md:px-20 text-white">

            <div>
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                CORTE LÁSER DE TUBO
              </h1>

              <p className="text-gray-200 leading-relaxed">
                La tecnología de corte por láser de tubos optimiza los procesos de fabricación
                gracias a cortes precisos que encajan perfectamente.
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
                <source src="/videos/video_corte_tubo.mp4" />
              </video>
            </div>

          </div>
        </section>


        {/* ================= CARRUSEL ================= */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6">

          <div className="text-center">

            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              TIPOS DE TUBO QUE MANEJAMOS
            </h2>

            <CarruselTubo />

          </div>
        </section>


        {/* ================= NUEVA SECCIÓN ================= */}
        <section className="min-h-screen flex items-center px-6 md:px-20">

          <div className="grid md:grid-cols-2 gap-12 items-center w-full">


            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Capacidades técnicas
              </h2>

              <p className="text-gray-700 mb-4">
                Contamos con maquinaria de corte láser especializada para trabajar tubos
                y perfiles con alta precisión.
              </p>

              <ul className="space-y-2 text-gray-600 text-sm mb-6">
                <li>• Corte en tubos redondos y cuadrados</li>
                <li>• Alta repetibilidad en producción</li>
                <li>• Minimización de desperdicio</li>
                <li>• Integración con procesos industriales</li>
              </ul>
<button
  onClick={() =>
    window.open(
      "https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20corte%20láser%20de%20tubo",
      "_blank"
    )
  }
  className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
>
  Solicitar cotización
</button>
            </div>
            

            <div className="relative group">
              <div className="absolute inset-0 bg-gray-300 opacity-20 blur-3xl rounded-2xl scale-110" />

              <img
                src="/tubo_detalle.jpg"
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

  return (
    <div className="flex flex-col items-center">

      <img
        src={tubos[index].img}
        className="w-[300px] md:w-[500px] rounded-2xl shadow-xl mb-6"
      />

      <h3 className="text-xl font-semibold">
        {tubos[index].nombre}
      </h3>

      <p className="text-gray-600 mb-6">
        {tubos[index].desc}
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
