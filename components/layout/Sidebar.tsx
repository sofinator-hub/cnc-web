"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Sidebar() {
  return (
    <motion.div
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        hidden lg:flex
        fixed right-4 top-1/2 -translate-y-1/2
        z-[999]
        flex-col gap-4
        opacity-70 hover:opacity-100
        translate-x-[105px] hover:translate-x-0
        transition-all duration-500
      "
    >

      {/* TAB VISIBLE */}
      <div
        className="
          absolute
          left-[-42px]
          top-1/2
          -translate-y-1/2
          w-[42px]
          h-[120px]
          bg-white/65
          backdrop-blur-md
          border border-purple-100/70
          border-r-0
          rounded-l-2xl
          flex items-center justify-center
          shadow-lg
        "
      >

        <div className="flex flex-col gap-2">

          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />

        </div>

      </div>


      {/* CONTENEDOR */}
      <div
        className="
          bg-white/65
          backdrop-blur-md
          border
          border-purple-100/70
          rounded-r-2xl rounded-l-none
          shadow-xl
          p-3
          flex
          flex-col
          gap-3
          w-[165px]
        "
      >

        {/* STATUS */}
        <div className="flex items-center gap-2 text-[10px] text-gray-400 tracking-[0.15em]">

          <div className="relative flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <div className="absolute w-2 h-2 bg-green-400 rounded-full blur-sm opacity-60" />
          </div>

          SYSTEM ONLINE

        </div>


        {/* NAVEGACIÓN */}
        <div className="flex flex-col gap-1 text-[13px] text-gray-600">

          {[
            {
              href: "/cnc",
              label: "Corte Láser"
            },
            {
              href: "/tubo",
              label: "Corte Láser Tubo"
            },
            {
              href: "/soldadura",
              label: "Soldadura"
            },
            {
              href: "/ingenieria",
              label: "Ingeniería"
            },
            {
              href: "/inoxidable",
              label: "Inoxidable"
            },
            {
              href: "/conveyors",
              label: "Conveyors"
            },
            {
              href: "/guardas",
              label: "Guardas"
            },
            {
              href: "/celosias",
              label: "Celosías"
            }
          ].map((item, i) => (

            <motion.div
              key={i}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >

              <Link
                href={item.href}
                className="
                  group
                  flex items-center
                  gap-2
                  px-2 py-1.5
                  rounded-lg
                  hover:bg-purple-50/70
                  hover:text-[var(--primary)]
                  transition-all duration-300
                "
              >

                <div className="
                  w-1.5 h-1.5 rounded-full
                  bg-purple-300
                  opacity-0
                  group-hover:opacity-100
                  transition-all duration-300
                " />

                <span>
                  {item.label}
                </span>

              </Link>

            </motion.div>

          ))}

        </div>


        {/* DIVISOR */}
        <div className="border-t border-purple-100/70 my-1" />


        {/* CONTACTO */}
        <div className="flex flex-col gap-1 text-[11px] text-gray-500">

          <a
            href="https://wa.me/5215562045546"
            target="_blank"
            className="
              px-2 py-1 rounded-md
              hover:bg-purple-50/70
              hover:text-[var(--primary)]
              transition-all duration-300
            "
          >
            WhatsApp
          </a>

          <a
            href="mailto:matei_company@hotmail.com"
            className="
              px-2 py-1 rounded-md
              hover:bg-purple-50/70
              hover:text-[var(--primary)]
              transition-all duration-300
            "
          >
            Email
          </a>

        </div>


        {/* BOTÓN */}
        <motion.a
          href="https://wa.me/5215562045546"
          target="_blank"
          className="
            mt-1
            purple-gradient
            text-white
            text-sm
            px-4
            py-2.5
            rounded-xl
            text-center
            font-medium
            purple-glow
            transition-all duration-300
          "
          whileHover={{
            scale: 1.04
          }}
          whileTap={{
            scale: 0.97
          }}
        >
          Cotizar
        </motion.a>

      </div>


      {/* LÍNEA DECORATIVA */}
      <div className="h-10 border-r border-purple-200/40 opacity-40 mx-auto" />

    </motion.div>
  );
}