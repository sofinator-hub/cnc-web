"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      id="servicios"
      className="py-32 bg-gray-50 text-black"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-16">
          Nuestros Servicios
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-4">
              Corte Láser
            </h3>
            <p className="text-gray-600">
              Precisión milimétrica en distintos materiales.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-4">
               Diseño Personalizado
            </h3>
            <p className="text-gray-600">
              Desarrollo de proyectos a medida.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
            whileHover={{ y: -10, scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-4">
              Ingeniería y automatización
            </h3>
            <p className="text-gray-600">
              Desarrollo de proyectos integrales de automatización, industriales y eléctricos
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}