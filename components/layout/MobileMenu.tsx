"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BOTÓN */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-[999] md:hidden bg-white/70 backdrop-blur-md p-3 rounded-xl shadow-lg"
      >
        <div className="w-6 h-[2px] bg-black mb-1"></div>
        <div className="w-6 h-[2px] bg-black mb-1"></div>
        <div className="w-6 h-[2px] bg-black"></div>
      </button>

      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[998] bg-white/70 backdrop-blur-xl transition duration-500 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* MENU */}
      <div
        className={`fixed inset-0 z-[999] flex flex-col justify-between p-8 transition-all duration-500 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">MENU</span>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl text-black"
          >
            ✕
          </button>
        </div>

        {/* NAVEGACIÓN */}
        <div className="flex flex-col gap-5 text-xl font-medium text-gray-800">

          <Link href="/" onClick={() => setOpen(false)} className="hover:text-black transition">
            Inicio
          </Link>

          <Link href="/cnc" onClick={() => setOpen(false)} className="hover:text-black transition">
            Corte láser
          </Link>

          <Link href="/tubo" onClick={() => setOpen(false)} className="hover:text-black transition">
            Corte láser de tubo
          </Link>

          <Link href="/soldadura" onClick={() => setOpen(false)} className="hover:text-black transition">
            Soldadura con Ultrasonido
          </Link>

          <Link href="/conveyors" onClick={() => setOpen(false)} className="hover:text-black transition">
            Conveyors
          </Link>

          <Link href="/guardas" onClick={() => setOpen(false)} className="hover:text-black transition">
            Guardas
          </Link>

          <Link href="/celosias" onClick={() => setOpen(false)} className="hover:text-black transition">
            Celosías
          </Link>

          <Link href="/inoxidable" onClick={() => setOpen(false)} className="hover:text-black transition">
            Mobiliario Inoxidable
          </Link>

          <Link href="/ingeniería" onClick={() => setOpen(false)} className="hover:text-black transition">
            Servicios de ingeniería
          </Link>

        </div>

        {/* FOOTER */}
        <div className="flex flex-col gap-4">

          {/* CONTACTO */}
          <div className="flex flex-col gap-2 text-sm text-gray-500">

            <a
              href="https://wa.me/5215562045546"
              target="_blank"
              className="hover:text-black transition"
            >
              WhatsApp
            </a>

            <a
              href="mailto:matei_company@hotmail.com"
              className="hover:text-black transition"
            >
              Email
            </a>

          </div>

          {/* CTA */}
          <a
            href="https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar"
            target="_blank"
            className="bg-black text-white text-center py-3 rounded-xl font-medium"
          >
            Cotizar
          </a>

        </div>

      </div>
    </>
  );
}
