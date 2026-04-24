"use client";
import Image from "next/image";

export default function TuboPage() {
return ( <main className="bg-white text-gray-900 min-h-screen px-6 md:px-20 py-16 space-y-24">



    {/* SECCIÓN 1 */}
    <section id="inicio" className="min-h-screen flex items-center px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        <div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            CORTE LÁSER DE TUBO
          </h1>

          <p className="text-gray-600 leading-relaxed">
            La tecnología de corte por láser de tubos optimiza los procesos de fabricación gracisa a la obtención de tuberías con cortes precisos que encajan perfectamente con los componentes de tu poryecto.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl rounded-2xl scale-110 group-hover:opacity-30 transition duration-500" />
          <video className="relative rounded-2xl shadow-md w-full" autoPlay muted loop playsInline>
            <source src="/videos/video_corte_tubo.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>

</main>


);
}
