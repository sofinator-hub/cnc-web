"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (frame.current) return;

    frame.current = requestAnimationFrame(() => {
      setMouse({ x: e.clientX, y: e.clientY });
      frame.current = null;
    });
  };

  return (
    <section
      id="inicio"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
    >

      {/* 🔵 GRADIENTE BASE */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(120deg, #ffffff, #e5e7eb)",
            "linear-gradient(120deg, #f8fafc, #e5e7eb)",
            "linear-gradient(120deg, #ffffff, #e5e7eb)",
          ],
        }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      {/* 🧊 GRID CNC */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* 🧊 HUD ESQUINAS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-black/30" />
        <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-black/30" />
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l border-black/30" />
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-black/30" />
      </div>

      {/* 🔥 CURSOR GLOW (más suave) */}
      <motion.div
        className="pointer-events-none fixed w-[280px] h-[280px] bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: mouse.x - 140,
          y: mouse.y - 140,
        }}
        transition={{ type: "spring", stiffness: 50 }}
      />

      {/* 🧠 CONTENIDO */}
      <div className="text-center px-6 z-10 max-w-3xl">

        {/* TEXTO SISTEMA */}
        <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
          SYSTEM // CNC ACTIVE PROCESS
        </p>

        {/* 🔥 TÍTULO */}
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight overflow-hidden">

          <motion.span
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1 }}
            className="block"
          >
            Corte CNC Láser
          </motion.span>

          <motion.span
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="block"
          >
            de Precisión
          </motion.span>

        </motion.h1>

        {/* 🔥 LÁSER (más fino) */}
        <motion.div className="relative w-full h-[1px] overflow-hidden mb-6">
          <motion.div
            className="absolute top-0 left-0 h-full w-[250px] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent"
            animate={{ x: ["-120%", "200%"] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* 🔥 CNC ANIMACIÓN MEJORADA */}
        <motion.div className="relative w-full h-[80px] overflow-hidden mb-6">

          {/* línea corte */}
          <motion.div
            className="absolute left-1/2 w-[1px] h-[80px] bg-blue-500/70"
            initial={{ y: -80 }}
            animate={{ y: 80 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* herramienta glow */}
          <motion.div
            className="absolute left-1/2 w-[8px] h-[8px] bg-blue-500 rounded-full blur-sm"
            animate={{ y: [-10, 80] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

        </motion.div>

        {/* 🔥 LÍNEA MATERIAL MÁS SUTIL */}
        <motion.div
          className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mb-8"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        {/* DESCRIPCIÓN */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Diseño, grabado y fabricación con tecnología de alta precisión
        </motion.p>

        {/* BOTÓN */}
        <motion.a
          href="https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20un%20proyecto"
          target="_blank"
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Cotizar ahora
        </motion.a>

        {/* STATUS */}
        <p className="text-xs text-gray-400 mt-6">
          STATUS: ACTIVE • PRECISION MODE ENABLED
        </p>

      </div>
    </section>
  );
}