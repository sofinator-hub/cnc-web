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

      <div className="
        bg-white/85
        backdrop-blur-xl
        border
        border-purple-100
        rounded-2xl
        shadow-xl
        p-4
        flex
        flex-col
        gap-4
        min-w-[190px]
      ">

        {/* STATUS */}

        <div className="flex items-center gap-2 text-[10px] text-gray-400 tracking-[0.15em]">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          SYSTEM ONLINE
        </div>

        {/* NAVEGACIÓN */}

        <div className="flex flex-col gap-1 text-sm text-gray-600">

          <Link
            href="/cnc"
            className="
              px-3 py-2 rounded-md
              hover:bg-purple-50
              hover:text-[var(--primary)]
              transition-all duration-300
            "
          >
            Corte Láser
          </Link>

          <Link
            href="/tubo"
            className="
              px-3 py-2 rounded-md
              hover:bg-purple-50
              hover:text-[var(--primary)]
              transition-all duration-300
            "
          >
            Corte Láser de Tubo
          </Link>

          <Link
            href="/soldadura"
            className="
              px-3 py-2 rounded-md
              hover:bg-purple-50
              hover:text-[var(--primary)]
              transition-all duration-300
            "
          >
            Soldadura con Ultrasonido
          </Link>

          <Link
            href="/ingenieria"
            className="
              px-3 py-2 rounded-md
              hover:bg-purple-50
              hover:text-[var(--primary)]
              transition-all duration-300
            "
          >
            Servicios de Ingeniería
          </Link>

          <Link
            href="/inoxidable"
            className="
              px-3 py-2 rounded-md
              hover:bg-purple-50
              hover:text-[var(--primary)]
              transition-all duration-300
            "
          >
            Mobiliario Inoxidable
          </Link>

          <Link
            href="/conveyors"
            className="
              px-3 py-2 rounded-md
              hover:bg-purple-50
              hover:text-[var(--primary)]
              transition-all duration-300
            "
          >
            Conveyors
          </Link>

          <Link
            href="/guardas"
            className="
              px-3 py-2 rounded-md
              hover:bg-purple-50
              hover:text-[var(--primary)]
              transition-all duration-300
            "
          >
            Guardas
          </Link>

          <Link
            href="/celosias"
            className="
              px-3 py-2 rounded-md
              hover:bg-purple-50
              hover:text-[var(--primary)]
              transition-all duration-300
            "
          >
            Celosías
          </Link>

        </div>

        {/* DIVISOR */}

        <div className="border-t border-purple-100 my-2" />

        {/* CONTACTO */}

        <div className="flex flex-col gap-1 text-xs text-gray-500">

          <a
            href="https://wa.me/5215562045546"
            target="_blank"
            className="
              px-2 py-1
              hover:text-[var(--primary)]
              transition-all duration-300
            "
          >
            WhatsApp
          </a>

          <a
            href="mailto:matei_company@hotmail.com"
            className="
              px-2 py-1
              hover:text-[var(--primary)]
              transition-all duration-300
            "
          >
            Email
          </a>

        </div>

        {/* BOTÓN COTIZAR */}

        <motion.a
          href="https://wa.me/5215562045546"
          target="_blank"
          className="
            mt-2
            purple-gradient
            text-white
            text-sm
            px-4
            py-2.5
            rounded-lg
            text-center
            font-medium
            purple-glow
            transition-all
            duration-300
          "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          Cotizar
        </motion.a>

      </div>

      {/* LÍNEA DECORATIVA */}

      <div className="h-12 border-r border-purple-200 opacity-40 mx-auto" />

    </motion.div>
  );
}