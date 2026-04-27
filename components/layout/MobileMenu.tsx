"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
const [open, setOpen] = useState(false);

return (
<>
{/* BOTÓN HAMBURGUESA */}
<button
onClick={() => setOpen(!open)}
className="fixed top-4 right-4 z-[999] md:hidden bg-white/70 backdrop-blur-md p-3 rounded-xl shadow-lg transition"
>
<div className="w-6 h-[2px] bg-black mb-1"></div>
<div className="w-6 h-[2px] bg-black mb-1"></div>
<div className="w-6 h-[2px] bg-black"></div> </button>


  {/* BACKDROP */}
  <div
    onClick={() => setOpen(false)}
    className={`fixed inset-0 z-[998] bg-white/60 backdrop-blur-xl transition duration-500 ${
      open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    }`}
  />

  {/* MENU */}
  <div
    className={`fixed inset-0 z-[999] flex flex-col items-center justify-center space-y-10 text-2xl font-medium transition-all duration-500 ${
      open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
    }`}
  >

    {/* BOTÓN X */}
    <button
      onClick={() => setOpen(false)}
      className="absolute top-6 right-6 text-3xl text-black"
    >
      ✕
    </button>

    <Link href="/" onClick={() => setOpen(false)} className="text-blue-700 hover:scale-110 transition">
      Inicio
    </Link>

    <Link href="/cnc" onClick={() => setOpen(false)} className="text-blue-700 hover:scale-110 transition">
      Corte láser
    </Link>

    <Link href="/conveyors" onClick={() => setOpen(false)} className="text-blue-700 hover:scale-110 transition">
      Conveyors
    </Link>

    <Link href="/guardas" onClick={() => setOpen(false)} className="text-blue-700 hover:scale-110 transition">
      Guardas
    </Link>

    <Link href="/celosias" onClick={() => setOpen(false)} className="text-blue-700 hover:scale-110 transition">
      Celosías
    </Link>

    <Link href="/inoxidable" onClick={() => setOpen(false)} className="text-blue-700 hover:scale-110 transition">
      Moniliario Inoxidable
    </Link>

        <Link href="/soldadura" onClick={() => setOpen(false)} className="text-blue-700 hover:scale-110 transition">
      Soldadura con Ultrasonido
    </Link>

    <a
      href="https://wa.me/525562045546"
      target="_blank"
      className="text-blue-700 hover:scale-110 transition"
    >
      WhatsApp
    </a>

    <a
      href="mailto:tuemail@empresa.com"
      className="text-blue-700 hover:scale-110 transition"
    >
      Email
    </a>
  </div>
</>

);
}
