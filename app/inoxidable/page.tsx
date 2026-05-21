"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

type Item = {
  img: string;
  title: string;
  desc: string;
};

export default function MobiliarioPage() {
  const [selected, setSelected] = useState<Item | null>(null);

  const products: Item[] = [
    {
      img: "/mesa.webp",
      title: "Mesas de trabajo",
      desc: "Fabricadas para soportar uso intensivo en entornos industriales y alimenticios."
    },
    {
      img: "/tarja.webp", 
      title: "Tarjas industriales",
      desc: "Diseñadas para máxima higiene y resistencia a la corrosión."
    },
    {
      img: "/estante.webp",
      title: "Estantería",
      desc: "Soluciones de almacenamiento resistentes y funcionales."
    },
    {
      img: "/campana.webp",
      title: "Campanas",
      desc: "Acabados profesionales para sistemas de cocina industrial."
    },
    {
      img: "/carro.webp",
      title: "Carros de servicio",
      desc: "Movilidad y resistencia para operaciones de alto rendimiento."
    },
    {
      img: "/gabinete.webp",
      title: "Gabinetes",
      desc: "Diseño personalizado con acabados premium en acero inoxidable."
    }
  ];

  const sectors = [
    {
      title: "plantas industriales",
      img: "/planta.webp"
    },
    {
      title: "Industria alimenticia",
      img: "/food.webp"
    },
    {
      title: "Laboratorios",
      img: "/lab.webp"
    },
    {
      title: "Hospitales",
      img: "/hospital.webp"
    }
  ];

  return (
    <>
      <MobileMenu />

      {/* ================= FONDO ================= */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/fondo_page.webp"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/75" />
      </div>

      <main className="relative z-10 text-gray-900 overflow-hidden">

{/* ================= HERO ================= */}
<section className="min-h-[80vh] flex items-center relative overflow-hidden px-6 md:px-20">

  {/* Fondo */}
  <div className="absolute inset-0">

    <img
      src="/fondo_acero1.webp"
      alt="Fondo acero"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-white/25" />

  </div>

  {/* Glow */}
  <div className="absolute top-10 left-10 w-56 h-56 bg-cyan-300 rounded-full blur-3xl opacity-20" />
  <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-400 rounded-full blur-3xl opacity-20" />

  {/* Contenido */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative z-10"
  >

    <div className="backdrop-blur-lg bg-white/35 border border-white/30 rounded-2xl px-7 py-8 md:px-10 md:py-10 shadow-xl max-w-2xl">

      <span className="uppercase tracking-[0.25em] text-xs text-blue-700">
        Fabricación especializada
      </span>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[0.95] tracking-[0.05em] text-gray-900 mt-4">
        MOBILIARIO
        <br />
        INOXIDABLE
      </h1>

      <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-6 max-w-xl">
        Soluciones en acero inoxidable diseñadas para máxima
        durabilidad, higiene y rendimiento en entornos
        industriales y profesionales.
      </p>

    </div>

  </motion.div>
</section>

        {/* ================= PRODUCTOS ================= */}
        <section className="px-6 md:px-20 py-28">

          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Soluciones fabricadas para alto rendimiento
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Diseñamos mobiliario inoxidable con enfoque en resistencia,
              funcionalidad y acabados profesionales para operaciones exigentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {products.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              >

                <div className="relative overflow-hidden">

                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-[340px] object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition duration-500">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm">
                      Fabricación personalizada
                    </span>
                  </div>

                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                  <button
                    onClick={() => setSelected(item)}
                    className="mt-5 text-blue-600 hover:underline text-sm"
                  >
                    Ver más →
                  </button>

                </div>

              </motion.div>
            ))}

          </div>
        </section>

        {/* ================= EXPLICACIÓN ================= */}
        <section className="bg-gradient-to-b from-gray-100 to-white py-28">

          <div className="grid md:grid-cols-2 gap-16 items-center px-6 md:px-20">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >

              <span className="uppercase tracking-[0.25em] text-sm text-blue-600">
                Calidad industrial
              </span>

              <h2 className="text-4xl md:text-6xl font-semibold mt-4 mb-8 leading-tight">
                Precisión y resistencia en cada pieza
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                El acero inoxidable garantiza higiene, resistencia a la corrosión
                y larga vida útil en entornos industriales y profesionales.
              </p>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  <p>Alta resistencia al desgaste y corrosión</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  <p>Superficies fáciles de sanitizar</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  <p>Diseños personalizados para cada operación</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  <p>Acabados premium de alta precisión</p>
                </div>

              </div>

          </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}

            >

              <img
                src="/acero.webp"
                alt="Acero inoxidable"
                className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
              />


            </motion.div>

          </div>
        </section>

        {/* ================= BENEFICIOS ================= */}
        <section className="px-6 md:px-20 py-28">

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-5xl font-semibold mb-5">
              ¿Por qué elegir acero inoxidable?
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Material diseñado para ofrecer máxima durabilidad,
              higiene y rendimiento en aplicaciones profesionales.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10 text-center">

            {[
              {
                title: "Alta durabilidad",
                text: "Resiste el uso intensivo sin perder calidad ni estética."
              },
              {
                title: "Higiene superior",
                text: "Ideal para entornos que requieren limpieza y sanitización constante."
              },
              {
                title: "Acabado sanitario",
                text: "superficies limpias y pulidas facilitando la limpieza."
              }
            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-3xl shadow-md hover:shadow-2xl transition p-10"
              >

                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-blue-600" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>
        </section>

        {/* ================= SECTORES ================= */}
        <section className="bg-gray-950 text-white py-28 px-6 md:px-20">

          <div className="mb-16 text-center">

            <h2 className="text-3xl md:text-5xl font-semibold mb-5">
              Sectores que atendemos
            </h2>

            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
              Soluciones diseñadas para industrias que requieren
              resistencia, higiene y acabados profesionales.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {sectors.map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl"
              >

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-semibold">
                    {item.title}
                  </h3>
                </div>

              </motion.div>

            ))}

          </div>
        </section>

        {/* ================= CTA FINAL ================= */}
        <section className="py-32 px-6 md:px-20 relative overflow-hidden">

          <div className="absolute inset-0">
            <img
              src="/fondo_acero1.jpg"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/65" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 text-center max-w-4xl mx-auto"
          >

            <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-8">
              Desarrollamos soluciones
              inoxidables adaptadas
              a tu operación
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Fabricación personalizada con acabados profesionales
              para aplicaciones industriales y comerciales.
            </p>

            <button className="bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition duration-300 font-medium">
              Solicitar cotización
            </button>

          </motion.div>
        </section>

        {/* ================= MODAL ================= */}
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-[999] px-4"
          >

            <motion.div
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden relative shadow-2xl"
            >

              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 z-10 bg-white/90 w-10 h-10 rounded-full"
              >
                ✕
              </button>

              <img
                src={selected.img}
                className="w-full h-[320px] object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-semibold mb-4">
                  {selected.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {selected.desc}
                </p>

              </div>

            </motion.div>

          </motion.div>
        )}

      </main>
    </>
  );
}