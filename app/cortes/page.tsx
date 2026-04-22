"use client";

import { motion } from "framer-motion";

export default function CNCPage() {
  return (
    <main className="bg-white text-black">

      {/* 🔥 HERO */}
      <section className="min-h-[80vh] flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
            CNC LASER SYSTEM
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Corte CNC Láser
          </h1>

          <p className="text-gray-600 text-lg">
            Precisión industrial con tecnología avanzada de corte.
          </p>
        </div>
      </section>

      {/* 🔥 VIDEO SCI-FI */}
      <section className="py-32 relative overflow-hidden">

        {/* GRID CNC */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

          <h2 className="text-3xl font-bold mb-6">
            Proceso de Corte
          </h2>

          <p className="text-gray-600 mb-12">
            Tecnología CNC en acción con precisión milimétrica.
          </p>

          {/* 🔥 CONTENEDOR PRO */}
          <motion.div
            className="relative mx-auto w-full max-w-[700px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* 🔵 GLOW */}
            <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-2xl" />

            {/* VIDEO */}
            <video
              src="/videos/carro_matei.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="relative z-10 w-full rounded-xl object-cover"
              style={{
                WebkitMaskImage: "radial-gradient(circle, white 70%, transparent 100%)",
                maskImage: "radial-gradient(circle, white 70%, transparent 100%)",
              }}
            />

            {/* HUD LINEAS */}
            <div className="absolute inset-0 border border-black/10 rounded-xl pointer-events-none" />

          </motion.div>

        </div>
      </section>

    </main>
  );
}