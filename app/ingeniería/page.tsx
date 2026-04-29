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
      "Instalación de alimentadores"
    ],
    img: "/electrico_color.jpg",
    imgBN: "/electrico.jpg"
  },
  automatizacion: {
    title: "Automatización",
    desc: "Integración de sistemas mediante PLCs, HMI y redes industriales.",
    items: [
      "Programación PLC",
      "Integración de maquinaria",
      "Interfaces HMI",
      "Variadores de frecuencia"
    ],
    img: "/automatizacion_color.jpg",
    imgBN: "/automatizacion.jpg"
  },
  control: {
    title: "Control Eléctrico",
    desc: "Diseño y desarrollo de sistemas de control industrial.",
    items: [
      "Diseño de tableros",
      "EPLAN / AutoCAD",
      "Mantenimiento",
      "Actualización de sistemas"
    ],
    img: "/control_color.jpg",
    imgBN: "/control.jpg"
  },
  generales: {
    title: "Servicios Generales",
    desc: "Soluciones integrales para infraestructura industrial.",
    items: [
      "HVAC",
      "UPS",
      "Mantenimiento electromecánico"
    ],
    img: "/general_color.jpg",
    imgBN: "/general.jpg"
  },
  proyectos: {
    title: "Gestión de Proyectos",
    desc: "Desarrollo de proyectos llave en mano.",
    items: [

      "Supervisión eléctrica",
      "Ingeniería de valor",
      "Ejecución integral"
    ],
    img: "/proyectos_color.jpg",
    imgBN: "/proyectos.jpg"
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

          {/* Fondo estilo tus otras páginas */}
          <div className="absolute inset-0">
            <img
              src="/fondo_ingenieria.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay elegante */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Glow AZUL MARINO */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0f172a] blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#0f172a] blur-3xl opacity-30" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 backdrop-blur-xl bg-white/70 border border-white/40 rounded-2xl md:rounded-3xl p-6 md:p-14 max-w-3xl w-full shadow-xl"
          >
            <h1 className="text-3xl md:text-5xl font-semibold mb-6 tracking-[0.2em] text-gray-800">
              INGENIERÍA
            </h1>

            <p className="text-gray-600">
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


          {/* ================= IMAGEN DOBLE (EL EFECTO REAL 🔥) ================= */}
          <motion.div
            key={data.img}
            className="relative w-full h-[350px] rounded-2xl overflow-hidden group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            {/* Imagen blanco y negro */}
            <img
              src={data.imgBN}
              className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:opacity-0"
            />

            {/* Imagen color */}
            <img
              src={data.img}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-500"
            />
            
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
                "https://wa.me/521XXXXXXXXXX?text=Hola,%20quiero%20cotizar%20un%20proyecto%20de%20ingeniería",
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