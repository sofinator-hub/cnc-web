"use client";

import MobileMenu from "../components/layout/MobileMenu";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Experience from "../components/sections/Experience";
import Gallery from "../components/sections/Gallery";



export default function Home() {
  return (
    <main className="relative text-gray-900">

      {/* FONDO GLOBAL */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/fondo_blanco.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <MobileMenu />

      <Hero />

      {/* ================= NUEVA SECCIÓN  ================= */}
      <section className="px-6 md:px-20 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Soluciones industriales completas
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Integramos corte, fabricación, automatización y diseño para desarrollar
          proyectos industriales eficientes y personalizados.
        </p>
      </section>

      <Services />

      {/* ================= NUEVA SECCIÓN ================= */}
      <section className="px-6 md:px-20 py-20">
        <div className="grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="font-semibold mb-2">Alta precisión</h3>
            <p className="text-gray-600 text-sm">
              Procesos industriales con resultados exactos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Diseño a medida</h3>
            <p className="text-gray-600 text-sm">
              Soluciones adaptadas a cada proyecto.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Tecnología avanzada</h3>
            <p className="text-gray-600 text-sm">
              Equipos modernos para máxima eficiencia.
            </p>
          </div>

        </div>
      </section>

      <Experience />

      <Gallery />

      {/* ================= CTA FINAL ================= */}
      <section className="px-6 md:px-20 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          ¿Tienes un proyecto en mente?
        </h2>

        <p className="text-gray-600 mb-6">
          Contáctanos y desarrolla una solución industrial a tu medida.
        </p>

        <a
          href="https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar"
          target="_blank"
          className="bg-black text-white px-8 py-3 rounded-xl"
        >
          Cotizar proyecto
        </a>
      </section>

    </main>
  );
}
