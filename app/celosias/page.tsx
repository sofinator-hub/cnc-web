"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

type Item = {
  img: string;
  title: string;
  desc: string;
  category: string;
  slug: string;
};

export default function CelosiasPage() {
  const [selected, setSelected] = useState<Item | null>(null);
  const [active, setActive] = useState("Todos");

  const router = useRouter();

  const items: Item[] = [
    {
      img: "/celosia1.jpg",
      title: "Oficina",
      desc: "Interior moderno",
      category: "Oficinas",
      slug: "oficina-moderna"
    },

    {
      img: "/celosia2.jpg",
      title: "Exteriores",
      desc: "Aplicación exterior",
      category: "Exteriores",
      slug: "exteriores-premium"
    },

    {
      img: "/celosia3.jpg",
      title: "Terraza",
      desc: "Diseño personalizado",
      category: "Residencial",
      slug: "terraza-premium"
    },

    {
      img: "/celosia4.jpg",
      title: "Fachada",
      desc: "Diseño geométrico",
      category: "Fachadas",
      slug: "fachada-geometrica"
    },

    {
      img: "/celosia5.jpg",
      title: "Escaleras",
      desc: "Protección moderna",
      category: "Residencial",
      slug: "escaleras-modernas"
    },

    {
      img: "/celosia6.jpg",
      title: "Protección",
      desc: "Exterior arquitectónico",
      category: "Exteriores",
      slug: "proteccion-exterior"
    }
  ];

  const categories = [
    "Todos",
    "Oficinas",
    "Exteriores",
    "Residencial",
    "Fachadas"
  ];

  const filteredItems =
    active === "Todos"
      ? items
      : items.filter((item) => item.category === active);

  return (
    <>
      <MobileMenu />

      {/* ================= FONDO ================= */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/fondo_blanco.jpg"
          alt="Fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <main className="relative z-10 text-gray-900">

        {/* ================= HERO ================= */}
        <section className="min-h-[85vh] md:min-h-screen flex items-center justify-center relative overflow-hidden px-4">

          {/* IMAGEN FONDO */}
          <div className="absolute inset-0">
            <img
              src="/fondo_celosia2.jpg"
              alt="Fondo celosía"
              loading="lazy"
              className="w-full h-full object-cover md:opacity-90"
            />
          </div>

          {/* GLOW */}
          <div className="absolute top-10 left-5 w-40 h-40 md:w-80 md:h-80 bg-blue-600 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-5 w-40 h-40 md:w-80 md:h-80 bg-cyan-400 rounded-full blur-3xl opacity-20" />

          {/* CONTENIDO */}
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
              Diseños decorativos y funcionales en corte láser que combinan
              estética y precisión.
            </p>

          </motion.div>
        </section>

        {/* ================= PROYECTOS ================= */}
        <section className="px-4 md:px-20 py-16">

          <h2 className="text-2xl md:text-4xl font-semibold mb-10 tracking-[0.15em] text-center md:text-left">
            PROYECTOS
          </h2>

          {/* FILTROS */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-10">

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition
                  ${
                    active === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }
                `}
              >
                {cat}
              </button>
            ))}

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {filteredItems.map((item, i) => (
              <div
                key={i}
                onClick={() => router.push(`/celosias/${item.slug}`)}
                className="group cursor-pointer"
              >

                <div className="relative overflow-hidden rounded-2xl">

                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300" />

                  <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition duration-300">

                    <p className="text-xs opacity-80">
                      {item.category}
                    </p>

                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>

                    <span className="text-sm underline">
                      Ver más →
                    </span>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* ================= GALERÍA ================= */}
        <section className="px-4 md:px-20 py-16 md:py-20">

          <h2 className="text-2xl md:text-4xl font-semibold mb-10 md:mb-16 tracking-[0.15em] text-center md:text-left">
            GALERÍA
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">

            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                onClick={() => router.push(`/celosias/${item.slug}`)}
                className="cursor-pointer group relative rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-blue-500 transition duration-300 shadow-sm hover:shadow-lg"
              >

                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-[220px] md:h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-500/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                <div className="absolute bottom-0 p-4 md:p-6 opacity-0 group-hover:opacity-100 transition duration-300 text-white">

                  <h3 className="text-base md:text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm opacity-80 mt-1">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </section>




      </main>
    </>
  );
}


