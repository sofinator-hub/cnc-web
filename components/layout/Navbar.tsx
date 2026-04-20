"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (pathname !== "/") return; // 🔥 solo detectar secciones en home

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
  }, [pathname]);

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

        {/* 🔥 LOGO → HOME */}
        <Link href="/">
          <motion.h1
            className={`cursor-pointer font-bold tracking-[0.3em] transition ${
              scrolled ? "text-black" : "text-gray-700"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            MATEI
          </motion.h1>
        </Link>

        {/* LINKS */}
        <ul className="flex gap-8 text-sm">

          {/* INICIO */}
          <li className="relative">
            <Link href="/" className={linkStyle("inicio")}>
              Inicio
            </Link>
          </li>

          {/* SERVICIOS */}
          <li className="relative">
            {pathname === "/" ? (
              <a href="#servicios" className={linkStyle("servicios")}>
                Servicios
              </a>
            ) : (
              <Link href="/#servicios" className="text-gray-500 hover:text-black">
                Servicios
              </Link>
            )}
          </li>

          {/* GALERÍA */}
          <li className="relative">
            {pathname === "/" ? (
              <a href="#galeria" className={linkStyle("galeria")}>
                Galería
              </a>
            ) : (
              <Link href="/#galeria" className="text-gray-500 hover:text-black">
                Galería
              </Link>
            )}
          </li>

        </ul>
      </div>
    </motion.nav>
  );
}