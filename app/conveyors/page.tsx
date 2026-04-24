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

        <div className="relative group">
          <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl rounded-2xl scale-110" />

          <video
            className="relative rounded-2xl shadow-md w-full"
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

</main>

);
}
