"use client";

import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
className="hidden md:flex fixed right-6 top-[35%] z-[999] flex-col gap-4"
    >
      {/* CONTENEDOR */}
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-5 flex flex-col gap-4 min-w-[140px]">

        {/*  INDICADOR SISTEMA */}
        <div className="flex items-center gap-2 text-xs text-gray-500 justify-center">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          SYSTEM ONLINE
        </div>

        {/*  BOTÓN COTIZAR */}
        <motion.a
          href="#contacto"
          className="bg-black text-white text-sm px-4 py-2 rounded-full text-center font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Cotizar
        </motion.a>

        {/*  WHATSAPP */}
<a
  href="https://wa.me/5215562045546"
  target="_blank"
  className="text-xs text-gray-600 hover:text-black transition text-center"
>
  WhatsApp
</a>

        {/*  CORREO */}
<a
  href="mailto:matei_company@hotmail.com"
  className="text-xs text-gray-600 hover:text-black transition text-center"
>
  Email
</a>

      </div>

      {/*  LINEA DECORATIVA */}
      <div className="h-12 border-r border-gray-300 opacity-40 mx-auto" />

    </motion.div>
  );
}