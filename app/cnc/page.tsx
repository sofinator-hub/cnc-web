"use client";

import { motion } from "framer-motion";

export default function CNCPage() {
  const materials = [
    { material: "Acero inoxidable", espesor: "—" },
    { material: "Acero al carbón", espesor: "—" },
    { material: "Aluminio", espesor: "—" },
    { material: "Latón", espesor: "—" },
    { material: "Cobre", espesor: "—" },
  ];

  return (
    <main className="bg-[#0a0a0a] text-white">

      {/* HERO */}
      <section className="py-32 text-center px-6">
        <p className="text-xs tracking-[0.3em] text-gray-400 mb-4">
          CNC LASER SYSTEM
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Servicio de Corte Láser y Fibra
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto">
          Maquila de corte láser en acero inoxidable con tecnología de alta precisión.
        </p>
      </section>

      {/* VIDEO PRINCIPAL */}
      <section className="py-20 px-6 text-center">
        <p className="text-gray-400 max-w-4xl mx-auto mb-12">
          Puedes hacer todo lo que sea posible con nuestro sistema de corte láser de fibra:
          joyas, gabinetes electrónicos, decoraciones, robots, letreros, muebles y más.
        </p>

        <motion.div
          className="relative max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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

      {/* CORTE INDUSTRIAL */}
      <section className="py-32 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Corte Láser de Piezas Industriales
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          La tecnología de corte por láser permite trabajar acero al carbón,
          aluminio y acero inoxidable con cortes limpios, alta precisión
          y tolerancias estrictas.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.img
            src="/foto_acero1.jpeg"
            alt="corte acero 1"
            className="rounded-xl object-cover w-full h-[300px]"
            whileHover={{ scale: 1.05 }}
          />

          <motion.img
            src="/foto_acero2.jpeg"
            alt="corte acero 2"
            className="rounded-xl object-cover w-full h-[300px]"
            whileHover={{ scale: 1.05 }}
          />

        </div>
      </section>

      {/* TABLA */}
      <section className="py-32 px-6 bg-[#111]">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-12 text-center">
            Materiales y espesores
          </h2>

          <motion.div
            className="overflow-hidden rounded-xl border border-gray-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <table className="w-full text-left">

              <thead className="bg-[#1a1a1a] text-gray-300">
                <tr>
                  <th className="p-4">Material</th>
                  <th className="p-4">Espesor máximo</th>
                </tr>
              </thead>

              <tbody className="text-gray-400">
                {materials.map((row) => (
                  <tr key={row.material} className="border-t border-gray-700">
                    <td className="p-4">{row.material}</td>
                    <td className="p-4">{row.espesor}</td>
                  </tr>
                ))}
              </tbody>

            </table>
          </motion.div>

        </div>
      </section>

      {/* GRABADO */}
      <section className="py-32 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Grabado Láser
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <motion.div
            className="col-span-2 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
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
          </motion.div>

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