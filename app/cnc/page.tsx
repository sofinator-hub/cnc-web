"use client";

import { motion } from "framer-motion";

export default function CNCPage() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="min-h-[80vh] flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
            CNC LASER SYSTEM
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Corte CNC Láser
          </h1>

          <p className="text-gray-600 text-lg">
            Tecnología de corte láser de fibra para fabricación industrial y producción personalizada.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-32 relative overflow-hidden">

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

          <h2 className="text-3xl font-bold mb-6">
            Proceso de corte en acción
          </h2>

          <p className="text-gray-600 mb-12">
            Corte de alta precisión con maquinaria industrial.
          </p>

          <motion.div
            className="relative mx-auto w-full max-w-[700px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* GLOW */}
            <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-2xl" />

            {/* VIDEO */}
            <video
              src="/videos/video_corte_laser1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="relative z-10 w-full rounded-xl object-cover"
            />

            {/* BORDE */}
            <div className="absolute inset-0 border border-black/10 rounded-xl pointer-events-none" />
          </motion.div>

        </div>
      </section>

      {/* CAPACIDADES */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">
          Capacidades del sistema
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-gray-600">

          <div>
            <h3 className="font-semibold mb-2">Alta precisión</h3>
            <p>Cortes exactos con tolerancias estrictas.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Diseños complejos</h3>
            <p>Ideal para geometrías avanzadas y piezas industriales.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Producción flexible</h3>
            <p>Desde prototipos hasta producción en serie.</p>
          </div>

        </div>
      </section>

      {/* MATERIALES */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold mb-12">
            Materiales compatibles
          </h2>

          <div className="flex flex-wrap gap-4 text-sm text-gray-700">

            <span className="px-4 py-2 bg-black border rounded-full">Acero al carbon</span>
            <span className="px-4 py-2 bg-black border rounded-full">Acero inoxidable</span>
            <span className="px-4 py-2 bg-black border rounded-full">Aluminio</span>
            <span className="px-4 py-2 bg-black border rounded-full">latón y cobre</span>
            <span className="px-4 py-2 bg-black border rounded-full">MDF</span>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">

        <h2 className="text-3xl font-bold mb-6">
          ¿Tienes un proyecto en mente?
        </h2>

        <p className="text-gray-600 mb-8">
          Cotiza con nosotros y lleva tu idea a producción.
        </p>

        <a
          href="https://wa.me/5215562045546"
          target="_blank"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold"
        >
          Cotizar ahora
        </a>

      </section>

    </main>
  );
}