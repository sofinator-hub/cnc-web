"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Sidebar() {
  return (
    <div
      className="
        hidden lg:block
        fixed right-6 top-1/2 -translate-y-1/2
        z-[999]
        group
      "
    >

      {/* BOTÓN FLOTANTE */}
      <div
        className="
          absolute right-0 top-1/2 -translate-y-1/2

          w-16 h-26

          rounded-3xl

          bg-white/90
          backdrop-blur-xl

          border border-purple-200/80

          shadow-[0_10px_35px_rgba(0,0,0,0.18)]

          flex items-center justify-center

          text-purple-600

          transition-all duration-300

          group-hover:opacity-0
          group-hover:pointer-events-none
        "
      >

        <Menu size={30} strokeWidth={2.5} />

      </div>


      {/* SIDEBAR */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="
          opacity-0
          translate-x-10
          group-hover:opacity-100
          group-hover:translate-x-0
          transition-all duration-300

          bg-white/70
          backdrop-blur-xl
          border border-purple-100/70
          rounded-3xl
          shadow-2xl

          p-4
          w-[190px]

          flex flex-col gap-4
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


        {/* LINKS */}
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
              label: "Soldadura de ultrasonido"
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
                  group/link
                  flex items-center gap-2
                  px-3 py-2
                  rounded-xl
                  hover:bg-purple-50/80
                  hover:text-[var(--primary)]
                  transition-all duration-300
                "
              >

                <div className="
                  w-1.5 h-1.5 rounded-full
                  bg-purple-400
                  opacity-0
                  group-hover/link:opacity-100
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
        <div className="border-t border-purple-100/70" />


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
            px-4 py-2.5
            rounded-xl
            text-center
            font-medium
            purple-glow
            
          "

          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Cotizar
        </motion.a>

      </motion.div>

    </div>
  );
}