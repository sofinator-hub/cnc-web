"use client";
import MobileMenu from "@/components/layout/MobileMenu";

export default function NuevaPage() {
  return (
    <>
      <MobileMenu />

      <main className="min-h-screen flex items-center justify-center bg-[#f1f5f9] text-gray-900 px-6">

        <div className="text-center max-w-xl">

          {/* TÍTULO */}
          <h1 className="text-3xl md:text-5xl font-semibold mb-6 tracking-[0.2em]">
            INOXIDABLE
          </h1>

          {/* DESCRIPCIÓN */}
          <p className="text-gray-600 leading-relaxed mb-6">
            Página en desarrollo. Aquí encontrarás información sobre muebles de inoxidable 
          </p>

          {/* LÍNEA DECORATIVA */}
          <div className="w-20 h-[2px] bg-blue-500 mx-auto mb-6" />

          {/* TEXTO EXTRA */}
          <p className="text-sm text-gray-400">
            Próximamente disponible
          </p>

        </div>

      </main>
    </>
  );
}