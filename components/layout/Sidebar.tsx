"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Sidebar() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden md:flex fixed right-6 top-[30%] z-[999] flex-col gap-4"
    >
      {/* CONTENEDOR */}
      <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-4 flex flex-col gap-4 min-w-[180px]">

        {/* STATUS */}
        <div className="flex items-center gap-2 text-[10px] text-gray-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          SYSTEM ONLINE
        </div>

        {/* NAVEGACIÓN */}
        <div className="flex flex-col gap-1 text-sm text-gray-600">

          <Link href="/cnc" className="px-2 py-1 rounded-md hover:bg-gray-100 hover:text-black transition">
            Corte Láser
          </Link>

          <Link href="/tubo" className="px-2 py-1 rounded-md hover:bg-gray-100 hover:text-black transition">
            Corte láser de tubo
          </Link>

          <Link href="/soldadura" className="px-2 py-1 rounded-md hover:bg-gray-100 hover:text-black transition">
            Soldadura con Ultrasonido
          </Link>

          <Link href="/conveyors" className="px-2 py-1 rounded-md hover:bg-gray-100 hover:text-black transition">
            Conveyors
          </Link>

          <Link href="/guardas" className="px-2 py-1 rounded-md hover:bg-gray-100 hover:text-black transition">
            Guardas
          </Link>

          <Link href="/celosias" className="px-2 py-1 rounded-md hover:bg-gray-100 hover:text-black transition">
            Celosías
          </Link>

          <Link href="/inoxidable" className="px-2 py-1 rounded-md hover:bg-gray-100 hover:text-black transition">
            Mobiliario Inoxidable
          </Link>

          <Link href="/ingeniería" className="px-2 py-1 rounded-md hover:bg-gray-100 hover:text-black transition">
            Servicios de Ingeniería
          </Link>

        </div>

        {/* DIVISOR */}
        <div className="border-t border-gray-200 my-2" />

        {/* CONTACTO */}
        <div className="flex flex-col gap-1 text-xs text-gray-500">

          <a
            href="https://wa.me/5215562045546"
            target="_blank"
            className="px-2 py-1 hover:text-black transition"
          >
            WhatsApp
          </a>

          <a
            href="mailto:matei_company@hotmail.com"
            className="px-2 py-1 hover:text-black transition"
          >
            Email
          </a>

        </div>

        {/* BOTÓN COTIZAR  */}
        <motion.a
          href="https://wa.me/5215562045546"
          target="_blank"
          className="mt-2 bg-black text-white text-sm px-4 py-2 rounded-lg text-center font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Cotizar
        </motion.a>

      </div>

      {/* LÍNEA DECORATIVA */}
      <div className="h-12 border-r border-gray-300 opacity-30 mx-auto" />
    </motion.div>
  );
}