"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

type Item = {
img: string;
title: string;
desc: string;
category: string;
};

export default function CelosiasPage() {
const [selected, setSelected] = useState<Item | null>(null);
const [active, setActive] = useState("Todos");

const items: Item[] = [
{ img: "/celosia1.jpg", title: "Oficina", desc: "Interior moderno", category: "Oficinas" },
{ img: "/celosia2.jpg", title: "Exteriores", desc: "Aplicación exterior", category: "Exteriores" },
{ img: "/celosia3.jpg", title: "Terraza", desc: "Diseño personalizado", category: "Residencial" },
{ img: "/celosia4.jpg", title: "Fachada", desc: "Diseño geométrico", category: "Fachadas" },
{ img: "/celosia5.jpg", title: "Escaleras", desc: "Protección moderna", category: "Residencial" },
{ img: "/celosia6.jpg", title: "Protección", desc: "Exterior arquitectónico", category: "Exteriores" }
];

const categories = ["Todos", "Oficinas", "Exteriores", "Residencial", "Fachadas"];

const filteredItems =
active === "Todos"
? items
: items.filter(item => item.category === active);

return (
<> <MobileMenu />

  <main className="min-h-screen bg-[url('/fondo_blanco.jpg')] bg-cover bg-center text-gray-900">

    {/* ================= HERO ================= */}
    <section className="min-h-[85vh] md:min-h-screen flex items-center justify-center relative overflow-hidden px-4">

      <div className="absolute inset-0">
        <img
          src="/fondo_celosia2.jpg"
          alt="Fondo celosía"
          loading="lazy"
          className="w-full h-full object-cover md:opacity-90"
        />
      </div>

      <div className="absolute top-10 left-5 w-40 h-40 md:w-80 md:h-80 bg-blue-600 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-5 w-40 h-40 md:w-80 md:h-80 bg-cyan-400 rounded-full blur-3xl opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl md:rounded-3xl p-6 md:p-14 max-w-3xl w-full shadow-xl"
      >
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 md:mb-6 tracking-[0.1em] md:tracking-[0.3em] text-gray-700 text-center md:text-left">
          CELOSÍAS
        </h1>

        <p className="text-gray-600 text-sm md:text-base max-w-xl leading-relaxed text-center md:text-left">
          Diseños decorativos y funcionales en corte láser que combinan estética y precisión.
        </p>
      </motion.div>
    </section>

  </main>
</>


);
}

