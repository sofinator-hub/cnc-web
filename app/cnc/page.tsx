"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function CNCPage() {
  const [ref1, v1] = useReveal();
  const [ref2, v2] = useReveal();
  const [ref3, v3] = useReveal();
  const [ref4, v4] = useReveal();

  const data = [
    ["Acero inoxidable", "hasta 12 mm"],
    ["Acero al carbón", "hasta 20 mm"],
    ["Aluminio", "hasta 10 mm"],
    ["Latón", "hasta 6 mm"],
    ["Cobre", "hasta 6 mm"],
  ];

  return (
    <main className="bg-white text-gray-900 min-h-screen px-6 md:px-20 py-16 space-y-32">

      {/* ================= SECCIÓN 1 ================= */}
      <section
        ref={ref1}
        className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          v1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Servicio de Corte Láser y Fibra
          </h1>

          <p className="text-gray-600 leading-relaxed text-lg">
            Maquila de corte láser en acero inoxidable. Desde piezas industriales hasta diseños personalizados: joyas, gabinetes, arte, muebles, iluminación y más.
          </p>
        </div>

        <video
          className="rounded-3xl shadow-xl w-full hover:scale-[1.02] transition duration-500"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/video_corte_laser1.mp4" type="video/mp4" />
        </video>
      </section>


      {/* ================= SECCIÓN 2 ================= */}
      <section
        ref={ref2}
        className={`space-y-12 transition-all duration-1000 ${
          v2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold mb-4">
            Corte Láser de Piezas Industriales
          </h2>

          <p className="text-gray-600">
            Precisión extrema en acero, aluminio y más. Bordes limpios, tolerancias estrictas y resultados de alta calidad para proyectos exigentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-3xl group">
            <Image
              src="/foto_acero1.jpg"
              width={700}
              height={500}
              alt="Acero 1"
              className="object-cover w-full h-full group-hover:scale-110 transition duration-700"
            />
          </div>

          <div className="relative overflow-hidden rounded-3xl group">
            <Image
              src="/foto_acero2.jpg"
              width={700}
              height={500}
              alt="Acero 2"
              className="object-cover w-full h-full group-hover:scale-110 transition duration-700"
            />
          </div>
        </div>
      </section>


      {/* ================= TABLA ================= */}
      <section ref={ref3} className="text-center space-y-12">
        <h2
          className={`text-3xl font-semibold transition-all duration-700 ${
            v3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Materiales y Espesores
        </h2>

        <div className="flex justify-center">
          <div className="relative">

            <div className="absolute inset-0 blur-2xl bg-gray-200 opacity-40 rounded-3xl"></div>

            <table className="relative bg-white/80 backdrop-blur rounded-3xl overflow-hidden shadow-xl border min-w-[320px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-8 py-4 text-left">Material</th>
                  <th className="px-8 py-4 text-left">Capacidad</th>
                </tr>
              </thead>

              <tbody>
                {data.map((item, i) => (
                  <tr
                    key={i}
                    className={`border-t transition-all duration-700 ${
                      v3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    } hover:bg-gray-50`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <td className="px-8 py-4 text-gray-600">{item[0]}</td>
                    <td className="px-8 py-4 font-medium">{item[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* ================= SECCIÓN 4 ================= */}
      <section
        ref={ref4}
        className={`space-y-12 transition-all duration-1000 ${
          v4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-semibold text-center">
          Grabado Láser
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <video
            className="rounded-3xl shadow-xl w-full hover:scale-[1.02] transition duration-500"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/video_grabado_laser1.mp4" type="video/mp4" />
          </video>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-2xl group">
              <Image
                src="/imagenes/foto_grabado1.png"
                width={300}
                height={300}
                alt="Grabado 1"
                className="object-cover w-full h-full group-hover:scale-110 transition"
              />
            </div>

            <div className="overflow-hidden rounded-2xl group">
              <Image
                src="/imagenes/foto_grabado2.jpg"
                width={300}
                height={300}
                alt="Grabado 2"
                className="object-cover w-full h-full group-hover:scale-110 transition"
              />
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}