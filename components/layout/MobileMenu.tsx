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
        className="fixed top-4 right-4 z-[1000] md:hidden bg-white/70 backdrop-blur-md p-3 rounded-xl shadow-lg"
      >
        <div className="w-6 h-[2px] bg-black mb-1"></div>
        <div className="w-6 h-[2px] bg-black mb-1"></div>
        <div className="w-6 h-[2px] bg-black"></div>
      </button>

      {/* MENU DROPDOWN */}
      <div
        className={`fixed top-16 left-0 w-full z-[999] bg-white shadow-lg transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-4 text-lg font-medium text-gray-800">

          <Link href="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link href="/cnc" onClick={() => setOpen(false)}>Corte láser</Link>
          <Link href="/tubo" onClick={() => setOpen(false)}>Corte tubo</Link>
          <Link href="/soldadura" onClick={() => setOpen(false)}>Soldadura</Link>
          <Link href="/conveyors" onClick={() => setOpen(false)}>Conveyors</Link>
          <Link href="/guardas" onClick={() => setOpen(false)}>Guardas</Link>
          <Link href="/celosias" onClick={() => setOpen(false)}>Celosías</Link>
          <Link href="/inoxidable" onClick={() => setOpen(false)}>Inoxidable</Link>
          <Link href="/ingenieria" onClick={() => setOpen(false)}>Ingeniería</Link>

          {/* IA */}
          <Link href="/ai" onClick={() => setOpen(false)} className="font-semibold text-black">
            IA
          </Link>



        </div>

      </div>
    </>
  );
}
