"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

const sections = {
  electrico: {
    title: "Servicios Eléctricos",
    desc: "Desarrollo y ejecución de instalaciones eléctricas, integrando eficiencia, seguridad y confiabilidad para procesos industriales.",
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
    desc: "Integración de sistemas mediante PLCs, HMI y redes industriales para optimizar procesos productivos.",
    items: [
      "Programación PLC Allen Bradley",
      "Integración de maquinaria",
      "Interfaces HMI",
      "Variadores de frecuencia",
      "Optimización de sistemas automatizados"
    ],
    img: "/automatizacion.jpg"
  },
  control: {
    title: "Control Eléctrico",
    desc: "Diseño y desarrollo de sistemas de control para manufactura con herramientas de ingeniería avanzada.",
    items: [
      "Diseño de tableros",
      "EPLAN / AutoCAD / SolidWorks",
      "Mantenimiento de tableros",
      "Actualización de sistemas",
      "Arrancadores para motor"
    ],
    img: "/control.jpg"
  },
  generales: {
    title: "Servicios Generales",
    desc: "Soluciones integrales para infraestructura eléctrica y mantenimiento industrial.",
    items: [
      "HVAC",
      "Instalación UPS",
      "Mantenimiento electromecánico",
      "Servicios técnicos especializados",
      "Instalaciones industriales"
    ],
    img: "/general.jpg"
  },
  proyectos: {
    title: "Gestión de Proyectos",
    desc: "Desarrollo de proyectos llave en mano con enfoque en eficiencia, seguridad y cumplimiento.",
    items: [
      "Proyectos llave en mano",
      "Supervisión eléctrica",
      "Ingeniería de valor",
      "Ejecución integral de proyectos"
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
        <section className="min-h-[75vh] flex items-center justify-center relative overflow-hidden px-4">

          {/* fondo */}
          <div className="absolute inset-0">
            <img
              src="/ingenieria.jpg"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          {/* glow */}
          <div className="absolute top-10 left-5 w-48 h-48 bg-blue-600 blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-5 w-48 h-48 bg-cyan-400 blur-3xl opacity-20" />

          {/* card estilo tus otras páginas */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 backdrop-blur-xl bg-white/70 border border-white/40 rounded-2xl md:rounded-3xl p-6 md:p-14 max-w-3xl w-full shadow-xl"
          >
            <h1 className="text-2xl md:text-5xl font-semibold mb-6 tracking-[0.2em] text-gray-800">
              INGENIERÍA
            </h1>

            <p className="text-gray-600">
              Soluciones integrales en diseño, automatización y control eléctrico para procesos industriales.
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


          {/* IMAGEN */}
          <motion.div
            key={data.img}
            className="relative w-full h-[350px] rounded-2xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <img
              src={data.img}
              className="w-full h-full object-cover"
            />

            {/* overlay para integrar estilo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
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