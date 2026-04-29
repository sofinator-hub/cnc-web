"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

const sections = {
  electrico: {
    title: "Servicios Eléctricos",
    desc: "Desarrollo y ejecución de instalaciones eléctricas, integrando eficiencia, seguridad y confiabilidad.",
    items: [
      "Instalaciones de potencia",
      "Sistemas de baja tensión",
      "Diagramas unifilares",
      "Mantenimiento eléctrico",
      "Instalación de alimentadores",
      "Sistemas UPS, CCTV y voz/datos"
    ],
    img: "/electrico.jpg"
  },
  automatizacion: {
    title: "Automatización",
    desc: "Integración de sistemas mediante PLCs, HMI y redes industriales.",
    items: [
      "Programación PLC",
      "Integración de maquinaria",
      "Interfaces HMI",
      "Variadores de frecuencia",
      "Optimización de procesos"
    ],
    img: "/automatizacion.jpg"
  },
  control: {
    title: "Control Eléctrico",
    desc: "Diseño y desarrollo de sistemas de control industrial.",
    items: [
      "Diseño de tableros",
      "EPLAN / AutoCAD",
      "Mantenimiento",
      "Actualización de sistemas",
      "Arrancadores para motor"
    ],
    img: "/control.jpg"
  },
  generales: {
    title: "Servicios Generales",
    desc: "Soluciones integrales para infraestructura industrial.",
    items: [
      "HVAC",
      "UPS",
      "Mantenimiento electromecánico",
      
      "Instalaciones industriales"
    ],
    img: "/general.jpg"
  },
  proyectos: {
    title: "Gestión de Proyectos",
    desc: "Desarrollo de proyectos llave en mano.",
    items: [

      "Supervisión eléctrica",
      "Ingeniería de valor",
      "Ejecución integral"
    ],
    img: "/proyectos.jpg"
  }
};

export default function IngenieriaPage() {
  const [active, setActive] = useState("electrico");

  const data = sections[active as keyof typeof sections];

  return (
    <>
      <MobileMenu />

      <main className="min-h-screen bg-white text-gray-900">

        {/* ================= HERO ================= */}
        <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden px-4">

          {/* Fondo */}
          <div className="absolute inset-0">
            <img
              src="/ingenieria.jpg"
              className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />

          {/* Glow */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400 blur-3xl opacity-20 animate-pulse" />

          {/* Contenido */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl md:rounded-3xl p-6 md:p-14 max-w-3xl w-full shadow-xl"
          >
            <h1 className="text-3xl md:text-5xl font-semibold mb-6 tracking-[0.2em] text-white">
              INGENIERÍA
            </h1>

            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Diseño, automatización y control eléctrico para soluciones industriales de alto rendimiento.
            </p>
          </motion.div>
        </section>


        {/* ================= SELECTOR ================= */}
        <section className="px-6 md:px-20 py-12 flex flex-wrap gap-4 justify-center">

          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-5 py-2 rounded-full border transition ${
                active === key
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {sections[key as keyof typeof sections].title}
            </button>
          ))}

        </section>


        {/* ================= CONTENIDO ================= */}
        <section className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXTO */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-semibold mb-4">
              {data.title}
            </h2>

            <p className="text-gray-600 mb-6">
              {data.desc}
            </p>

            <ul className="space-y-2 text-sm text-gray-700">
              {data.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </motion.div>


          {/* IMAGEN CON EFECTO */}
          <motion.div
            key={data.img}
            className="relative w-full h-[350px] rounded-2xl overflow-hidden group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              src={data.img}
              className="
                w-full h-full object-cover
                grayscale contrast-125 brightness-90
                group-hover:grayscale-0 group-hover:brightness-100
                transition duration-700 ease-in-out
                scale-105 group-hover:scale-110
              "
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500" />
          </motion.div>

        </section>


        {/* ================= CTA ================= */}
        <section className="px-6 md:px-20 py-24 text-center">

          <h2 className="text-2xl md:text-4xl font-semibold mb-6">
            ¿Necesitas una solución de ingeniería?
          </h2>

          <p className="text-gray-600 mb-6">
            Contáctanos para desarrollar tu proyecto con tecnología y precisión.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20un%20proyecto%20de%20ingeniería",
                "_blank"
              )
            }
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Cotizar ahora
          </button>

        </section>

      </main>
    </>
  );
}