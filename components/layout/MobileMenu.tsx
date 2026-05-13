"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function MobileMenu() {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÓN MENU */}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed top-24 right-5 z-[999]
            md:hidden

            bg-white/80
            backdrop-blur-xl

            p-3

            rounded-xl

            shadow-lg

            border border-purple-100

            transition-all duration-300
          
            "
        >

          <Menu
            size={22}
            className="text-[var(--primary)]"
          />

        </button>
      )}


      {/* BACKDROP */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-[998]

          bg-white/75
          backdrop-blur-2xl

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

          <span
            className="
              text-xs
              tracking-[0.25em]
              text-gray-400
            "
          >
            MENU
          </span>

          <button
            onClick={() => setOpen(false)}
            className="
              text-2xl
              text-[var(--primary)]

              transition-all duration-300
            "
          >
            ✕
          </button>

        </div>


        {/* NAVEGACIÓN */}

        <div
          className="
            flex flex-col gap-5

            text-2xl
            font-medium

            text-gray-800
          "
        >

          {[
            {
              href: "/",
              label: "Inicio"
            },
            {
              href: "/cnc",
              label: "Corte láser"
            },
            {
              href: "/tubo",
              label: "Corte láser de tubo"
            },
            {
              href: "/soldadura",
              label: "Soldadura con Ultrasonido"
            },
            {
              href: "/ingenieria",
              label: "Servicios de ingeniería"
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

                hover:text-[var(--primary)]

                transition-all duration-300
              "
            >



              {item.label}

            </Link>

          ))}

        </div>


        {/* FOOTER */}

        <div className="flex flex-col gap-5">

          {/* CONTACTO */}

          <div
            className="
              flex flex-col gap-2

              text-sm
              text-gray-500
            "
          >

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

              rounded-xl

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
