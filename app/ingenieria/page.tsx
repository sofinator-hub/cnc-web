"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

const sections = {
  electrico: {
    title: "Servicios Eléctricos",
    desc: "Desarrollo e integración de sistemas eléctricos industriales orientados a seguridad, confiabilidad y eficiencia operativa.",
    capabilities: [
      "Instalaciones de potencia",
      "Sistemas de baja tensión",
      "Diagramas unifilares",
      "Mantenimiento eléctrico",
      "Instalación de alimentadores",
    ],
    applications: [
      "Líneas de producción",
      "Conveyors industriales",
      "Tableros eléctricos",
      "Sistemas de distribución",
    ],
    tech: [
      "AutoCAD Electrical",
      "Protecciones eléctricas",
      "Control industrial",
      "Integración electromecánica",
    ],
    img: "/electrico_color.jpg",
    imgBN: "/electrico.jpg",
  },

  automatizacion: {
    title: "Automatización",
    desc: "Automatización de procesos mediante PLCs, HMIs y sistemas industriales para optimizar producción y control.",
    capabilities: [
      "Programación PLC",
      "Integración de maquinaria",
      "Interfaces HMI",
      "Variadores de frecuencia",
    ],
    applications: [
      "Automatización repetitiva",
      "Sistemas conveyor",
      "Estaciones automatizadas",
      "Procesos industriales",
    ],
    tech: [
      "PLC",
      "HMI",
      "Sensores industriales",
      "Redes industriales",
    ],
    img: "/automatizacion_color.jpg",
    imgBN: "/automatizacion.jpg",
  },

  control: {
    title: "Control Eléctrico",
    desc: "Diseño y desarrollo de sistemas de control orientados a manufactura, automatización y monitoreo industrial.",
    capabilities: [
      "Diseño de tableros",
      "EPLAN / AutoCAD",
      "Actualización de sistemas",
      "Mantenimiento industrial",
    ],
    applications: [
      "Centros de control",
      "Integración eléctrica",
      "Control de motores",
      "Monitoreo industrial",
    ],
    tech: [
      "EPLAN",
      "AutoCAD",
      "PLC",
      "Control eléctrico",
    ],
    img: "/control_color.jpg",
    imgBN: "/control.jpg",
  },

  generales: {
    title: "Servicios Generales",
    desc: "Soluciones integrales para infraestructura industrial y soporte electromecánico.",
    capabilities: [
      "HVAC",
      "UPS",
      "Mantenimiento electromecánico",
      "Soporte técnico",
    ],
    applications: [
      "Infraestructura industrial",
      "Áreas de producción",
      "Centros de carga",
      "Soporte operativo",
    ],
    tech: [
      "HVAC",
      "Sistemas UPS",
      "Mantenimiento industrial",
      "Infraestructura eléctrica",
    ],
    img: "/general_color.jpg",
    imgBN: "/general.jpg",
  },

  proyectos: {
    title: "Gestión de Proyectos",
    desc: "Planeación, supervisión y ejecución de proyectos industriales llave en mano.",
    capabilities: [
      "Supervisión eléctrica",
      "Ingeniería de valor",
      "Ejecución integral",
      "Coordinación técnica",
    ],
    applications: [
      "Proyectos industriales",
      "Integración de sistemas",
      "Expansión de planta",
      "Manufactura",
    ],
    tech: [
      "Planeación industrial",
      "Ingeniería aplicada",
      "Control de procesos",
      "Integración técnica",
    ],
    img: "/proyectos_color.jpg",
    imgBN: "/proyectos.jpg",
  },
};

export default function IngenieriaPage() {
  const [active, setActive] = useState("electrico");

  const data = sections[active as keyof typeof sections];

  return (
    <>
      <MobileMenu />

      {/* FONDO */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/fondo_blanco.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <main className="relative z-10 text-gray-900">

        {/* ================= HERO ================= */}
        <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-4">

          <div className="absolute inset-0">
            <img
              src="/fondo_ingenieria2.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0f172a] blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#0f172a] blur-3xl opacity-30" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-14 max-w-4xl w-full shadow-2xl text-white"
          >
            <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-6">
              Ingeniería Industrial
            </p>

            <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              Soluciones integrales
              <br />
              para manufactura y automatización
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
              Desarrollamos soluciones industriales integrando diseño mecánico,
              automatización, control eléctrico y manufactura para optimizar
              procesos productivos y sistemas industriales.
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


        {/* ================= INTRO ================= */}
        <section className="px-6 md:px-20 pb-10">

          <div className="max-w-5xl mx-auto text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Capacidades técnicas
            </p>

            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Ingeniería aplicada a procesos industriales
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Integramos ingeniería, manufactura y automatización para desarrollar
              soluciones funcionales orientadas a producción, seguridad y optimización
              operativa.
            </p>

          </div>

        </section>


        {/* ================= CONTENIDO ================= */}
        <section className="px-6 md:px-20 py-16 grid md:grid-cols-2 gap-16 items-center">

          {/* INFO */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/70 backdrop-blur-xl border border-black/5 rounded-3xl p-8 shadow-xl"
          >

            <h2 className="text-4xl font-light mb-6">
              {data.title}
            </h2>

            <p className="text-gray-600 mb-10 leading-relaxed">
              {data.desc}
            </p>

            <div className="grid md:grid-cols-3 gap-8">

              {/* CAPACIDADES */}
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
                  Capacidades
                </h3>

                <ul className="space-y-3 text-sm text-gray-700">
                  {data.capabilities.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>

              {/* APLICACIONES */}
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
                  Aplicaciones
                </h3>

                <ul className="space-y-3 text-sm text-gray-700">
                  {data.applications.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>

              {/* TECNOLOGÍAS */}
              <div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
                  Tecnologías
                </h3>

                <ul className="space-y-3 text-sm text-gray-700">
                  {data.tech.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>

            </div>

          </motion.div>


          {/* IMAGEN */}
          <motion.div
            key={data.img}
            className="relative w-full h-[500px] rounded-3xl overflow-hidden group shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >

            <img
              src={data.imgBN}
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:opacity-0 grayscale"
            />

            <img
              src={data.img}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-700"
            />

          </motion.div>

        </section>


        {/* ================= INGENIERÍA + FABRICACIÓN ================= */}
        <section className="px-6 md:px-20 py-28 bg-black text-white">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

            <div>

              <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
                Ingeniería + Manufactura
              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                Del concepto
                <br />
                a la fabricación
              </h2>

              <p className="text-gray-400 leading-relaxed mb-10">
                Desarrollamos proyectos completos desde modelado CAD y diseño
                estructural hasta fabricación CNC, integración y ensamble final.
              </p>

              <div className="grid grid-cols-2 gap-6 text-sm text-gray-300">

                <div>• Diseño CAD</div>
                <div>• Simulación</div>
                <div>• Corte CNC</div>
                <div>• Integración eléctrica</div>
                <div>• Fabricación metálica</div>
                <div>• Ensamble final</div>

              </div>

            </div>

            <div className="relative">
              <img
                src="/fondo_ingenieria1.jpg"
                className="rounded-3xl object-cover h-[500px] w-full"
              />
            </div>

          </div>

        </section>


        {/* ================= PROCESO ================= */}
        <section className="px-6 md:px-20 py-28 bg-[#0a0a0a] text-white">

          <div className="max-w-6xl mx-auto">

            <div className="mb-20 text-center">

              <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
                Proceso
              </p>

              <h2 className="text-4xl md:text-5xl font-light">
                Desarrollo estructurado
              </h2>

            </div>

            <div className="grid md:grid-cols-5 gap-8">

              {[
                "Levantamiento",
                "Diseño CAD",
                "Simulación",
                "Fabricación",
                "Integración",
              ].map((step, index) => (

                <div
                  key={index}
                  className="border border-white/10 rounded-3xl p-6 bg-white/[0.03]"
                >

                  <div className="text-5xl text-white/10 mb-6">
                    0{index + 1}
                  </div>

                  <h3 className="text-lg mb-4">
                    {step}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    Desarrollo técnico orientado a manufactura,
                    funcionalidad y optimización industrial.
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= TECNOLOGÍAS ================= */}
        <section className="px-6 md:px-20 py-24 bg-black text-white">

          <div className="max-w-6xl mx-auto text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Tecnologías
            </p>

            <h2 className="text-4xl font-light mb-16">
              Herramientas y sistemas
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {[
                "SolidWorks",
                "AutoCAD",
                "PLC",
                "CNC",
                "Sensores",
                "Neumática",
                "Control eléctrico",
                "Automatización",
              ].map((tech, index) => (

                <div
                  key={index}
                  className="border border-white/10 rounded-2xl py-6 bg-white/[0.03]"
                >
                  <p className="text-gray-300">
                    {tech}
                  </p>
                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= INDUSTRIAS ================= */}
        <section className="px-6 md:px-20 py-24 bg-[#0a0a0a] text-white">

          <div className="max-w-6xl mx-auto text-center">

            <h2 className="text-4xl font-light mb-14">
              Industrias que atendemos
            </h2>

            <div className="grid md:grid-cols-5 gap-6 text-gray-300">

              {[
                "Manufactura",
                "Automotriz",
                "Logística",
                "Alimentos",
                "Metalmecánica",
              ].map((item, index) => (

                <div
                  key={index}
                  className="border border-white/10 rounded-2xl py-8 bg-white/[0.03]"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="px-6 md:px-20 py-28 text-center bg-black text-white">

          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            ¿Necesitas desarrollar
            <br />
            una solución industrial?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Nuestro equipo puede ayudarte desde diseño conceptual
            hasta fabricación e integración final.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20un%20proyecto%20de%20ingeniería",
                "_blank"
              )
            }
            className="bg-white text-black px-8 py-4 rounded-2xl hover:bg-gray-200 transition"
          >
            Cotizar proyecto
          </button>

        </section>

      </main>
    </>
  );
}
