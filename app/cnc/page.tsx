"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function CNCPage() {

useEffect(() => {
const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

}, []);

return ( <main className="bg-white text-gray-900">
  
  {/* HERO */}
  <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">

    <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

    <div className="max-w-3xl reveal">
      <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
        SERVICIO DE CORTE LÁSER Y FIBRA
      </h1>

      <p className="mt-6 text-gray-600 text-lg leading-relaxed">
        Maquila de corte láser en acero inoxidable. Puedes hacer todo lo que sea posible con nuestro sistema de corte láser de fibra: joyas, gabinetes electrónicos, decoraciones, tarjetas de identificación y etiquetas, robots, marcadores, relojes, letreros, letras, marcos, arte, modelos, bolsos, juguetes, artículos para el hogar, iluminación, muebles e incluso productos promocionales personalizados.
      </p>
    </div>

  </section>


  {/* VIDEO */}
  <section className="min-h-screen flex items-center px-6 md:px-20">

    <div className="grid md:grid-cols-2 gap-16 items-center w-full">

      <div className="reveal">
        <h2 className="text-5xl font-semibold mb-6">
          CORTE LÁSER DE PIEZAS INDUSTRIALES
        </h2>

        <p className="text-gray-600 text-lg">
          La tecnología de corte por láser es un proceso excelente para cortar acero al carbón, aleaciones de aluminio y acero inoxidable.
        </p>
      </div>

      <div className="reveal">
        <video autoPlay muted loop playsInline className="w-full rounded-2xl shadow-xl">
          <source src="/videos/video_corte_laser1.mp4" type="video/mp4" />
        </video>
      </div>

    </div>

  </section>


  {/* IMÁGENES */}
  <section className="min-h-screen flex items-center px-6 md:px-20">

    <div className="grid md:grid-cols-2 gap-8 w-full">

      <div className="reveal overflow-hidden rounded-2xl">
        <Image src="/foto_acero1.jpg" width={600} height={400} alt="Acero"
          className="hover:scale-105 transition duration-700" />
      </div>

      <div className="reveal overflow-hidden rounded-2xl">
        <Image src="/foto_acero2.jpg" width={600} height={400} alt="Acero"
          className="hover:scale-105 transition duration-700" />
      </div>

    </div>

  </section>


  {/* TABLA PRO */}
  <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">

    <h2 className="text-5xl font-semibold mb-12 reveal">
      MATERIALES Y ESPESORES
    </h2>

    <div className="w-full max-w-2xl">

      {[
        ["Acero inoxidable", "3/16 (5mm)"],
        ["Acero al carbón", "5/8 (16mm)"],
        ["Aluminio", "3/16 (5mm)"],
        ["Latón y cobre", "3 mm"]
      ].map((item, i) => (
        <div
          key={i}
          className="reveal group flex justify-between py-6 border-b border-gray-200 hover:border-black transition duration-300"
        >
          <span className="text-lg group-hover:translate-x-2 transition">
            {item[0]}
          </span>

          <span className="text-gray-500 group-hover:text-black transition">
            {item[1]}
          </span>
        </div>
      ))}

    </div>

  </section>


  {/* GRABADO + BOTÓN */}
  <section className="min-h-screen flex items-center px-6 md:px-20">

    <div className="grid md:grid-cols-2 gap-16 items-center w-full">

      <div className="reveal">
        <video autoPlay muted loop playsInline className="w-full rounded-2xl shadow-xl">
          <source src="/videos/video_grabado_laser1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="reveal">
        <h2 className="text-5xl font-semibold mb-6">
          GRABADO LÁSER
        </h2>

        <p className="text-gray-600 mb-8 text-lg">
          Personalización de alta precisión para piezas industriales, identificación y diseño.
        </p>

        <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition duration-300">
          Solicitar cotización
        </button>
      </div>

    </div>

  </section>


  {/* ANIMACIONES */}
  <style jsx>{`
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.8s ease;
    }

    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
  `}</style>

</main>

);
}
