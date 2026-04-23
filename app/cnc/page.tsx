"use client";
import Image from "next/image";


export default function CNCPage() {
return ( <main className="bg-white text-black">

```
  {/* HERO */}
  <section className="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">

    {/* líneas tipo ingeniería */}
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

    <div className="max-w-3xl animate-fadeUp">
      <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
        Corte Láser
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        Precisión extrema para manufactura moderna.
      </p>
    </div>

  </section>


  {/* VIDEO FULL */}
  <section className="min-h-screen flex items-center justify-center px-6">

    <div className="w-full max-w-5xl animate-fadeUp">
      <video autoPlay muted loop playsInline className="w-full rounded-2xl shadow-xl">
        <source src="/videos/video_corte_laser1.mp4" type="video/mp4" />
      </video>
    </div>

  </section>


  {/* TEXTO + INFO */}
  <section className="min-h-screen flex items-center px-6 md:px-20">

    <div className="grid md:grid-cols-2 gap-16 items-center w-full">

      <div className="animate-fadeLeft">
        <h2 className="text-5xl font-semibold mb-6">
          Tecnología de corte de alta precisión
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Corte láser en acero inoxidable, aluminio y más. 
          Diseñado para aplicaciones industriales donde la precisión es crítica.
        </p>
      </div>

      <div className="animate-fadeRight">
        <Image
          src="/foto_acero1.jpg"
          width={600}
          height={400}
          alt="Acero"
          className="rounded-2xl shadow-lg"
        />
      </div>

    </div>

  </section>


  {/* GALERÍA LIMPIA */}
  <section className="min-h-screen flex items-center px-6 md:px-20">

    <div className="grid md:grid-cols-2 gap-8 w-full">

      <Image
        src="/foto_acero2.jpg"
        width={600}
        height={400}
        alt="Acero"
        className="rounded-2xl hover:scale-105 transition duration-500"
      />

      <Image
        src="/foto_grabado1.png"
        width={600}
        height={400}
        alt="Grabado"
        className="rounded-2xl hover:scale-105 transition duration-500"
      />

    </div>

  </section>


  {/* TABLA MINIMAL */}
  <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">

    <h2 className="text-5xl font-semibold mb-10">
      Materiales
    </h2>

    <div className="border-t border-b w-full max-w-2xl">

      {[
        ["Acero inoxidable", "3/16"],
        ["Acero al carbón", "5/8"],
        ["Aluminio", "3/16"],
        ["Latón y cobre", "3 mm"]
      ].map((item, i) => (
        <div key={i} className="flex justify-between py-4 border-b last:border-none">
          <span>{item[0]}</span>
          <span className="text-gray-500">{item[1]}</span>
        </div>
      ))}

    </div>

  </section>


  {/* GRABADO + CTA */}
  <section className="min-h-screen flex items-center px-6 md:px-20">

    <div className="grid md:grid-cols-2 gap-16 items-center w-full">

      <video autoPlay muted loop playsInline className="w-full rounded-2xl shadow-xl">
        <source src="/videos/video_grabado_laser1.mp4" type="video/mp4" />
      </video>

      <div>
        <h2 className="text-5xl font-semibold mb-6">
          Grabado Láser
        </h2>

        <p className="text-gray-600 mb-8 text-lg">
          Personalización de alta precisión para aplicaciones industriales.
        </p>

        <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
          Solicitar cotización
        </button>
      </div>

    </div>

  </section>


  {/* ANIMACIONES */}
  <style jsx>{`
    .animate-fadeUp {
      animation: fadeUp 1s ease forwards;
    }

    .animate-fadeLeft {
      animation: fadeLeft 1s ease forwards;
    }

    .animate-fadeRight {
      animation: fadeRight 1s ease forwards;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeLeft {
      from { opacity: 0; transform: translateX(-40px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes fadeRight {
      from { opacity: 0; transform: translateX(40px); }
      to { opacity: 1; transform: translateX(0); }
    }
  `}</style>

</main>

);
}
