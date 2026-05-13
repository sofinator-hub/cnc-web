"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÓN MENU */}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed top-4 right-4 z-[999]
            lg:hidden

            w-10 h-10

            bg-white/15
            backdrop-blur-md

            rounded-xl

            border border-white/10

            flex items-center justify-center

            text-white/80

            transition-all duration-300

            hover:bg-white/20
            hover:text-white
          "
        >

          <Menu size={18} />

        </button>
      )}


      {/* BACKDROP */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-[998]

          bg-black/40
          backdrop-blur-sm

          transition duration-500

          ${
            open
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }
        `}
      />


      {/* MENU */}

      <div
        className={`
          fixed inset-0 z-[999]

          flex flex-col justify-between

          p-8

          bg-white/75
          backdrop-blur-2xl

          transition-all duration-500

          ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0 pointer-events-none"
          }
        `}
      >

        {/* HEADER */}

        <div className="flex justify-between items-center">

          <div>

            <span className="
              text-[10px]
              tracking-[0.25em]
              text-gray-400
            ">
              SYSTEM ONLINE
            </span>

            <h2 className="
              text-xl
              font-semibold
              text-gray-800
              mt-1
            ">
              Navegación
            </h2>

          </div>

          <button
            onClick={() => setOpen(false)}
            className="
              w-10 h-10

              rounded-xl

              bg-white/60

              flex items-center justify-center

              text-[var(--primary)]

              transition-all duration-300
            "
          >

            <X size={20} />

          </button>

        </div>


        {/* NAVEGACIÓN */}

        <div className="
          flex flex-col gap-3

          text-lg
          font-medium
          text-gray-800
        ">

          {[
            {
              href: "/",
              label: "Inicio"
            },
            {
              href: "/cnc",
              label: "Corte Láser"
            },
            {
              href: "/tubo",
              label: "Corte Láser de Tubo"
            },
            {
              href: "/soldadura",
              label: "Soldadura Ultrasonido"
            },
            {
              href: "/ingenieria",
              label: "Ingeniería"
            },
            {
              href: "/inoxidable",
              label: "Mobiliario Inoxidable"
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

            <Link
              key={i}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                group

                flex items-center gap-3

                px-4 py-3

                rounded-2xl

                hover:bg-purple-50/80
                hover:text-[var(--primary)]

                transition-all duration-300
              "
            >

              <div className="
                w-2 h-2 rounded-full

                bg-purple-300

                opacity-0
                group-hover:opacity-100

                transition-all duration-300
              " />

              {item.label}

            </Link>

          ))}

        </div>


        {/* FOOTER */}

        <div className="flex flex-col gap-5">

          {/* CONTACTO */}

          <div className="
            flex flex-col gap-2
            text-sm
            text-gray-500
          ">

            <a
              href="https://wa.me/5215562045546"
              target="_blank"
              className="
                hover:text-[var(--primary)]
                transition-all duration-300
              "
            >
              WhatsApp
            </a>

            <a
              href="mailto:matei_company@hotmail.com"
              className="
                hover:text-[var(--primary)]
                transition-all duration-300
              "
            >
              Email
            </a>

          </div>


          {/* CTA */}

          <a
            href="https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar"
            target="_blank"
            className="
              purple-gradient
              text-white

              text-center

              py-3

              rounded-2xl

              font-medium

              purple-glow

              transition-all duration-300
            "
          >
            Cotizar
          </a>

        </div>

      </div>
    </>
  );
}
