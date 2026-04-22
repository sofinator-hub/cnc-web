"use client";

import { motion } from "framer-motion";

export default function CNCPage() {
  return (
    <main className="bg-[#0a0a0a] text-white">

      {/* 🔥 TEXTO 1 */}
      <section className="py-32 px-6 text-center">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          SERVICIO DE CORTE LÁSER Y FIBRA
        </h1>

        <p className="text-gray-400 max-w-4xl mx-auto mb-6">
          Maquila de corte láser en acero inoxidable
        </p>

        <p className="text-gray-400 max-w-4xl mx-auto mb-16">
          Puedes hacer todo lo que sea posible con nuestro sistema de corte láser de fibra: joyas, gabinetes electrónicos, decoraciones, tarjetas de identificación y etiquetas, robots, marcadores, relojes, letreros, letras, marcos, arte, modelos, bolsos, juguetes, artículos para el hogar, iluminación, muebles e incluso productos promocionales personalizados.
        </p>

        <motion.div
          className="relative max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-xl" />

          <video
            src="/videos/video_corte_laser1.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="relative z-10 w-full rounded-xl object-cover"
          />
        </motion.div>

      </section>

      {/* 🔥 TEXTO 2 */}
      <section className="py-32 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 text-center">
          CORTE LÁSER DE PIEZAS INDUSTRIALES
        </h2>

        <p className="text-gray-400 text-center max-w-4xl mx-auto mb-16">
          La tecnología de corte por láser es un proceso excelente para cortar acero al carbón, aleaciones de aluminio y acero inoxidable. El corte por láser de metal proporciona un borde más limpio con una mejor perpendicularidad que otras formas de corte por llama, junto con un corte más pequeño. Los diseños complicados, las tolerancias estrictas y la precisión, son excelentes candidatos para el corte por láser.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <img
            src="/foto_acero1.jpeg"
            alt="acero 1"
            className="rounded-xl object-cover w-full h-[300px]"
          />

          <img
            src="/foto_acero2.jpeg"
            alt="acero 2"
            className="rounded-xl object-cover w-full h-[300px]"
          />

        </div>

      </section>

      {/* 🔥 TABLA */}
      <section className="py-32 px-6 bg-[#111]">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-12 text-center">
            MATERIALES Y ESPESORES
          </h2>

          <motion.div
            className="overflow-hidden rounded-xl border border-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <table className="w-full text-left">

              <thead className="bg-[#1a1a1a] text-gray-300">
                <tr>
                  <th className="p-4">Material</th>
                  <th className="p-4">Calibre máximo</th>
                </tr>
              </thead>

              <tbody className="text-gray-400">

                <tr className="border-t border-gray-700">
                  <td className="p-4">Acero inoxidable</td>
                  <td className="p-4">—</td>
                </tr>

                <tr className="border-t border-gray-700">
                  <td className="p-4">Acero al carbón</td>
                  <td className="p-4">—</td>
                </tr>

                <tr className="border-t border-gray-700">
                  <td className="p-4">Aluminio</td>
                  <td className="p-4">—</td>
                </tr>

                <tr className="border-t border-gray-700">
                  <td className="p-4">Latón</td>
                  <td className="p-4">—</td>
                </tr>

                <tr className="border-t border-gray-700">
                  <td className="p-4">Cobre</td>
                  <td className="p-4">—</td>
                </tr>

              </tbody>

            </table>
          </motion.div>

        </div>
      </section>

      {/* 🔥 TEXTO 4 */}
      <section className="py-32 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 text-center">
          GRABADO LÁSER
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {/* VIDEO */}
          <div className="col-span-2 relative">
            <div className="absolute inset-0 bg-blue-500/10 blur-2xl rounded-xl" />

            <video
              src="/videos/video_grabado_laser1.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="relative z-10 w-full rounded-xl object-cover"
            />
          </div>

          {/* IMÁGENES */}
          <div className="flex flex-col gap-6">

            <img
              src="/foto_grabado1.jpeg"
              alt="grabado 1"
              className="rounded-xl object-cover h-[150px] w-full"
            />

            <img
              src="/foto_grabado2.jpeg"
              alt="grabado 2"
              className="rounded-xl object-cover h-[150px] w-full"
            />

          </div>

        </div>

      </section>

    </main>
  );
}