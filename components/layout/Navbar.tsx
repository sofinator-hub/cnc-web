"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (!isHome) return;

      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 120;

        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id") || "";
        }
      });

      setActive(current || "inicio");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // MEDIR ALTURA REAL DEL NAVBAR
  useEffect(() => {
    const nav = document.getElementById("navbar");

    if (nav) {
      const height = nav.offsetHeight;

      document.documentElement.style.setProperty(
        "--nav-height",
        `${height}px`
      );
    }
  }, []);

  const isActive = (section: string) => {
    if (isHome) return active === section;

    return section === "inicio";
  };

  const linkStyle = (section: string) =>
    `relative transition-all duration-300 ${
      isActive(section)
        ? "text-[var(--primary)] font-semibold"
        : "text-gray-500 hover:text-[var(--primary)]"
    }`;

  return (
    <motion.nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}

        <Link href="/">
          <motion.h1
            className={`
              cursor-pointer
              text-xl
              font-semibold
              tracking-[0.25em]
              transition-all
              duration-300
              ${
                scrolled
                  ? "text-[var(--primary)] drop-shadow-[0_0_10px_rgba(116,32,105,0.35)]"
                  : "text-white"
              }
            `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            MATEI
          </motion.h1>
        </Link>

        {/* NAV LINKS */}

        <ul className="flex items-center gap-6 text-sm whitespace-nowrap">

          <li>
            <Link href="/" className={linkStyle("inicio")}>
              Inicio
            </Link>
          </li>

          <li>
            {isHome ? (
              <a
                href="#servicios"
                className={linkStyle("servicios")}
              >
                Servicios
              </a>
            ) : (
              <Link href="/#servicios">
                Servicios
              </Link>
            )}
          </li>

          <li>
            {isHome ? (
              <a
                href="#galeria"
                className={linkStyle("galeria")}
              >
                Galería
              </a>
            ) : (
              <Link href="/#galeria">
                Galería
              </Link>
            )}
          </li>

          <li>
            <Link
              href="/ai"
              className="
                purple-gradient
                text-white
                px-4
                py-1.5
                rounded-md
                purple-glow
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Generador
            </Link>
          </li>

        </ul>
      </div>
    </motion.nav>
  );
}