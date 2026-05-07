"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

import {
  MapPin,
  PencilRuler,
  Layers
} from "lucide-react";

export default function TerrazaPremiumPage() {
  return (
    <>
      <MobileMenu />

      {/* ================= FONDO ================= */}
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
            src="/celosia3.jpg"
            alt="Celosía Terraza Premium"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

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
                Residencial / Terraza moderna
              </p>

              <h1 className="text-4xl md:text-7xl font-semibold text-white mb-6">
                Terraza Premium
              </h1>

              <p className="text-gray-200 text-sm md:text-lg leading-relaxed max-w-2xl">
                Diseño decorativo y funcional para terrazas contemporáneas,
                integrando privacidad, iluminación natural y estética moderna.
              </p>

            </div>

          </motion.div>
        </section>

        {/* ================= INFO GENERAL ================= */}
        <section className="px-6 md:px-20 py-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* TEXTO */}
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
                  Esta celosía fue diseñada para terrazas y espacios
                  residenciales modernos, creando divisiones visuales
                  elegantes sin bloquear ventilación ni iluminación natural.
                </p>

                <p>
                  El patrón decorativo aporta un equilibrio entre privacidad
                  y apertura visual, integrándose de manera natural en
                  ambientes contemporáneos.
                </p>

                <p>
                  Fabricada mediante corte CNC de alta precisión para
                  lograr acabados limpios, resistentes y visualmente sofisticados.
                </p>

              </div>

            </motion.div>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* UBICACIÓN */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl p-6 shadow-lg hover:-translate-y-1 transition duration-300"
              >

                <div className="mb-4">
                  <MapPin
                    size={38}
                    className="text-blue-600"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  Ubicación
                </h3>

                <p className="text-gray-600">
                  Ciudad de México
                </p>

              </motion.div>

              {/* DISEÑO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl p-6 shadow-lg hover:-translate-y-1 transition duration-300"
              >

                <div className="mb-4">
                  <PencilRuler
                    size={38}
                    className="text-blue-600"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  Diseño
                </h3>

                <p className="text-gray-600">
                  MATEI
                </p>

              </motion.div>

              {/* MATERIAL */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl p-6 shadow-lg col-span-1 sm:col-span-2"
              >

                <div className="mb-4">
                  <Layers
                    size={38}
                    className="text-blue-600"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="text-xl font-semibold mb-6">
                  Material
                </h3>

                <div className="flex flex-col md:flex-row items-center gap-6">

                  {/* IMAGEN MATERIAL */}
                  <div className="relative w-full md:w-52 h-40 rounded-2xl overflow-hidden">

                    <Image
                      src="/acero_pintado.jpg"
                      alt="Material terraza"
                      fill
                      className="object-cover"
                    />

                  </div>

                  {/* INFO */}
                  <div>

                    <div className="flex items-center gap-3 mb-4">

                      <div className="w-5 h-5 rounded-full bg-amber-700 border border-amber-900" />

                      <span className="font-medium text-lg">
                        Acero al carbon con pintura
                      </span>

                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      Material resistente utilizado en aplicaciones
                      exteriores gracias a su durabilidad, precisión
                      en fabricación y excelente comportamiento estructural.
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </section>

        {/* ================= BRANDING ================= */}
        <section className="px-6 md:px-20 pb-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl p-10 shadow-lg flex flex-col items-center justify-center text-center"
          >

            {/* LOGO */}
            <div className="relative w-40 h-40 mb-6">

              <Image
                src="/logo_matei.jpg"
                alt="Matei Logo"
                fill
                className="object-contain"
              />

            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Proyecto desarrollado por MATEI
            </h3>

            <p className="text-gray-600 max-w-2xl leading-relaxed">
              Diseño y fabricación de soluciones arquitectónicas
              mediante tecnología CNC de alta precisión para
              proyectos residenciales modernos.
            </p>

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