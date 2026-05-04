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
<> <MobileMenu />

  {/* FONDO*/}
  <div className="fixed inset-0 -z-10">
    <img
      src="/fondo_blanco.jpg"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-white/70" />
  </div>

  <main className="relative z-10 text-gray-900">

    {/* ================= HERO ================= */}
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden px-4">

      <div className="absolute inset-0">
        <img
          src="/fondo_ingenieria2.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-[#0f172a] blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#0f172a] blur-3xl opacity-30" />

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

  </main>
</>

);
}


