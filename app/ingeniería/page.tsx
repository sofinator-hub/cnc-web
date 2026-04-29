"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

const sections = {
  electrico: {
    title: "Servicios Eléctricos",
    desc: "Instalaciones eléctricas integrales para procesos industriales.",
    items: [
      "Instalaciones de potencia",
      "Baja tensión",
      "Diagramas unifilares",
      "Mantenimiento eléctrico",
      "Instalación de alimentadores"
    ],
    img: "/electrico.jpg"
  },
  automatizacion: {
    title: "Automatización",
    desc: "Integración de sistemas con PLC y control inteligente.",
    items: [
      "Programación PLC",
      "Integración de maquinaria",
      "HMI y redes industriales",
      "Variadores de frecuencia"
    ],
    img: "/automatizacion.jpg"
  },
  control: {
    title: "Control Eléctrico",
    desc: "Diseño y optimización de sistemas de control industrial.",
    items: [
      "Diseño de tableros",
      "EPLAN / AutoCAD",
      "Mantenimiento de control",
      "Actualización de sistemas"
    ],
    img: "/control.jpg"
  },
  generales: {
    title: "Servicios Generales",
    desc: "Soluciones complementarias para infraestructura industrial.",
    items: [
      "HVAC",
      "UPS",
      "CCTV",
      "Instalaciones eléctricas"
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

        {/* HERO */}
        <section className="min-h-[70vh] flex items-center justify-center bg-gray-100">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-widest">
            INGENIERÍA
          </h1>
        </section>

        {/* SELECTOR */}
        <section className="px-6 md:px-20 py-10 flex flex-wrap gap-4 justify-center">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-5 py-2 rounded-full border ${
                active === key
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {sections[key as keyof typeof sections].title}
            </button>
          ))}
        </section>

        {/* CONTENIDO */}
        <section className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-12 items-center">

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

          <motion.img
            key={data.img}
            src={data.img}
            className="w-full h-[350px] object-cover rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />

        </section>

      </main>
    </>
  );
}