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
      img: "/mesa.jpg",
      title: "Mesas de trabajo",
      desc: "Fabricadas para soportar uso intensivo en entornos industriales y alimenticios."
    },
    {
      img: "/tarja.jpg",
      title: "Tarjas industriales",
      desc: "Diseñadas para máxima higiene y resistencia a la corrosión."
    },
    {
      img: "/estante.jpg",
      title: "Estantería",
      desc: "Soluciones de almacenamiento resistentes y funcionales."
    },
    {
      img: "/campana.jpg",
      title: "Campanas",
      desc: "Acabados profesionales para sistemas de cocina industrial."
    },
    {
      img: "/carro.jpg",
      title: "Carros de servicio",
      desc: "Movilidad y resistencia para operaciones de alto rendimiento."
    },
    {
      img: "/gabinete.jpg",
      title: "Gabinetes",
      desc: "Diseño personalizado con acabados premium en acero inoxidable."
    }
  ];

  const sectors = [
    {
      title: "Restaurantes",
      img: "/restaurant.jpg"
    },
    {
      title: "Industria alimenticia",
      img: "/food.jpg"
    },
    {
      title: "Laboratorios",
      img: "/lab.jpg"
    },
    {
      title: "Hospitales",
      img: "/hospital.jpg"
    }
  ];

  return (
    <>
      <MobileMenu />

      {/* ================= FONDO ================= */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/fondo_blanco.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/75" />
      </div>

      <main className="relative z-10 text-gray-900 overflow-hidden">

{/* ================= HERO ================= */}
<section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-4">

  {/* Fondo */}
  <div className="absolute inset-0">

    <img
      src="/fondo_acero1.jpg"
      alt="Fondo acero"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-white/35" />

  </div>

  {/* Glow */}
  <div className="absolute top-10 left-5 w-72 h-72 bg-cyan-300 rounded-full blur-3xl opacity-20" />
  <div className="absolute bottom-10 right-5 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20" />

  {/* Contenido */}
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="relative z-10 max-w-6xl w-full"
  >

    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Texto */}
      <div className="backdrop-blur-xl bg-white/55 border border-white/40 rounded-3xl p-8 md:p-14 shadow-2xl">

        <span className="uppercase tracking-[0.3em] text-sm text-blue-700">
          Fabricación especializada
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold mt-5 leading-[0.95] tracking-[0.08em] text-gray-900">
          MOBILIARIO
          <br />
          INOXIDABLE
        </h1>

        <p className="text-gray-700 mt-8 text-base md:text-lg leading-relaxed max-w-xl">
          Soluciones en acero inoxidable diseñadas para
          máxima durabilidad, higiene y rendimiento
          en entornos industriales y profesionales.
        </p>

        {/* Barra técnica */}
        <div className="flex flex-wrap gap-3 mt-8">

          <div className="px-4 py-2 rounded-full bg-white/70 border border-gray-200 text-sm">
            Acero 304 / 316
          </div>

          <div className="px-4 py-2 rounded-full bg-white/70 border border-gray-200 text-sm">
            Fabricación personalizada
          </div>

          <div className="px-4 py-2 rounded-full bg-white/70 border border-gray-200 text-sm">
            Acabados sanitarios
          </div>

        </div>

      </div>

      {/* Imagen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="hidden md:block"
      >

        <img
          src="/mesa.jpg"
          alt="Mobiliario inoxidable"
          className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
        />

      </motion.div>

    </div>

  </motion.div>
</section>

          {/* Glow */}
          <div className="absolute top-10 left-5 w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-5 w-72 h-72 bg-blue-700 rounded-full blur-3xl opacity-20" />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 backdrop-blur-xl bg-white/15 border border-white/20 rounded-3xl p-8 md:p-16 max-w-5xl w-full shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-[0.95] tracking-[0.12em] text-white">
                  MOBILIARIO
                  <br />
                  INOXIDABLE
                  <br />
                  INDUSTRIAL
                </h1>

                <p className="text-white/80 mt-8 text-sm md:text-lg leading-relaxed max-w-xl">
                  Fabricación de mobiliario en acero inoxidable para
                  entornos industriales, alimenticios y profesionales
                  donde la higiene, resistencia y precisión son esenciales.
                </p>

                <div className="flex flex-wrap gap-4 mt-8">

                  <div className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white text-sm">
                    Acero 304 y 316
                  </div>

                  <div className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white text-sm">
                    Fabricación personalizada
                  </div>

                  <div className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-white text-sm">
                    Acabados sanitarios
                  </div>

                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="hidden md:block"
              >
                <img
                  src="/mesa.jpg"
                  alt="Mobiliario inoxidable"
                  className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
                />
              </motion.div>

            </div>
          </motion.div>
          

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
                src="/acero.jpg"
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
                title: "Diseño funcional",
                text: "Optimiza espacios y mejora la eficiencia operativa."
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