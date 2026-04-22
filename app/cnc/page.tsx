"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CNCPage() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const data = [
    ["Acero inoxidable", "hasta 12 mm"],
    ["Acero al carbón", "hasta 20 mm"],
    ["Aluminio", "hasta 10 mm"],
    ["Latón", "hasta 6 mm"],
    ["Cobre", "hasta 6 mm"],
  ];

  return (
    <main className="bg-white text-gray-900 min-h-screen px-6 md:px-20 py-16 space-y-24">

      {/* SECCIÓN 1 */}
      <section className={`grid md:grid-cols-2 gap-10 items-center transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
        
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            SERVICIO DE CORTE LÁSER Y FIBRA
          </h1>

          <p className="text-gray-600">
            Maquila de corte láser en acero inoxidable con alta precisión y calidad industrial.
          </p>
        </div>

        <video autoPlay muted loop playsInline className="rounded-2xl w-full">
          <source src="/videos/video_corte_laser1.mp4" type="video/mp4" />
        </video>
      </section>


      {/* SECCIÓN 2 */}
      <section className={`space-y-8 transition-all duration-1000 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}>
        
        <h2 className="text-3xl font-semibold">
          CORTE LÁSER DE PIEZAS INDUSTRIALES
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Image src="/foto_acero1.jpg" width={600} height={400} alt="1" />
          <Image src="/foto_acero2.jpg" width={600} height={400} alt="2" />
        </div>

      </section>


      {/* TABLA */}
      <section className={`text-center transition-all duration-1000 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}>
        
        <h2 className="text-3xl font-semibold mb-6">
          MATERIALES Y ESPESORES
        </h2>

        <table className="mx-auto border rounded-xl shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3">Material</th>
              <th className="px-6 py-3">Capacidad</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-t">
                <td className="px-6 py-3">{item[0]}</td>
                <td className="px-6 py-3">{item[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </section>


      {/* SECCIÓN 4 */}
      <section className={`space-y-8 transition-all duration-1000 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
        
        <h2 className="text-3xl font-semibold text-center">
          GRABADO LÁSER
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          <video autoPlay muted loop playsInline className="rounded-2xl w-full">
            <source src="/videos/video_grabado_laser1.mp4" type="video/mp4" />
          </video>

          <div className="grid grid-cols-2 gap-4">
            <Image src="/imagenes/foto_grabado1.png" width={300} height={300} alt="1" />
            <Image src="/imagenes/foto_grabado2.jpg" width={300} height={300} alt="2" />
          </div>

        </div>

      </section>

    </main>
  );
}