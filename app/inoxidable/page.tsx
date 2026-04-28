"use client";
import { motion } from "framer-motion";
import MobileMenu from "@/components/layout/MobileMenu";

export default function MobiliarioPage() {

  const products = [
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
        <section className="min-h-[80vh] flex items-center justify-center relative px-6 md:px-20">

          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-semibold mb-6 tracking-[0.2em]"
            >
              MOBILIARIO
            </motion.h1>

            <p className="text-gray-600 max-w-2xl leading-relaxed text-sm md:text-base">
              Soluciones en acero inoxidable diseñadas para máxima durabilidad,
              higiene y rendimiento en entornos profesionales.
            </p>
          </div>
        </section>


        {/* ================= PRODUCTOS ================= */}
        <section className="px-6 md:px-20 pb-20">

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

                  <button className="text-sm text-blue-600 mt-1 hover:underline">
                    Ver más →
                  </button>
                </div>

              </motion.div>
            ))}

          </div>
        </section>


        {/* ================= SECCIÓN DEL MEDIO (EXPLICACIÓN) ================= */}
        <section className="px-6 md:px-20 py-24 bg-gray-50">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-4xl font-semibold mb-6">
                Precisión y resistencia en cada pieza
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                El acero inoxidable es el material ideal para entornos donde la higiene,
                la durabilidad y la resistencia son fundamentales. Nuestros productos están
                diseñados para ofrecer un desempeño superior incluso en condiciones exigentes.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Cada pieza se fabrica con procesos de corte y ensamblaje de alta precisión,
                garantizando acabados limpios, funcionales y estéticamente profesionales.
              </p>
            </motion.div>

            {/* IMAGEN */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src="/acero.jpg"
                alt="Acero inoxidable"
                loading="lazy"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </motion.div>

          </div>
        </section>


        {/* ================= SECCIÓN FINAL (VALOR) ================= */}
        <section className="px-6 md:px-20 py-24">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-4xl font-semibold mb-8"
          >
            Diseñado para entornos profesionales
          </motion.h2>

          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Nuestro mobiliario en acero inoxidable está pensado para cocinas industriales,
            laboratorios, hospitales y espacios arquitectónicos donde la funcionalidad y la
            limpieza son esenciales. Ofrecemos soluciones personalizadas adaptadas a cada proyecto.
          </p>

        </section>

      </main>
    </>
  );
}