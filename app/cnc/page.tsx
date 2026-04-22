"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CNCPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main className="bg-white text-gray-900 min-h-screen px-6 md:px-20 py-16 space-y-32">

      {/* ================= HERO ================= */}
      <section className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
          Corte y Grabado CNC de Alta Precisión
        </h1>
        <p className="text-gray-500 text-lg">
          Tecnología, precisión y diseño para transformar tus ideas en productos reales.
        </p>
      </section>


      {/* ================= SECCIÓN 1 ================= */}
      <section className="grid md:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">
            SERVICIO DE CORTE LÁSER Y FIBRA
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Maquila de corte láser en acero inoxidable. Puedes hacer todo lo que sea posible con nuestro sistema de corte láser de fibra: joyas, gabinetes electrónicos, decoraciones, tarjetas de identificación, robots, letreros, arte, muebles y productos promocionales personalizados.
          </p>
        </div>

        <video
          className="rounded-3xl shadow-lg w-full hover:scale-[1.02] transition duration-500"
          controls
        >
          <source src="/video_corte_laser1.mp4" type="video/mp4" />
        </video>
      </section>
    


      {/* ================= SECCIÓN 2 ================= */}
      <section className="space-y-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">
            CORTE LÁSER DE PIEZAS INDUSTRIALES
          </h2>

          <p className="text-gray-600">
            La tecnología de corte por láser permite trabajar con acero al carbón, aluminio y acero inoxidable con máxima precisión, bordes limpios y tolerancias estrictas.
          </p>
        </div>

        {/* GRID PREMIUM */}
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="relative group overflow-hidden rounded-3xl">
            <Image
              src="/foto_acero1.jpg"
              width={700}
              height={500}
              alt="Acero_1"
              className="object-cover w-full h-full group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
          </div>

          <div className="relative group overflow-hidden rounded-3xl">
            <Image
              src="/foto_acero2.jpg"
              width={700}
              height={500}
              alt="Acero_2"
              className="object-cover w-full h-full group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
          </div>

        </div>
      
      </section>


      {/* ================= TABLA PREMIUM ================= */}
      <section className="text-center space-y-10">
        <h2 className="text-3xl font-semibold">
          Materiales y Espesores
        </h2>

        <div className="flex justify-center">
          <div className="rounded-3xl border shadow-sm overflow-hidden backdrop-blur bg-white/80">
            
            <table className="min-w-[300px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-8 py-4 text-left font-medium">Material</th>
                  <th className="px-8 py-4 text-left font-medium">Calibre Máximo</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Acero inoxidable", "----"],
                  ["Acero al carbón", "----"],
                  ["Aluminio", "----"],
                  ["Latón", "----"],
                  ["Cobre", "----"],
                ].map((item, i) => (
                  <tr
                    key={i}
                    className="border-t hover:bg-gray-50 transition-all duration-300 hover:scale-[1.01]"
                  >
                    <td className="px-8 py-4">{item[0]}</td>
                    <td className="px-8 py-4">{item[1]}</td>
                  </tr>
                ))}
              </tbody>
            
            </table>
          

          </div>
        </div>
      </section>


      {/* ================= SECCIÓN 4 ================= */}
      <section className="space-y-12">
        <h2 className="text-3xl font-semibold text-center">
          Grabado Láser
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <video
            className="rounded-3xl shadow-lg w-full hover:scale-[1.02] transition duration-500"
            controls
          >
            <source src="/video_grabado_laser1.mp4" type="video/mp4" />
          </video>

          <div className="grid grid-cols-2 gap-4">
            
            <div className="overflow-hidden rounded-2xl group">
              <Image
                src="/foto_grabado1.jpg"
                width={300}
                height={300}
                alt="Grabado_1"
                className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-2xl group">
              <Image
                src="/foto_grabado2.jpg"
                width={300}
                height={300}
                alt="Grabado_2"
                className="object-cover w-full h-full group-hover:scale-110 transition duration-500"
              />
            </div>

          </div>
        
        </div>
      
      </section>

    </main>
  );
}