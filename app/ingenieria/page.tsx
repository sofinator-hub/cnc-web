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
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/75" />
      </div>

      <main className="relative z-10 text-gray-900">

        {/* ================= HERO ================= */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">

          <div className="absolute inset-0">
            <img
              src="/fondo_ingenieria2.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-black/65" />

          {/* GRID */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:80px_80px]" />
          </div>

          {/* NUMERO GIGANTE */}
          <div className="absolute text-[220px] md:text-[420px] font-bold text-white/5">
            01
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-5xl text-center text-white"
          >

            <p className="uppercase tracking-[0.4em] text-sm text-gray-300 mb-6">
              Ingeniería Industrial
            </p>

            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
              Diseño, automatización
              <br />
              y manufactura industrial
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
              Desarrollamos soluciones industriales integrando ingeniería,
              automatización, manufactura y control eléctrico para optimizar
              procesos productivos y sistemas industriales.
            </p>

            {/* MÉTRICAS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-6">
                <h3 className="text-3xl font-light mb-2">+25</h3>
                <p className="text-sm text-gray-300">
                  Proyectos
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-6">
                <h3 className="text-3xl font-light mb-2">+10</h3>
                <p className="text-sm text-gray-300">
                  Sistemas integrados
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-6">
                <h3 className="text-3xl font-light mb-2">24/7</h3>
                <p className="text-sm text-gray-300">
                  Soporte técnico
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-6">
                <h3 className="text-3xl font-light mb-2">5</h3>
                <p className="text-sm text-gray-300">
                  Industrias
                </p>
              </div>

            </div>

          </motion.div>

        </section>


        {/* ================= SERVICIOS ================= */}
        <section className="px-6 md:px-20 py-28">

          <div className="max-w-7xl mx-auto grid md:grid-cols-[320px_1fr] gap-12">

            {/* MENU LATERAL */}
            <div className="space-y-4">

              {Object.keys(sections).map((key) => {

                const item = sections[key as keyof typeof sections];

                return (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`w-full text-left rounded-3xl p-6 border transition-all duration-300 ${
                      active === key
                        ? "bg-black text-white border-black"
                        : "bg-white/70 border-black/5 hover:bg-white"
                    }`}
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

                    <h3 className="text-xl font-medium">
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
              <div className="relative h-[400px] overflow-hidden group">

                <img
                  src={data.imgBN}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:opacity-0 grayscale"
                />

                <img
                  src={data.img}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-8 left-8 text-white">

                  <p className="text-sm tracking-[0.3em] uppercase opacity-70 mb-3">
                    Servicio especializado
                  </p>

                  <h2 className="text-4xl font-light">
                    {data.title}
                  </h2>

                </div>

              </div>

              {/* INFO */}
              <div className="p-8 md:p-12">

                <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl">
                  {data.desc}
                </p>

                <div className="grid md:grid-cols-3 gap-10">

                  {/* CAPACIDADES */}
                  <div>
                    <h3 className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-6">
                      Capacidades
                    </h3>

                    <div className="space-y-4">

                      {data.capabilities.map((item, i) => (
                        <div
                          key={i}
                          className="bg-black/[0.03] rounded-2xl p-4"
                        >
                          {item}
                        </div>
                      ))}

                    </div>
                  </div>

                  {/* APLICACIONES */}
                  <div>
                    <h3 className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-6">
                      Aplicaciones
                    </h3>

                    <div className="space-y-4">

                      {data.applications.map((item, i) => (
                        <div
                          key={i}
                          className="bg-black/[0.03] rounded-2xl p-4"
                        >
                          {item}
                        </div>
                      ))}

                    </div>
                  </div>

                  {/* TECNOLOGIAS */}
                  <div>
                    <h3 className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-6">
                      Tecnologías
                    </h3>

                    <div className="space-y-4">

                      {data.tech.map((item, i) => (
                        <div
                          key={i}
                          className="bg-black/[0.03] rounded-2xl p-4"
                        >
                          {item}
                        </div>
                      ))}

                    </div>
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </section>


{/* ================= TIMELINE PREMIUM ================= */}
<section className="relative px-6 md:px-20 py-32 bg-black text-white overflow-hidden">

{/* FONDO */}
<div className="absolute inset-0">
  <img
    src="/fondo_negro.jpg"
    className="w-full h-full object-cover"
  />

  {/* OVERLAY OSCURO */}
  <div className="absolute inset-0 bg-black/70" />

  {/* GLOW */}
  <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
  <div className="absolute bottom-20 right-20 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
</div>

  {/* GLOWS */}
  <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
  <div className="absolute bottom-20 right-20 w-72 h-72 bg-white/10 blur-3xl rounded-full" />

  <div className="relative z-10 max-w-6xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-28">

      <p className="uppercase tracking-[0.4em] text-sm text-gray-500 mb-6">
        Proceso de trabajo
      </p>

      <h2 className="text-5xl md:text-6xl font-light leading-tight mb-8">
        Desarrollo industrial
        <br />
        estructurado
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
        Cada proyecto se desarrolla mediante un proceso técnico orientado
        a manufactura, integración y optimización industrial.
      </p>

    </div>

    {/* TIMELINE */}
    <div className="relative">

      {/* LINEA */}
      <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/10" />

      {/* ITEMS */}
      <div className="space-y-28">

        {[
          {
            number: "01",
            title: "Levantamiento",
            desc: "Análisis técnico, requerimientos operativos y evaluación del proceso industrial.",
          },
          {
            number: "02",
            title: "Diseño CAD",
            desc: "Desarrollo de modelos 3D, estructuras y componentes orientados a manufactura.",
          },
          {
            number: "03",
            title: "Simulación",
            desc: "Validación funcional y optimización técnica antes de fabricación.",
          },
          {
            number: "04",
            title: "Fabricación",
            desc: "Producción CNC, integración mecánica y manufactura industrial.",
          },
          {
            number: "05",
            title: "Integración",
            desc: "Implementación, pruebas y puesta en marcha del sistema.",
          },
        ].map((step, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`relative flex items-center ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >

            {/* CARD */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="relative w-full md:w-[46%] backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl group overflow-hidden"
            >

              {/* HOVER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* NUMERO */}
              <div className="absolute -top-6 -right-2 text-[120px] font-bold text-white/[0.04] leading-none">
                {step.number}
              </div>

              <div className="relative z-10">

                <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
                  Etapa {step.number}
                </p>

                <h3 className="text-3xl font-light mb-6">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-lg">
                  {step.desc}
                </p>

              </div>

            </motion.div>

            {/* NODO */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.5)] border-4 border-black z-20" />

          </motion.div>

        ))}

      </div>

    </div>

  </div>

</section>


        {/* ================= TECNOLOGIAS ================= */}
        <section className="px-6 md:px-20 py-28 bg-[#0a0a0a] text-white">

          <div className="max-w-6xl mx-auto text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
              Tecnologías
            </p>

            <h2 className="text-5xl font-light mb-20">
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

                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="border border-white/10 rounded-3xl py-10 bg-white/[0.03] backdrop-blur-xl"
                >

                  <p className="text-gray-300 text-lg">
                    {tech}
                  </p>


                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}
        <section className="px-6 md:px-20 py-32 bg-black text-white text-center">

          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-10">
            ¿Necesitas desarrollar
            <br />
            una solución industrial?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12 text-lg">
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
            className="bg-white text-black px-10 py-5 rounded-2xl hover:bg-gray-200 transition text-lg"
          >
            Cotizar proyecto
          </button>

        </section>

      </main>
    </>
  );
}
