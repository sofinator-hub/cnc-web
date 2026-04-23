"use client";
import Image from "next/image";

export default function TuboPage() {
return ( <main className="bg-white text-gray-900 min-h-screen px-6 md:px-20 py-16 space-y-24">


  {/* SECCIÓN TUBO */}
  <section className="min-h-screen flex items-center">
    <div className="grid md:grid-cols-2 gap-10 items-center w-full">

      <div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          CORTE LÁSER DE TUBO
        </h1>

        <p className="text-gray-600 leading-relaxed">
          La tecnología de corte por láser de tubos optimiza los procesos de fabricación gracias a la obtención de tuberías con cortes precisos que encajan perfectamente con los componentes de tu proyecto.
        </p>
      </div>

      <div className="relative group">
        <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl rounded-2xl scale-110 group-hover:opacity-30 transition duration-500" />

        <Image
          src="/foto_tubo1.jpg"
          width={600}
          height={400}
          alt="Corte láser de tubo"
          className="relative rounded-2xl shadow-md w-full object-cover"
        />
      </div>

    </div>
  </section>

</main>


);
}
