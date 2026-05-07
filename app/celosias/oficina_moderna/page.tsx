"use client";

import Image from "next/image";
import Link from "next/link";

export default function OficinaModernaPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src="/images/celosias/celosia1.jpg"
          alt="Celosía Oficina Moderna"
          fill
          className="object-cover brightness-50"
          priority
        />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">

              <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-4">
                Proyecto Interior
              </p>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Celosía Oficina Moderna
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                Diseño contemporáneo para espacios corporativos,
                combinando privacidad visual con iluminación natural.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* INFORMACIÓN */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-14">

          {/* DESCRIPCIÓN */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Sobre el proyecto
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Esta celosía fue diseñada para interiores modernos de oficina,
              permitiendo dividir espacios sin perder amplitud visual ni entrada
              de luz. Su acabado blanco aporta una estética minimalista y elegante,
              ideal para ambientes corporativos contemporáneos.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Fabricada mediante corte CNC de alta precisión sobre MDF de 9 mm,
              garantizando limpieza en cortes y excelente acabado visual.
            </p>
          </div>

          {/* ESPECIFICACIONES */}
          <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">

            <h2 className="text-3xl font-semibold mb-8">
              Especificaciones
            </h2>

            <div className="space-y-6">

              <div className="flex justify-between border-b border-zinc-800 pb-4">
                <span className="text-gray-400">Material</span>
                <span>MDF 9 mm</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-4">
                <span className="text-gray-400">Color</span>
                <span>Blanco</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-4">
                <span className="text-gray-400">Aplicación</span>
                <span>Interior</span>
              </div>

              <div className="flex justify-between border-b border-zinc-800 pb-4">
                <span className="text-gray-400">Estilo</span>
                <span>Moderno</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-400">Proceso</span>
                <span>Corte CNC Láser</span>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* GALERÍA EXTRA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
          <Image
            src="/images/celosias/celosia1.jpg"
            alt="Detalle celosía"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

      </section>

      {/* BOTÓN */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="flex flex-wrap gap-4">

          <Link
            href="/celosias"
            className="px-8 py-4 rounded-full border border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Volver a proyectos
          </Link>

          <button className="px-8 py-4 rounded-full bg-white text-black hover:opacity-80 transition-all duration-300">
            Solicitar cotización
          </button>

        </div>

      </section>

    </main>
  );
}