"use client";
import Image from "next/image";


export default function CNCPage() {
  
  return (
    <main className="bg-white text-gray-900 min-h-screen px-6 md:px-20 py-16 space-y-24">

      {/* ================= SECCIÓN 1 ================= */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            SERVICIO DE CORTE LÁSER Y FIBRA
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Maquila de corte láser en acero inoxidable. Puedes hacer todo lo que sea posible con nuestro sistema de corte láser de fibra: joyas, gabinetes electrónicos, decoraciones, tarjetas de identificación y etiquetas, robots, marcadores, relojes, letreros, letras, marcos, arte, modelos, bolsos, juguetes, artículos para el hogar, iluminación, muebles e incluso productos promocionales personalizados.
          </p>
        </div>

        {/* VIDEO FIX */}
        <video
  className="rounded-2xl shadow-md w-full"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/videos/video_corte_laser1.mp4" type="video/mp4" />
</video>
      </section>



      {/* ================= SECCIÓN 2 ================= */}
      <section className="space-y-8">

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            CORTE LÁSER DE PIEZAS INDUSTRIALES
          </h2>

          <p className="text-gray-600 max-w-3xl">
            La tecnología de corte por láser es un proceso excelente para cortar acero al carbón, aleaciones de aluminio y acero inoxidable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="overflow-hidden rounded-2xl group">
            <Image
              src="/foto_acero1.jpg"
              width={600}
              height={400}
              alt="Acero 1"
              className="object-cover w-full h-full group-hover:scale-105 transition"
            />
          
          </div>

          <div className="overflow-hidden rounded-2xl group">
            <Image
              src="/foto_acero2.jpg"
              width={600}
              height={400}
              alt="Acero 2"
              className="object-cover w-full h-full group-hover:scale-105 transition"
            />
          
          </div>

        </div>
      
      </section>


      {/* ================= TABLA ================= */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-semibold">
          MATERIALES Y ESPESORES
        </h2>

        <div className="flex justify-center">
          <table className="border rounded-xl overflow-hidden shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left">Material</th>
                <th className="px-6 py-3 text-left">Calibre Máximo</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Acero inoxidable", "3/16 (5mm)"],
                ["Acero al carbón", "5/8 (16mm)"],
                ["Aluminio", "3/16 (5mm)"],
                ["Latón y cobre", "3 mm"]

              ].map((item, i) => (
                <tr key={i} className="border-t hover:bg-gray-50 transition">
                  <td className="px-6 py-3">{item[0]}</td>
                  <td className="px-6 py-3">{item[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>


      {/* ================= SECCIÓN 4 ================= */}
      <section className="space-y-10">

        <h2 className="text-3xl font-semibold text-center">
          GRABADO LÁSER
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* VIDEO FIX */}
          <video
  className="rounded-2xl shadow-md w-full"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/videos/video_grabado_laser1.mp4" type="video/mp4" />
</video>

          <div className="grid grid-cols-2 gap-4">

            <div className="overflow-hidden rounded-xl group">
              <Image
                src="/foto_grabado1.png"
                width={300}
                height={300}
                alt="Grabado_1"
                className="object-cover w-full h-full group-hover:scale-105 transition"
              />
            </div>

            <div className="overflow-hidden rounded-xl group">
              <Image
                src="/foto_grabado_laser2.jpg"
                width={300}
                height={300}
                alt="Grabado_2"
                className="object-cover w-full h-full group-hover:scale-105 transition"
              />
            </div>

          </div>

        </div>
      
      </section>

    </main>
  );
}