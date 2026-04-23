"use client";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "@/components/layout/MobileMenu";

type Material = {
nombre: string;
medida: string;
img: string;
};

export default function CNCPage() {
const [hovered, setHovered] = useState<Material | null>(null);
const [pos, setPos] = useState({ x: 0, y: 0 });

const materiales: Material[] = [
{
nombre: "Acero inoxidable",
medida: "3/16 (5mm)",
img: "/materiales/acero_inoxidable.jpg"
},
{
nombre: "Acero al carbón",
medida: "5/8 (16mm)",
img: "/materiales/acero_carbon.jpg"
},
{
nombre: "Aluminio",
medida: "3/16 (5mm)",
img: "/materiales/aluminio.jpg"
},
{
nombre: "Latón y cobre",
medida: "3 mm",
img: "/materiales/laton_cobre.jpg"
}
];

return (
<> <MobileMenu />

```
  <main className="bg-white text-gray-900">

    {/* SECCIÓN 1 */}
    <section id="inicio" className="min-h-screen flex items-center px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        <div>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            SERVICIO DE CORTE LÁSER Y FIBRA
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Maquila de corte láser en acero inoxidable. Puedes hacer todo lo que sea posible con nuestro sistema de corte láser de fibra: joyas, gabinetes electrónicos, decoraciones, tarjetas de identificación y etiquetas, robots, marcadores, relojes, letreros, letras, marcos, arte, modelos, bolsos, juguetes, artículos para el hogar, iluminación, muebles e incluso productos promocionales personalizados.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl rounded-2xl scale-110 group-hover:opacity-30 transition duration-500" />
          <video className="relative rounded-2xl shadow-md w-full" autoPlay muted loop playsInline>
            <source src="/videos/video_corte_laser1.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>


    {/* SECCIÓN 2 */}
    <section id="industrial" className="min-h-screen flex items-center px-6 md:px-20">
      <div className="w-full space-y-8">

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

      </div>
    </section>


    {/* TABLA */}
    <section id="materiales" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)] bg-[size:50px_50px]" />

      <h2 className="text-3xl font-semibold mb-8 relative z-10">
        MATERIALES Y ESPESORES
      </h2>

      <div
        className="flex justify-center relative z-10"
        onMouseMove={(e) => {
          setPos({ x: e.clientX, y: e.clientY });
        }}
      >

        <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-md w-full max-w-2xl">

          {materiales.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(item)}
              onMouseLeave={() => setHovered(null)}
              className="flex justify-between px-6 py-4 border-b last:border-none hover:bg-white transition cursor-pointer"
            >
              <span className="font-medium">{item.nombre}</span>
              <span className="text-gray-500">{item.medida}</span>
            </div>
          ))}

        </div>

        {hovered && (
          <div
            className="pointer-events-none fixed z-50"
            style={{
              top: pos.y + 15,
              left: pos.x + 15
            }}
          >
            <Image
              src={hovered.img}
              alt={hovered.nombre}
              width={160}
              height={160}
              className="object-cover rounded-xl shadow-xl border"
            />
          </div>
        )}

      </div>
    </section>


    {/* SECCIÓN 4 */}
    <section id="grabado" className="min-h-screen flex items-center px-6 md:px-20">

      <div className="grid md:grid-cols-2 gap-10 items-center w-full">

        <div className="relative group">
          <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl rounded-2xl scale-110 group-hover:opacity-30 transition duration-500" />
          <video className="relative rounded-2xl shadow-md w-full" autoPlay muted loop playsInline>
            <source src="/videos/video_grabado_laser1.mp4" type="video/mp4" />
          </video>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4">
            GRABADO LÁSER
          </h2>

          <p className="text-gray-600 mb-6">
            Personalización de alta precisión para piezas industriales, identificación y diseño.
          </p>

          <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
            Solicitar cotización
          </button>
        </div>

{/* SECCIÓN TUBO */}

<section className="min-h-screen flex items-center justify-center relative overflow-hidden">

{/* VIDEO FONDO */}
<video
className="absolute inset-0 w-full h-full object-cover"
autoPlay
muted
loop
playsInline

>


<source src="/videos/video_tubo2.mp4" type="video/mp4" />


  </video>

{/* OVERLAY */}

  <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />

{/* CONTENIDO */}

  <div className="relative z-10 text-center px-6 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold mb-4">

  CORTE LÁSER DE TUBO
</h2>

<p className="text-gray-700 mb-6">
  Corte de tubos y perfiles con alta precisión para aplicaciones industriales, estructuras y mobiliario.
</p>

<a
  href="/tubo"
  className="inline-block px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition"
>
  Ver más
</a>


  </div>

</section>



  </div>

</section>

  </main>
</>


);
}
