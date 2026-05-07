"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

export default function OficinaModernaPage() {
  return (
    <>
      <MobileMenu />

      {/* FONDO */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/fondo_blanco.jpg"
          alt="Fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <main className="relative z-10 text-gray-900">

        {/* ================= HERO ================= */}
        <section className="relative h-[85vh] md:h-screen overflow-hidden flex items-end">

          <Image
            src="/celosia1.jpg"
            alt="Celosía Oficina Moderna"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Glow */}
          <div className="absolute top-10 left-5 w-40 h-40 md:w-80 md:h-80 bg-blue-600 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-5 w-40 h-40 md:w-80 md:h-80 bg-cyan-400 rounded-full blur-3xl opacity-20" />

          {/* CONTENIDO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 w-full px-6 md:px-20 pb-16 md:pb-24"
          >

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 md:p-10 max-w-3xl">

              <p className="uppercase tracking-[0.3em] text-sm text-gray-200 mb-4">
                Oficinas / Interior moderno
              </p>

              <h1 className="text-4xl md:text-7xl font-semibold text-white mb-6">
                Celosía Oficina Moderna
              </h1>

              <p className="text-gray-200 text-sm md:text-lg leading-relaxed max-w-2xl">
                Diseño contemporáneo fabricado en MDF de 9 mm,
                ideal para dividir espacios interiores manteniendo
                amplitud visual e iluminación natural.
              </p>

            </div>

          </motion.div>
        </section>

        {/* ================= INFORMACIÓN ================= */}
        <section className="px-6 md:px-20 py-20">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

            {/* DESCRIPCIÓN */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-3xl p-8 shadow-lg"
            >

              <h2 className="text-3xl font-semibold mb-8 tracking-[0.08em]">
                SOBRE EL PROYECTO
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed">

                <p>
                  Esta celosía fue desarrollada para interiores corporativos
                  modernos, buscando generar divisiones visuales elegantes sin
                  sacrificar iluminación ni sensación de amplitud.
                </p>

                <p>
                  El patrón geométrico aporta una estética limpia y minimalista,
                  integrándose de manera natural en espacios contemporáneos de oficina.
                </p>

                <p>
                  Gracias al corte CNC de alta precisión, el diseño mantiene
                  acabados uniformes y detalles definidos en cada sección.
                </p>

              </div>

            </motion.div>

            {/* ESPECIFICACIONES */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-3xl p-8 shadow-lg"
            >

              <h2 className="text-3xl font-semibold mb-8 tracking-[0.08em]">
                ESPECIFICACIONES
              </h2>

              <div className="space-y-6">

                <div className="flex justify-between border-b border-gray-300 pb-4">
                  <span className="text-gray-500">Material</span>
                  <span className="font-medium">MDF 9 mm</span>
                </div>

                <div className="flex justify-between border-b border-gray-300 pb-4">
                  <span className="text-gray-500">Color</span>
                  <span className="font-medium">Blanco</span>
                </div>

                <div className="flex justify-between border-b border-gray-300 pb-4">
                  <span className="text-gray-500">Aplicación</span>
                  <span className="font-medium">Interior</span>
                </div>

                <div className="flex justify-between border-b border-gray-300 pb-4">
                  <span className="text-gray-500">Ubicación</span>
                  <span className="font-medium">CDMX</span>
                </div>

                <div className="flex justify-between border-b border-gray-300 pb-4">
                  <span className="text-gray-500">Acabado</span>
                  <span className="font-medium">Pintura blanca mate</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Proceso</span>
                  <span className="font-medium">Corte CNC Láser</span>
                </div>

              </div>

            </motion.div>

          </div>

        </section>

        {/* ================= GALERÍA ================= */}
        <section className="px-6 md:px-20 pb-20">

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
          >

            <img
              src="/celosia1.jpg"
              alt="Detalle Celosía"
              className="w-full h-[300px] md:h-[700px] object-cover hover:scale-105 transition duration-700"
            />

          </motion.div>

        </section>

        {/* ================= BOTONES ================= */}
        <section className="px-6 md:px-20 pb-24">

          <div className="flex flex-wrap gap-4">

            <Link
              href="/celosias"
              className="px-8 py-4 rounded-full bg-white border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition duration-300 shadow-sm"
            >
              ← Volver a proyectos
            </Link>

            <button
              className="px-8 py-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-lg"
            >
              Solicitar cotización
            </button>

          </div>

        </section>

      </main>
    </>
  );
}