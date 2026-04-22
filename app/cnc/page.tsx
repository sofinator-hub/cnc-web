"use client";
import Image from "next/image";

export default function CNCPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen px-6 md:px-20 py-16 space-y-16">

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
          
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/foto_acero1.jpg"
              width={600}
              height={400}
              alt="Acero 1"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/foto_acero2.jpg"
              width={600}
              height={400}
              alt="Acero 2"
              className="object-cover w-full h-full"
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
                <th className="px-6 py-3 text-left">Capacidad</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Acero inoxidable", "hasta 12 mm"],
                ["Acero al carbón", "hasta 20 mm"],
                ["Aluminio", "hasta 10 mm"],
                ["Latón", "hasta 6 mm"],
                ["Cobre", "hasta 6 mm"],
              ].map((item, i) => (
                <tr key={i} className="border-t">
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

            <div className="overflow-hidden rounded-xl">
              <Image
                src="/imagenes/foto_grabado1.png"
                width={300}
                height={300}
                alt="Grabado 1"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="overflow-hidden rounded-xl">
              <Image
                src="/imagenes/foto_grabado2.jpg"
                width={300}
                height={300}
                alt="Grabado 2"
                className="object-cover w-full h-full"
              />
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}