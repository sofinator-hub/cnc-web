"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id") || "";
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (section: string) =>
    `relative transition ${
      active === section
        ? "text-black font-semibold"
        : "text-gray-500 hover:text-black"
    }`;

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <motion.h1
          className={`font-bold tracking-[0.3em] transition ${
            scrolled ? "text-black" : "text-gray-700"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          MATEI
        </motion.h1>

        {/* LINKS */}
        <ul className="flex gap-8 text-sm">

          {/* INICIO */}
          <li className="relative">
            <a href="#inicio" className={linkStyle("inicio")}>
              Inicio
            </a>

            {active === "inicio" && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500"
              />
            )}
          </li>

          {/* SERVICIOS */}
          <li className="relative">
            <a href="#servicios" className={linkStyle("servicios")}>
              Servicios
            </a>

            {active === "servicios" && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500"
              />
            )}
          </li>

          {/* GALERÍA */}
          <li className="relative">
            <a href="#galeria" className={linkStyle("galeria")}>
              Galería
            </a>

            {active === "galeria" && (
              <motion.div
                layoutId="underline"
                className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500"
              />
            )}
          </li>

        </ul>

      </div>
    </motion.nav>
  );
}