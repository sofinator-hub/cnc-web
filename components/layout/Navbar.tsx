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

        const sectionTop =
          (section as HTMLElement).offsetTop - 120;

        if (window.scrollY >= sectionTop) {
          current =
            section.getAttribute("id") || "";
        }

      });

      setActive(current || "inicio");

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, [isHome]);


  // ALTURA NAVBAR
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
        : scrolled
        ? "text-gray-600 hover:text-[var(--primary)]"
        : "text-white/80 hover:text-white"
    }`;


  return (

    <motion.nav
      id="navbar"
      className={`
        fixed top-0 w-full z-50
        transition-all duration-300

        ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200"
            : "bg-transparent"
        }
      `}
    >

      <div
        className="
        max-w-7xl mx-auto
        px-6 lg:px-10
        py-4
        flex items-center justify-between
        "
      >

{/* LOGO */}

<div className="flex-shrink-0 pr-12">

  <Link href="/">

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-3 cursor-pointer"
    >

      <div className="h-10 lg:h-12 flex items-center overflow-hidden">

        <img
          src="/logo_matei.svg"
          alt="Matei"
          className="
            h-10 lg:h-12
            w-auto
            object-contain
            block
            relative
            top-[4px]
          "
        />

      </div>

      <h1
        className={`
          text-xl lg:text-2xl
          font-semibold
          tracking-[0.35em]
          leading-none
          transition-all duration-300

${
  scrolled
    ? "text-[var(--primary)] drop-shadow-[0_0_10px_rgba(116,32,105,0.25)]"
    : "text-gray-300"
}
        `}
      >
        MATEI
      </h1>

    </motion.div>

  </Link>

</div>

        {/* LINKS */}

        <ul
          className="
           hidden lg:flex
          items-center
          gap-10 lg:gap-12
          text-sm
            whitespace-nowrap
          "
        >

          <li>

            <Link
              href="/"
              className={linkStyle("inicio")}
            >
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

              <Link
                href="/#servicios"
                className={linkStyle("servicios")}
              >
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

              <Link
                href="/#galeria"
                className={linkStyle("galeria")}
              >
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
                 px-5 py-2
                 rounded-xl
                 purple-glow
                 hover:scale-105
                 transition-all duration-300
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