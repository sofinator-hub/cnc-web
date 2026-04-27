"use client";
import MobileMenu from "@/components/layout/MobileMenu";

export default function CelosiasPage() {
const items = [
{ img: "/public/celosia1.jpg", title: "Diseño 1" },
{ img: "/public/celosia2.jpg", title: "Diseño 2" },
{ img: "/public/celosia3.jpg", title: "Diseño 3" },
{ img: "/public/celosia4.jpg", title: "Diseño 4" },
{ img: "/public/celosia5.jpg", title: "Diseño 5" },
{ img: "/public/celosia6.jpg", title: "Diseño 6" }
];

return (
<> <MobileMenu />

  <main className="min-h-screen bg-[#0b0b0d] text-white">

    {/* ================= HERO GLASS ================= */}
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* FONDO */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f172a] to-black" />

      {/* LUCES */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full blur-[120px] opacity-20" />

      {/* GLASS CARD */}
      <div className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 max-w-4xl w-[90%]">

        <h1 className="text-3xl md:text-5xl font-semibold mb-6">
          CELOSÍAS
        </h1>

        <p className="text-gray-300 max-w-xl">
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
            className="group relative rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 hover:border-blue-400/40 transition"
          >

            {/* IMAGEN */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

            {/* TEXTO */}
            <div className="absolute bottom-0 p-4 opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-lg font-medium">
                {item.title}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </section>

  </main>
</>

);
}
