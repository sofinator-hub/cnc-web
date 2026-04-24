"use client";
import Image from "next/image";

export default function TuboPage() {
return ( <main className="bg-white text-gray-900 min-h-screen px-6 md:px-20 py-16 space-y-24">



 {/* SECCIÓN 1 */}

<section id="inicio" className="min-h-screen flex items-center relative overflow-hidden">

{/* FONDO CINEMATIC */} <img
 src="/fondo_tubo.jpg"
 alt="Fondo tubo"
 className="absolute inset-0 w-full h-full object-cover scale-105 animate-[zoom_12s_ease-in-out_infinite]"
/>

{/* OVERLAY MÁS PRO */}

  <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

{/* CONTENIDO */}

  <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center w-full px-6 md:px-20 text-white">


<div>
  <h1 className="text-3xl md:text-4xl font-semibold mb-4">
    CORTE LÁSER DE TUBO
  </h1>

  <p className="text-gray-200 leading-relaxed">
    La tecnología de corte por láser de tubos optimiza los procesos de fabricación gracias a la obtención de tuberías con cortes precisos que encajan perfectamente con los componentes de tu proyecto.
  </p>
</div>

<div className="relative group">
  <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl rounded-2xl scale-110 group-hover:opacity-30 transition duration-500" />

  <video
    className="relative rounded-2xl shadow-md w-full"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/videos/video_corte_tubo.mp4" type="video/mp4" />
  </video>
</div>

  </div>

{/* ANIMACIÓN */}

  <style jsx>{`
    @keyframes zoom {
      0% { transform: scale(1.05); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1.05); }
    }
  `}</style>

</section>


</main>


);
}
