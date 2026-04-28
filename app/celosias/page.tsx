"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

type Item = {
  img: string;
  title: string;
  desc: string;
};

export default function CelosiasPage() {
  const [selected, setSelected] = useState<Item | null>(null);

  const items: Item[] = [
    { img: "/celosia1.jpg", title: "Oficina", desc: "Celosía decorativa moderna para interiores." },
    { img: "/celosia2.jpg", title: "Exteriores", desc: "Aplicación arquitectónica en exteriores." },
    { img: "/celosia3.jpg", title: "Terraza", desc: "Patrón personalizado con corte láser de precisión." },
    { img: "/celosia4.jpg", title: "Fachada", desc: "Diseño geométrico ideal para fachadas." },
    { img: "/celosia5.jpg", title: "Protección escalera", desc: "Diseño contemporáneo para espacios modernos." },
    { img: "/celosia6.jpg", title: "Protección", desc: "Aplicación arquitectónica en exteriores." }
  ];

  return (
    <>
      <MobileMenu />

      <main className="min-h-screen bg-[#f8fafc] text-gray-900">

        {/* ================= HERO ================= */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

          {/* Fondo optimizado */}
          <div className="absolute inset-0">
            <img
              src="/fondo_celosia1.jpg"
              alt="Fondo celosía"
              loading="lazy"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          {/* Glow NAVY elegante */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#0f172a] rounded-full blur-[120px] opacity-25" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#1e293b] rounded-full blur-[120px] opacity-25" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl p-10 md:p-16 max-w-4xl w-[90%] shadow-xl"
          >
            <h1 className="text-3xl md:text-5xl font-semibold mb-6 tracking-[0.3em] text-gray-800">
              C E L O S Í A S
            </h1>

            <p className="text-gray-600 max-w-xl leading-relaxed">
              Diseños decorativos y funcionales en corte láser que combinan estética y precisión para interiores y exteriores.
            </p>
          </motion.div>
        </section>


        {/* ================= GALERÍA ================= */}
        <section className="px-6 md:px-20 py-20">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-semibold mb-16 tracking-[0.2em] text-gray-900"
          >
            GALERÍA
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelected(item)}
                className="cursor-pointer group relative rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-[#1e293b] transition duration-300 shadow-sm hover:shadow-xl"
              >

                {/* Imagen */}
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay NAVY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-[#0f172a]/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Texto */}
                <div className="absolute bottom-0 p-6 opacity-0 group-hover:opacity-100 transition duration-300 text-white">
                  <h3 className="text-lg font-semibold tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-80 mt-1">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>
        </section>


        {/* ================= MODAL ================= */}
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-gray-900 rounded-2xl max-w-3xl w-[90%] p-6 relative shadow-2xl"
            >

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-xl hover:scale-110 transition"
              >
                ✕
              </button>

              <img
                src={selected.img}
                alt={selected.title}
                className="w-full h-[350px] object-cover rounded-xl mb-6"
              />

              <h3 className="text-2xl font-semibold mb-2 tracking-wide">
                {selected.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {selected.desc}
              </p>

            </motion.div>
          </motion.div>
        )}

      </main>
    </>
  );
}
