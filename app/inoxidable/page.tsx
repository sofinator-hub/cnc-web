"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

type Item = {
  img: string;
  title: string;
};

export default function MobiliarioPage() {
  const [selected, setSelected] = useState<Item | null>(null);

  const products: Item[] = [
    { img: "/mesa.jpg", title: "Mesas de trabajo" },
    { img: "/tarja.jpg", title: "Tarjas industriales" },
    { img: "/estante.jpg", title: "Estantería" },
    { img: "/campana.jpg", title: "Campanas" },
    { img: "/carro.jpg", title: "Carros de servicio" },
    { img: "/gabinete.jpg", title: "Gabinetes" }
  ];

  return (
    <>
      <MobileMenu />

      <main className="min-h-screen bg-white text-gray-900">

{/* ================= HERO ================= */}
<section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden px-4">

  {/* Fondo */}
  <div className="absolute inset-0">
    <img
      src="/fondo_acero1.jpg"
      alt="Fondo acero"
      className="w-full h-full object-cover md:opacity-90"
    />
  </div>

  {/* Glow */}
  <div className="absolute top-10 left-5 w-48 h-48 md:w-80 md:h-80 bg-blue-600 rounded-full blur-3xl opacity-20" />
  <div className="absolute bottom-10 right-5 w-48 h-48 md:w-80 md:h-80 bg-cyan-400 rounded-full blur-3xl opacity-20" />

  {/* CARD  */}
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative z-10 backdrop-blur-xl bg-white/70 border border-white/40 rounded-2xl md:rounded-3xl p-6 md:p-14 max-w-3xl w-full shadow-xl"
  >
    <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 md:mb-6 tracking-[0.15em] md:tracking-[0.3em] text-gray-800 text-center md:text-left leading-tight">
      MOBILIARIO INOXIDABLE
    </h1>

    <p className="text-gray-600 text-sm md:text-base max-w-xl leading-relaxed text-center md:text-left">
      Soluciones en acero inoxidable diseñadas para máxima durabilidad,
      higiene y rendimiento en entornos profesionales.
    </p>
  </motion.div>
</section>

        {/* ================= PRODUCTOS ================= */}
        <section className="px-6 md:px-20 py-20">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {products.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group cursor-pointer"
              >

                <div className="overflow-hidden rounded-2xl">

                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                  <button
                    onClick={() => setSelected(item)}
                    className="text-sm text-blue-600 mt-1 hover:underline"
                  >
                    Ver más →
                  </button>
                </div>

              </motion.div>
            ))}

          </div>
        </section>


        {/* ================= EXPLICACIÓN ================= */}
        <section className="bg-gray-100 py-24">

          <div className="grid md:grid-cols-2 gap-12 items-center px-6 md:px-20">
        
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-semibold mb-6">
                Precisión y resistencia en cada pieza
              </h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                El acero inoxidable garantiza higiene, resistencia a la corrosión
                y durabilidad en entornos exigentes.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Diseñado con procesos de alta precisión, cada producto ofrece
                acabados profesionales y funcionalidad superior.
              </p>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}

            >

              <img
                src="/acero.jpg"
                alt="Acero inoxidable"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
              />


            </motion.div>

          </div>
        </section>


{/* ================= NUEVA SECCIÓN  ================= */}
<section className="px-6 md:px-20 py-24">

  <h2 className="text-2xl md:text-4xl font-semibold mb-12 text-center">
    ¿Por qué elegir acero inoxidable?
  </h2>

  <div className="grid md:grid-cols-3 gap-10 text-center">

    {/* ITEM 1 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="p-6 rounded-2xl hover:bg-gray-50 transition"
    >
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100">
          {/* ICONO */}
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Alta durabilidad</h3>
      <p className="text-gray-600 text-sm">
        Resiste el uso intensivo sin perder calidad ni estética.
      </p>
    </motion.div>

    {/* ITEM 2 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="p-6 rounded-2xl hover:bg-gray-50 transition"
    >
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Higiene superior</h3>
      <p className="text-gray-600 text-sm">
        Superficie fácil de limpiar ideal para entornos profesionales.
      </p>
    </motion.div>

    {/* ITEM 3 */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="p-6 rounded-2xl hover:bg-gray-50 transition"
    >
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 7h18M3 12h18M3 17h18" />
          </svg>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Diseño funcional</h3>
      <p className="text-gray-600 text-sm">
        Pensado para optimizar espacios y procesos de trabajo.
      </p>
    </motion.div>

  </div>
</section>

        {/* ================= MODAL ================= */}
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999] px-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-2xl max-w-xl w-full p-6 relative"
            >

              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3"
              >
                ✕
              </button>

              <img
                src={selected.img}
                className="w-full h-[250px] object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-semibold">
                {selected.title}
              </h3>

              <p className="text-gray-600 mt-2">
                Información detallada del producto en acero inoxidable.
              </p>

            </motion.div>
          </motion.div>
        )}

      </main>
    </>
  );
}