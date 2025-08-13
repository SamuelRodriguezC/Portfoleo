"use client";

import Link from "next/link";
import React from "react";
import NavBar from "./NavBar";
import { Button } from "../ui/button";
import NavbarMovile from "./NavbarMovile";
import { BsDownload } from "react-icons/bs";
import { motion } from "framer-motion";

const cursorVariants = {
  blink: {
    opacity: [1, 0, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
    },
  },
};

const Header = () => {
  return (
    <header className="py-7 xl:py-5 text-white padding-x">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo con animación estilo terminal */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -1 }}     // Efecto al pasar el mouse: crece un poco y gira ligeramente
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center cursor-pointer font-mono text-4xl font-bold"
          >
            {/* Llave de apertura "{" con animación de entrada desde la izquierda */}
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-main"
            >
              {"{"}
            </motion.span>
            
            {/* Texto principal del logo */}
            <span className="px-1">Samuel&nbsp;R</span>

            {/* Llave de cierre "}" con animación de entrada desde la derecha */}
            <motion.span
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-main"
            >
              {"}"}
            </motion.span>

            {/* Cursor "|" con animación de parpadeo */}
            <motion.span
              variants={cursorVariants}
              animate="blink"
              className="ml-1 text-main"
            >
              |
            </motion.span>
          </motion.div>
        </Link>

        {/* Barra de Navegación para Escritorio */}
        <div className="hidden lg:flex items-center gap-8">
          <NavBar />
          <a
            href="/cv/cv_samuel_rodriguez.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <span>Ver CV</span>
              <BsDownload className="text-xl" />
            </Button>
          </a>
        </div>

        {/* Barra de Navegación para Móviles */}
        <div className="lg:hidden">
          <NavbarMovile />
        </div>
      </div>
    </header>
  );
};

export default Header;
