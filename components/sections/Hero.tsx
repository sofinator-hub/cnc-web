"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;

    if (frame.current) return;

    frame.current = requestAnimationFrame(() => {
      setMouse({ x: e.clientX, y: e.clientY });
      frame.current = null;
    });
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
    >

      {/*  GRADIENTE BASE */}
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

      {/*  GRID CNC */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/*  HUD ESQUINAS (más sutil en móvil) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 w-8 h-8 md:w-12 md:h-12 border-t border-l border-black/30" />
        <div className="absolute top-4 right-4 w-8 h-8 md:w-12 md:h-12 border-t border-r border-black/30" />
        <div className="absolute bottom-4 left-4 w-8 h-8 md:w-12 md:h-12 border-b border-l border-black/30" />
        <div className="absolute bottom-4 right-4 w-8 h-8 md:w-12 md:h-12 border-b border-r border-black/30" />
      </div>

      {/*  CURSOR GLOW (solo desktop) */}
      {!isMobile && (
        <motion.div
          className="pointer-events-none fixed w-[280px] h-[280px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: mouse.x - 140,
            y: mouse.y - 140,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
      )}

      {/*  CONTENIDO */}
      <div className="text-center px-6 z-10 max-w-3xl">

        {/* TEXTO SISTEMA */}
        <p className="text-[10px] md:text-xs tracking-[0.3em] text-gray-500 mb-4">
          SISTEMA ACTIVO
        </p>

        {/*  TÍTULO */}
        <motion.h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-black">

          <motion.span
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 1 }}
            className="block text-black will-change-transform"
            
          >
            Corte Láser
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

        {/*  LÁSER */}
        <motion.div className="relative w-full h-[1px] overflow-hidden mb-6">
          <motion.div
            className="absolute top-0 left-0 h-full w-[200px] bg-gradient-to-r from-transparent via-blue-500/80 to-transparent"
            animate={{ x: ["-120%", "200%"] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/*  CNC ANIMACIÓN */}
        <motion.div className="relative w-full h-[70px] md:h-[80px] overflow-hidden mb-6">

          <motion.div
            className="absolute left-1/2 w-[1px] h-full bg-blue-500/70"
            initial={{ y: -80 }}
            animate={{ y: 80 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute left-1/2 w-[6px] md:w-[8px] h-[6px] md:h-[8px] bg-blue-500 rounded-full blur-sm"
            animate={{ y: [-10, 80] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

        </motion.div>

        {/* DESCRIPCIÓN */}
        <motion.p
          className="text-base md:text-xl text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Diseño, corte y fabricación con tecnología de alta precisión
        </motion.p>

        {/* BOTÓN */}
        <motion.a
          href="https://wa.me/5215562045546?text=Hola,%20quiero%20cotizar%20un%20proyecto"
          target="_blank"
          className="inline-block bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Cotizar ahora
        </motion.a>

        {/* STATUS */}
        <p className="text-[10px] md:text-xs text-gray-400 mt-6">
          INGENIERÍA • PRECISIÓN
        </p>

      </div>
    </section>
  );
}