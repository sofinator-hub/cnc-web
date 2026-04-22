"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function CNCPage() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
      <section className="reveal grid md:grid-cols-2 gap-12 items-center opacity-0 translate-y-10 transition-all duration-1000">
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Servicio de Corte Láser y Fibra
          </h1>

          <p className="text-gray-600 text-lg">
            Maquila de corte láser en acero inoxidable con alta precisión y calidad industrial.
          </p>
        </div>

        <video
          className="rounded-3xl shadow-xl w-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/video_corte_laser1.mp4" type="video/mp4" />
        </video>
      </section>


      {/* ================= SECCIÓN 2 ================= */}
      <section className="reveal space-y-12 opacity-0 translate-y-10 transition-all duration-1000">

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Corte Láser de Piezas Industriales
          </h2>

          <p className="text-gray-600 max-w-3xl">
            Precisión extrema en acero, aluminio y más.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Image src="/foto_acero1.jpg" width={700} height={500} alt="1" className="rounded-3xl"/>
          <Image src="/foto_acero2.jpg" width={700} height={500} alt="2" className="rounded-3xl"/>
        </div>

      </section>


      {/* ================= TABLA ================= */}
      <section className="reveal text-center space-y-12 opacity-0 translate-y-10 transition-all duration-1000">

        <h2 className="text-3xl font-semibold">
          Materiales y Espesores
        </h2>

        <div className="flex justify-center">
          <table className="bg-white rounded-3xl shadow-xl border overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-8 py-4">Material</th>
                <th className="px-8 py-4">Capacidad</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, i) => (
                <tr key={i} className="border-t hover:bg-gray-50 transition">
                  <td className="px-8 py-4">{item[0]}</td>
                  <td className="px-8 py-4 font-medium">{item[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>


      {/* ================= SECCIÓN 4 ================= */}
      <section className="reveal space-y-12 opacity-0 translate-y-10 transition-all duration-1000">

        <h2 className="text-3xl font-semibold text-center">
          Grabado Láser
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <video
            className="rounded-3xl shadow-xl w-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/video_grabado_laser1.mp4" type="video/mp4" />
          </video>

          <div className="grid grid-cols-2 gap-4">
            <Image src="/imagenes/foto_grabado1.png" width={300} height={300} alt="1"/>
            <Image src="/imagenes/foto_grabado2.jpg" width={300} height={300} alt="2"/>
          </div>

        </div>

      </section>

    </main>
  );
}