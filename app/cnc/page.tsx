"use client";
import Image from "next/image";


export default function CNCPage() {
 
  return (
    <main className="bg-black text-white h-screen overflow-y-scroll snap-y snap-mandatory">

      {/* ================= HERO ================= */}
      <section className="min-h-screen snap-start flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest">
            CORTE LÁSER
          </h1>

          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            Precisión industrial en acero inoxidable, aluminio y más.
          </p>
        </div>
      </section>


      {/* ================= SERVICIO ================= */}
      <section className="min-h-screen snap-start flex items-center px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center w-full">

          <div>
            <h2 className="text-4xl font-semibold mb-4">
              SERVICIO DE CORTE LÁSER Y FIBRA
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Maquila de corte láser en acero inoxidable. Puedes crear piezas industriales, decoración, gabinetes electrónicos, señalización, estructuras, muebles y productos personalizados con alta precisión.
            </p>
          </div>

          <video
            className="rounded-2xl shadow-xl w-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/video_corte_laser1.mp4" type="video/mp4" />
          </video>

        </div>
      </section>


      {/* ================= INDUSTRIAL ================= */}
      <section className="min-h-screen snap-start flex items-center px-6 md:px-20">
        <div className="w-full space-y-10">

          <h2 className="text-4xl font-semibold text-center">
            PIEZAS INDUSTRIALES
          </h2>



          <div className="grid md:grid-cols-2 gap-6">

            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/foto_acero1.jpg"
                width={600}
                height={400}
                alt="Acero"
                className="object-cover w-full h-full hover:scale-105 transition duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/foto_acero2.jpg"
                width={600}
                height={400}
                alt="Acero"
                className="object-cover w-full h-full hover:scale-105 transition duration-500"
              />
            </div>

          </div>

        </div>

      </section>


      {/* ================= MATERIALES ================= */}
      <section className="min-h-screen snap-start flex flex-col justify-center items-center px-6 text-center">
        <h2 className="text-4xl font-semibold mb-10">
          MATERIALES Y ESPESORES
        </h2>

        <table className="border border-gray-700 rounded-xl overflow-hidden">
          <tbody>
            {[
              ["Acero inoxidable", "3/16 (5mm)"],
              ["Acero al carbón", "5/8 (16mm)"],
              ["Aluminio", "3/16 (5mm)"],
              ["Latón y cobre", "3 mm"]
            ].map((item, i) => (
              <tr key={i} className="border-b border-gray-700">
                <td className="px-6 py-4">{item[0]}</td>
                <td className="px-6 py-4 text-gray-400">{item[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>


      {/* ================= CORTE DE TUBO ================= */}
      <section className="min-h-screen snap-start flex items-center justify-center text-center px-6">
        <div>
          <h2 className="text-5xl font-bold">
            CORTE DE TUBO
          </h2>

          <p className="mt-6 text-gray-400 max-w-xl">
            Tecnología especializada para corte preciso en estructuras tubulares y perfiles metálicos.
          </p>
        </div>
      </section>


      {/* ================= GRABADO ================= */}
      <section className="min-h-screen snap-start flex items-center px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center w-full">

          <video
            className="rounded-2xl shadow-xl w-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/video_grabado_laser1.mp4" type="video/mp4" />
          </video>

          <div>
            <h2 className="text-4xl font-semibold mb-4">
              GRABADO LÁSER
            </h2>

            <p className="text-gray-400">
              Personalización de alta precisión para piezas industriales, identificación y diseño.
            </p>
          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="min-h-screen snap-start flex items-center justify-center text-center px-6">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            COTIZA TU PROYECTO
          </h2>

          <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
            Solicitar cotización
          </button>
        </div>
      </section>

    </main>
  );
}