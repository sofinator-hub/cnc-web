"use client";
import Image from "next/image";

export default function TuboPage() {
return ( <main className="bg-white text-gray-900 min-h-screen px-6 md:px-20 py-16 space-y-24">

```
  <section className="min-h-screen flex items-center">
    <div className="grid md:grid-cols-2 gap-10 items-center w-full">

      <div>
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          CORTE LÁSER DE TUBO
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Corte de tubos y perfiles con alta precisión, ideal para estructuras, mobiliario y aplicaciones industriales.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl">
        <Image
          src="/tubo.jpg"
          width={600}
          height={400}
          alt="Corte láser de tubo"
          className="object-cover w-full h-full"
        />
      </div>

    </div>
  </section>

</main>

);
}
