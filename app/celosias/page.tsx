"use client";
import { useState } from "react";
import MobileMenu from "@/components/layout/MobileMenu";

type Item = {
img: string;
title: string;
desc: string;
};

export default function CelosiasPage() {
const [selected, setSelected] = useState<Item | null>(null);

const items: Item[] = [
{ img: "/celosia1.jpg", title: "Diseño 1", desc: "Celosía decorativa moderna para interiores." },
{ img: "/celosia2.jpg", title: "Diseño 2", desc: "Diseño geométrico ideal para fachadas." },
{ img: "/celosia3.jpg", title: "Diseño 3", desc: "Patrón personalizado con corte láser de precisión." },
{ img: "/celosia4.jpg", title: "Diseño 4", desc: "Celosía funcional para ventilación y estética." },
{ img: "/celosia5.jpg", title: "Diseño 5", desc: "Diseño contemporáneo para espacios modernos." },
{ img: "/celosia6.jpg", title: "Diseño 6", desc: "Aplicación arquitectónica en exteriores." }
];

return (
<> <MobileMenu />

```
  <main className="min-h-screen bg-[#f4f6f8] text-gray-900">

    {/* ================= HERO ================= */}
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* FONDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* CARD */}
      <div className="relative z-10 backdrop-blur-xl bg-white/70 border border-gray-200 rounded-3xl p-10 md:p-16 max-w-4xl w-[90%] shadow-xl">

        <h1 className="text-3xl md:text-5xl font-semibold mb-6">
          CELOSÍAS
        </h1>

        <p className="text-gray-600 max-w-xl">
          Diseños decorativos y funcionales en corte láser que combinan estética y precisión para interiores y exteriores.
        </p>

      </div>

    </section>


    {/* ================= GALERÍA ================= */}
    <section className="px-6 md:px-20 py-20">

      <h2 className="text-3xl md:text-4xl font-semibold mb-12">
        GALERÍA
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelected(item)}
            className="cursor-pointer group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition"
          >

            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />

            {/* TEXTO */}
            <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-lg font-medium">
                {item.title}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </section>


    {/* ================= MODAL ================= */}
    {selected && (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]">

        <div className="bg-white rounded-2xl max-w-3xl w-[90%] p-6 relative">

          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-xl"
          >
            ✕
          </button>

          <img
            src={selected.img}
            alt={selected.title}
            className="w-full h-[300px] object-cover rounded-xl mb-4"
          />

          <h3 className="text-xl font-semibold mb-2">
            {selected.title}
          </h3>

          <p className="text-gray-600">
            {selected.desc}
          </p>

        </div>

      </div>
    )}

  </main>
</>

);
}

