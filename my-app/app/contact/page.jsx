"use client"

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { CheckCircle } from "lucide-react";

const quickContacts = [
  { icon: <FaWhatsapp />, label: "WhatsApp" , href: "https://wa.me/573106189535" },
  { icon: <FaEnvelope />, label: "Correo", href: "mailto:samuelrc250@gmail.com" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com/in/samuelrc250" },
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/SamuelRodriguezC" },
];

const reasons = [
  "Entrega puntual y compromiso",
  "Comunicación clara y constante",
  "Trabajo en equipo y colaboración",
  "Adaptabilidad y solución de problemas",
  "Empatía y escucha activa",
  "Pensamiento crítico y analítico",
  "Creatividad para proponer soluciones",
  "Manejo constructivo de críticas",
  "Liderazgo colaborativo",
  "Proactividad e iniciativa",
  "Resiliencia frente a desafíos",
  "Aprendizaje y mejora continua",
  "Atención al detalle y calidad",
  "Gestión eficiente del tiempo y prioridades",
];

const CarouselRow = ({ items, reverse }) => {
  return (
    <motion.div
      className="flex gap-6"
      animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
    >
      {[...items, ...items].map((reason, i) => (
        <div
          key={i}
          className="min-w-[250px] bg-gray-800 p-6 rounded-xl text-center shadow-lg"
        >
          <CheckCircle className="text-main w-8 h-8 mx-auto mb-4" />
          <p className="text-white font-medium">{reason}</p>
        </div>
      ))}
    </motion.div>
  );
};

const Contact = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Sección principal: Por qué trabajar conmigo */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-main">¿Por qué trabajar conmigo?</h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-2">
            Esto es lo que me diferencia y cómo puedo aportar valor.
          </p>
        </div>

        <div className="space-y-6 overflow-hidden mb-16">
          <CarouselRow items={reasons} reverse={false} />
          <CarouselRow items={reasons} reverse={true} />
        </div>

        {/* Sección secundaria: Contacto rápido */}
        <div className="bg-gray-800 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-main mb-6 text-center">Contáctame</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {quickContacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg text-white 
                bg-[#18191c] 
                hover:scale-105 
                hover:bg-cyan-400 hover:text-black 
                hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.8)]  
                shadow-lg 
                transition-all duration-300">
                <div className="text-2xl">{contact.icon}</div>
                <span className="text-sm font-medium">{contact.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
