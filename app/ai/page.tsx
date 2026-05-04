"use client";

import AISection from "@/components/sections/AISection";
import MobileMenu from "@/components/layout/MobileMenu";

export default function AIPage() {
  return (
    <>
      <MobileMenu />

      {/* FONDO */}
      <div className="fixed inset-0 -z-10">
        <img src="/fondo_blanco.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <main className="relative z-10 px-6 md:px-20 py-20 text-gray-900">

        <div className="max-w-3xl mb-16">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">
            Diseña tu proyecto con IA
          </h1>

          <p className="text-gray-600">
            Genera un previo visual de celosías y guardas industriales en segundos.
            Este diseño es una referencia inicial que nuestro equipo puede desarrollar
            a nivel real.
          </p>
        </div>

        <AISection />

      </main>
    </>
  );
}