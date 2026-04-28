"use client";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

export default function UltrasonidoPage() {
  return (
    <>
      <MobileMenu />

      <main className="min-h-screen bg-[#0f172a] text-white">

        {/* ================= HERO ================= */}
        <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden px-4">

          {/* Fondo */}
          <div className="absolute inset-0">
            <img
              src="/ultrasonido.jpg"
              alt="Ultrasonido"
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          {/* Glow */}
          <div className="absolute top-10 left-5 w-48 h-48 bg-blue-500 blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-5 w-48 h-48 bg-cyan-400 blur-3xl opacity-20" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-14 max-w-3xl w-full shadow-xl"
          >
            <h1 className="text-2xl md:text-5xl font-semibold mb-6 tracking-[0.2em]">
              SOLDADURA ULTRASÓNICA
            </h1>

            <p className="text-white/80">
              Tecnología avanzada que permite uniones limpias, rápidas y de alta precisión
              sin necesidad de calor externo.
            </p>
          </motion.div>
        </section>


        {/* ================= EXPLICACIÓN ================= */}
        <section className="px-6 md:px-20 py-24 bg-[#020617]">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-2xl md:text-4xl font-semibold mb-6">
                ¿Qué es la soldadura por ultrasonido?
              </h2>

              <p className="text-white/70 mb-4">
                Es un proceso que utiliza vibraciones de alta frecuencia para unir materiales,
                generando calor por fricción sin necesidad de fuentes térmicas externas.
              </p>

              <p className="text-white/70">
                Ideal para aplicaciones donde la precisión, limpieza y velocidad son fundamentales.
              </p>
            </div>

            <img
              src="/ultra_detalle.jpg"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
            />

          </div>
        </section>


        {/* ================= BENEFICIOS ================= */}
        <section className="px-6 md:px-20 py-24">

          <h2 className="text-2xl md:text-4xl font-semibold mb-12 text-center">
            Ventajas del proceso
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div className="p-6 rounded-2xl bg-white/5">
              <h3 className="font-semibold mb-2">Alta precisión</h3>
              <p className="text-white/70 text-sm">
                Permite uniones exactas sin afectar el material.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5">
              <h3 className="font-semibold mb-2">Proceso limpio</h3>
              <p className="text-white/70 text-sm">
                No genera residuos ni contaminantes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5">
              <h3 className="font-semibold mb-2">Alta velocidad</h3>
              <p className="text-white/70 text-sm">
                Ideal para producción eficiente.
              </p>
            </div>

          </div>
        </section>


        {/* ================= APLICACIONES ================= */}
        <section className="px-6 md:px-20 py-24 bg-[#020617]">

          <h2 className="text-2xl md:text-4xl font-semibold mb-12">
            Aplicaciones
          </h2>

          <ul className="text-white/70 space-y-3">
            <li>• Industria automotriz</li>
            <li>• Electrónica</li>
            <li>• Dispositivos médicos</li>
            <li>• Plásticos técnicos</li>
          </ul>

        </section>


        {/* ================= CTA ================= */}
        <section className="px-6 md:px-20 py-24 text-center">

          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            ¿Tienes un proyecto?
          </h2>

          <p className="text-white/70 mb-6">
            Contáctanos para desarrollar soluciones con soldadura de alta precisión.
          </p>

          <button className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Cotizar ahora
          </button>

        </section>

      </main>
    </>
  );
}