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
      img: "/materiales/acero_inoxidable.jpg",
    },
    {
      nombre: "Acero al carbón",
      medida: "5/8 (16mm)",
      img: "/materiales/acero_carbon.jpg",
    },
    {
      nombre: "Aluminio",
      medida: "3/16 (5mm)",
      img: "/materiales/aluminio.jpg",
    },
    {
      nombre: "Latón y cobre",
      medida: "3 mm",
      img: "/materiales/laton_cobre.jpg",
    },
  ];

  return (
    <>
      <MobileMenu />

      {/* FONDO */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/fondo_laser_claro.jpg"
          alt=""
          className="w-full h-full object-cover"
        /> 
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <main className="relative z-10 text-gray-900">

        {/* HERO */}
        <section className="py-24 px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-28 items-center w-full max-w-7xl mx-auto">

            {/* TEXTO */}
            <div>
              <h1 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">
                SERVICIO DE CORTE LÁSER Y FIBRA
              </h1>

              <p className="text-gray-700 leading-relaxed text-lg max-w-xl">
                Maquila de corte láser en acero inoxidable.
                Puedes hacer todo lo que sea posible con nuestro
                sistema de corte láser de fibra.
              </p>
            </div>


{/* VIDEO */}
<div className="flex justify-center md:justify-end">

  <video
    className="w-[250px] rounded-2xl shadow-xl"
    autoPlay
    muted
    loop
    playsInline
  >
    <source
      src="/videos/video_lasercito.mp4"
      type="video/mp4"
    />
  </video>
  </div>

</div> 
</section>

        {/* SECCIÓN 2 */}
        <section className="py-24 px-6 md:px-20">
          <div className="w-full max-w-7xl mx-auto space-y-10">

            <div>
              <h2 className="text-3xl font-semibold mb-4">
                CORTE LÁSER DE PIEZAS INDUSTRIALES
              </h2>

              <p className="text-gray-700 max-w-3xl">
                Tecnología de corte de alta precisión para materiales industriales.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="overflow-hidden rounded-2xl group shadow-xl">
                <Image
                  src="/chispas_laser1.jpg"
                  width={600}
                  height={400}
                  alt=""
                  className="
                    object-cover
                    w-full
                    h-full
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />
              </div>

              <div className="overflow-hidden rounded-2xl group shadow-xl">
                <Image
                  src="/foto_acero2.jpg"
                  width={600}
                  height={400}
                  alt=""
                  className="
                    object-cover
                    w-full
                    h-full
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />
              </div>

            </div>

          </div>
        </section>

        {/* TABLA */}
        <section className="py-32 px-6 relative overflow-hidden">

          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-semibold mb-10 text-center">
              MATERIALES Y ESPESORES
            </h2>

            <div
              className="flex justify-center relative"
              onMouseMove={(e) =>
                setPos({
                  x: e.clientX,
                  y: e.clientY,
                })
              }
            >

              <div
                className="
                  bg-white/80
                  backdrop-blur-sm
                  border
                  border-gray-200
                  rounded-2xl
                  overflow-hidden
                  shadow-xl
                  w-full
                "
              >

                {materiales.map((item, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setHovered(item)}
                    onMouseLeave={() => setHovered(null)}
                    className="
                      flex
                      justify-between
                      px-6
                      py-5
                      border-b
                      last:border-none
                      hover:bg-white
                      transition
                      cursor-pointer
                    "
                  >
                    <span className="font-medium">
                      {item.nombre}
                    </span>

                    <span className="text-gray-500">
                      {item.medida}
                    </span>
                  </div>
                ))}

              </div>

              {hovered && (
                <div
                  className="pointer-events-none fixed z-50"
                  style={{
                    top: pos.y + 15,
                    left: pos.x + 15,
                  }}
                >
                  <Image
                    src={hovered.img}
                    alt=""
                    width={180}
                    height={180}
                    className="
                      object-cover
                      rounded-xl
                      shadow-2xl
                      border
                    "
                  />
                </div>
              )}

            </div>

          </div>
        </section>

        {/* GRABADO */}
        <section className="py-24 px-6 md:px-20">

          <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">

            <div>
              <video
                className="
                  rounded-2xl
                  shadow-2xl
                  w-full
                  object-cover
                "
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="/videos/video_grabado_laser1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-4">
                GRABADO LÁSER
              </h2>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Personalización de alta precisión para piezas industriales.
              </p>

              <button
                className="
                  px-6
                  py-3
                  border
                  border-black
                  rounded-full
                  hover:bg-black
                  hover:text-white
                  transition
                "
              >
                Solicitar cotización
              </button>
            </div>

          </div>
        </section>

        {/* TUBO */}
        <section className="relative overflow-hidden py-40">

          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/videos/video_tubo2.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />

          <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">

            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              CORTE LÁSER DE TUBO
            </h2>

            <p className="text-gray-700 mb-8 text-lg">
              Corte de tubos y perfiles con alta precisión.
            </p>

            <a
              href="/tubo"
              className="
                inline-block
                px-8
                py-3
                border
                border-black
                rounded-full
                hover:bg-black
                hover:text-white
                transition
              "
            >
              Ver más
            </a>

          </div>

        </section>

      </main>
    </>
  );
}