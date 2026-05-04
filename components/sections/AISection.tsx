"use client";

import { useState } from "react";

export default function AISection() {
  const [type, setType] = useState<"celosia" | "guarda">("celosia");
  const [material, setMaterial] = useState("acero");
  const [pattern, setPattern] = useState("geométrico");
  const [density, setDensity] = useState("medio");

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const generateDesign = async () => {
    setLoading(true);
    setImage(null);

    try {
      const res = await fetch("/api/generate-design", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type, material, pattern, density }),
      });

      const data = await res.json();

      if (data.image) {
        setImage(data.image);
      } else {
        alert("Error generando diseño");
      }
    } catch (error) {
      console.error(error);
      alert("Error generando diseño");
    }

    setLoading(false);
  };

  return (
    <section className="w-full max-w-3xl mx-auto flex flex-col gap-10">

      {/* TITULO */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-2">
          Diseña tu proyecto en segundos
        </h2>
        <p className="text-gray-600">
          Genera una vista previa antes de cotizar
        </p>
      </div>

      {/* FORM */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col gap-4">

        <label className="text-sm font-medium">Tipo</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "celosia" | "guarda")}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="celosia">Celosía</option>
          <option value="guarda">Guarda</option>
        </select>

        <label className="text-sm font-medium">Material</label>
        <select
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="acero">Acero</option>
          <option value="inoxidable">Inoxidable</option>
          <option value="aluminio">Aluminio</option>
        </select>

        {type === "celosia" && (
          <>
            <label className="text-sm font-medium">Patrón</label>
            <select
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="geométrico">Geométrico</option>
              <option value="orgánico">Orgánico</option>
            </select>
          </>
        )}

        <label className="text-sm font-medium">Densidad</label>
        <select
          value={density}
          onChange={(e) => setDensity(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="abierto">Abierto</option>
          <option value="medio">Medio</option>
          <option value="cerrado">Cerrado</option>
        </select>

        <button
          onClick={generateDesign}
          className="mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Generar diseño
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center text-gray-500">
          Procesando diseño...
        </p>
      )}

      {/* RESULTADO */}
      {image && (
        <div className="flex flex-col items-center gap-4">

          <p className="text-sm text-gray-500">
            Vista previa generada automáticamente
          </p>

          <img
            src={image}
            alt="Diseño generado"
            className="w-full max-w-md rounded-xl shadow-md"
          />

          <button
            onClick={() => {
              const message = `Hola, quiero cotizar este diseño:

Tipo: ${type}
Material: ${material}
Densidad: ${density}`;

              window.open(
                `https://wa.me/5215562045546?text=${encodeURIComponent(message)}`,
                "_blank"
              );
            }}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
          >
            Cotizar este diseño
          </button>
        </div>
      )}
    </section>
  );
}