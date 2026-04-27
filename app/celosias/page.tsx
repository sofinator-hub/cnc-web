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

      <main className="min-h-screen bg-[#0a0a0a] text-white">

        {/* ================= HERO ================= */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

          {/* Fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f172a] to-black" />

          {/* Glow sutil */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-[140px] opacity-10" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-400 rounded-full blur-[140px] opacity-10" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 max-w-4xl w-[90%]"
          >
            <h1 className="text-3xl md:text-5xl font-semibold mb-6 tracking-[0.3em]">
              C E L O S Í A S
            </h1>

            <p className="text-gray-300 max-w-xl leading-relaxed">
              Diseños decorativos y funcionales en corte láser que combinan estética y precisión para interiores y exteriores.
            </p>
          </motion.div>
        </section>


        {/* ================= GALERÍA ================= */}
        <section className="px-6 md:px-20 py-20">

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-16 tracking-[0.2em]"
          >
            GALERÍA
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                onClick={() => setSelected(item)}
                className="cursor-pointer group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-blue-400/40 transition duration-500"
              >

                {/* Imagen */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Texto */}
                <div className="absolute bottom-0 p-6 opacity-0 group-hover:opacity-100 transition duration-500">
                  <h3 className="text-lg font-medium tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
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
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999]"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="bg-[#111827] text-white rounded-2xl max-w-3xl w-[90%] p-6 relative border border-white/10"
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

              <p className="text-gray-300 leading-relaxed">
                {selected.desc}
              </p>

            </motion.div>
          </motion.div>
        )}

      </main>
    </>
  );
}
