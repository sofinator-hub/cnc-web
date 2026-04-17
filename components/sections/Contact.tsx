"use client";

export default function Contact() {
  return (
    <section id="contacto" className="py-32 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Cotiza tu proyecto
      </h2>

      <p className="text-gray-600 mb-6">
        Escríbenos directamente:
      </p>

      <div className="flex flex-col gap-3 items-center">

        <a
          href="https://wa.me/5215562045546"
          className="bg-black text-white px-6 py-3 rounded-full"
        >
          WhatsApp
        </a>

        <a
          href="mailto:matei_company@hotmail.com"
          className="text-gray-700"
        >
          matei_company@hotmail.com
        </a>

      </div>
    </section>
  );
}