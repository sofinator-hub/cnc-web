"use client";
import Image from "next/image";
import { useState } from "react";

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

return ( <main className="bg-white text-gray-900">

```
  {/* SECCIÓN 1 */}
  <section className="min-h-screen flex items-center px-6 md:px-20">
    <div className="grid md:grid-cols-2 gap-10 items-center w-full">

      <div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          SERVICIO DE CORTE LÁSER Y FIBRA
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Maquila de corte láser en acero inoxidable. Puedes hacer todo lo que sea posible con nuestro sistema de corte láser de fibra: joyas, gabinetes electrónicos, decoraciones, tarjetas de identificación y etiquetas, robots, marcadores, relojes, letreros, letras, marcos, arte, modelos, bolsos, juguetes, artículos para el hogar, iluminación, muebles e incluso productos promocionales personalizados.
        </p>
      </div>

      <video className="rounded-2xl shadow-md w-full" autoPlay muted loop playsInline>
        <source src="/videos/video_corte_laser1.mp4" type="video/mp4" />
      </video>

    </div>
  </section>


  {/* SECCIÓN 2 */}
  <section className="min-h-screen flex items-center px-6 md:px-20">
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
  <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

    <h2 className="text-3xl font-semibold mb-8">
      MATERIALES Y ESPESORES
    </h2>

    <div
      className="flex justify-center"
      onMouseMove={(e) => {
        setPos({ x: e.clientX, y: e.clientY });
      }}
    >

      <div className="border rounded-xl overflow-hidden shadow-sm w-full max-w-2xl">

        {materiales.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
            className="flex justify-between px-6 py-4 border-t hover:bg-gray-50 transition cursor-pointer"
          >
            <span>{item.nombre}</span>
            <span>{item.medida}</span>
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
  <section className="min-h-screen flex items-center px-6 md:px-20">

    <div className="grid md:grid-cols-2 gap-8 items-center w-full">

      <video className="rounded-2xl shadow-md w-full" autoPlay muted loop playsInline>
        <source src="/videos/video_grabado_laser1.mp4" type="video/mp4" />
      </video>

      <div className="grid grid-cols-2 gap-4">

        <div className="overflow-hidden rounded-xl group">
          <Image
            src="/foto_grabado1.png"
            width={300}
            height={300}
            alt="Grabado 1"
            className="object-cover w-full h-full group-hover:scale-105 transition"
          />
        </div>

        <div className="overflow-hidden rounded-xl group">
          <Image
            src="/foto_grabado_laser2.jpg"
            width={300}
            height={300}
            alt="Grabado 2"
            className="object-cover w-full h-full group-hover:scale-105 transition"
          />
        </div>

      </div>

    </div>
    
  </section>

</main>

);
}
