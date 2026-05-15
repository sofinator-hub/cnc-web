"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

const sections = {
  electrico: {
    title: "Servicios Eléctricos",
    number: "01",
    desc: "Desarrollo e integración de sistemas eléctricos industriales orientados a seguridad, confiabilidad y eficiencia operativa.",
    capabilities: [
       "Instalaciones de potencia",
       "Sistemas de baja tensión",
       "Diagramas unifilares",
       "Mantenimiento eléctrico",
    ],
    applications: [
      "Líneas de producción",
      "Conveyors industriales",
      "Tableros eléctricos",
      "Sistemas de distribución",
    ],
    tech: [
       "AutoCAD Electrical",
       "Control industrial",
       "Protecciones eléctricas",
    ],
    img: "/electrico_color.jpg",
    imgBN: "/electrico.jpg",
  },

  automatizacion: {
    title: "Automatización",
    number: "02",
    desc: "Automatización de procesos mediante PLCs, HMIs y sistemas industriales.",
    capabilities: [
      "Programación PLC",
      "Integración de maquinaria",
      "Interfaces HMI",
      "Variadores de frecuencia",
    ],
    applications: [
       "Procesos industriales",
       "Sistemas conveyor",
       "Automatización repetitiva",
    ],
    tech: [
       "PLC",
       "HMI",
       "Sensores industriales",
    ],
    img: "/automatizacion_color.jpg",
    imgBN: "/automatizacion.jpg",
  },

  control: {
    title: "Control Eléctrico",
    number: "03",
    desc: "Diseño y desarrollo de sistemas de control industrial.",
    capabilities: [
      "Diseño de tableros",
      "EPLAN / AutoCAD",
      "Control de motores",
    ],
     applications: [
      "Integración eléctrica",
      "Centros de control",
      "Monitoreo industrial",
    ],
    tech: [
       "PLC",
       "EPLAN",
       "Control eléctrico",
    ],
    img: "/control_color.jpg",
    imgBN: "/control.jpg",
  },

  generales: {
    title: "Servicios Generales",
    number: "04",
    desc: "Soluciones integrales para infraestructura industrial.",
    capabilities: [
       "HVAC",
       "UPS",
       "Mantenimiento electromecánico",
    ],
    applications: [
       "Infraestructura industrial",
       "Centros de carga",
       "Soporte operativo",
    ],
    tech: [
      "HVAC",
      "UPS",
      "Infraestructura eléctrica",
    ],
    img: "/general_color.jpg",
    imgBN: "/general.jpg",
  },

  proyectos: {
    title: "Gestión de Proyectos",
    number: "05",
    desc: "Planeación, supervisión y ejecución de proyectos industriales.",
    capabilities: [
       "Supervisión eléctrica",
       "Ingeniería de valor",
       "Coordinación técnica",
    ],
    applications: [
      "Integración industrial",
      "Expansión de planta",
      "Manufactura",
    ],
    tech: [
       "Planeación industrial",
       "Ingeniería aplicada",
       "Control de procesos",
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
          alt="Fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/75" />
      </div>

      <main className="relative z-10 text-gray-900 overflow-x-hidden">

        {/* ================= HERO ================= */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">

          <div className="absolute inset-0">
            <img
              src="/hero_ingenieria.jpg"
              alt="Ingeniería industrial"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/65" />

          {/* GRID */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:80px_80px]" />
          </div>

          {/* NUMERO */}
          <div className="absolute text-[120px] md:text-[420px] font-bold text-white/5">
            01
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-5xl text-center text-white"
          >

            <h1 className="text-4xl md:text-7xl font-light leading-tight mb-8">
              Diseño, automatización
              <br />
              y manufactura industrial
            </h1>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              Desarrollamos soluciones industriales integrando ingeniería,
              automatización, manufactura y control eléctrico para optimizar
              procesos productivos y sistemas industriales.
            </p>

            {/* MÉTRICAS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

              {[
                ["+25", "Proyectos"],
                ["+10", "Sistemas integrados"],
                ["24/7", "Soporte técnico"],
                ["5", "Industrias"],
              ].map((item, i) => (

                <div
                  key={i}
                  className="
                    backdrop-blur-xl
                    bg-white/10
                    border border-white/10
                    rounded-2xl
                    p-4 md:p-6
                  "
                >
                  <h3 className="text-2xl md:text-3xl font-light mb-2">
                    {item[0]}
                  </h3>

                  <p className="text-sm text-gray-300">
                    {item[1]}
                  </p>
                </div>

              ))}

            </div>

          </motion.div>

        </section>


        {/* ================= SERVICIOS ================= */}
        <section className="px-6 md:px-20 py-20 md:py-28">

          <div className="max-w-7xl mx-auto grid md:grid-cols-[320px_1fr] gap-8 md:gap-12">

            {/* MENU */}
            <div className="space-y-4">

              {Object.keys(sections).map((key) => {

                const item = sections[key as keyof typeof sections];

                return (

                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`
                      w-full
                      text-left
                      rounded-3xl
                      p-4 md:p-6
                      border
                      transition-all
                      duration-300

                      ${active === key
                        ? "bg-black text-white border-black"
                        : "bg-white/70 border-black/5 hover:bg-white"}
                    `}
                  >

                    <div className="flex items-center justify-between mb-4">

                      <span className="text-sm opacity-60">
                        {item.number}
                      </span>

                      <div className={`w-3 h-3 rounded-full ${
                        active === key
                          ? "bg-white"
                          : "bg-black/20"
                      }`} />

                    </div>

                    <h3 className="text-lg md:text-xl font-medium">
                      {item.title}
                    </h3>

                  </button>

                );

              })}

            </div>


            {/* PANEL */}
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/70 backdrop-blur-xl border border-black/5 rounded-[40px] overflow-hidden shadow-2xl"
            >

              {/* IMAGEN */}
              <div className="relative h-[260px] md:h-[400px] overflow-hidden group">

                <img
                  src={data.imgBN}
                  alt={data.title}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:opacity-0 grayscale"
                />

                <img
                  src={data.img}
                  alt={data.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 text-white">

                  <p className="text-xs md:text-sm tracking-[0.3em] uppercase opacity-70 mb-3">
                    Servicio especializado
                  </p>

                  <h2 className="text-2xl md:text-4xl font-light">
                    {data.title}
                  </h2>

                </div>

              </div>

              {/* INFO */}
              <div className="p-6 md:p-12">

                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 md:mb-12 max-w-3xl">
                  {data.desc}
                </p>

                <div className="grid md:grid-cols-3 gap-8 md:gap-10">

                  {[
                    ["Capacidades", data.capabilities],
                    ["Aplicaciones", data.applications],
                    ["Tecnologías", data.tech],
                  ].map(([title, items], i) => (

                    <div key={i}>

                      <h3 className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-6">
                        {title}
                      </h3>

                      <div className="space-y-4">

                        {(items as string[]).map((item, j) => (

                          <div
                            key={j}
                            className="bg-black/[0.03] rounded-2xl p-4"
                          >
                            {item}
                          </div>

                        ))}

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

          </div>

         </section>
      </main>
    </>
  );
} 