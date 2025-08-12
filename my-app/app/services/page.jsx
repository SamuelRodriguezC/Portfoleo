"use client"

import React from 'react'
import { FaLaptopCode, FaServer, FaReact, FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion"
import Link from 'next/link'

const services = [
  {
    num: "01", 
    title: "Desarrollo Web Full-Stack", 
    icon: <FaLaptopCode/>,  // Laptop con código
    description: "Tecnologías como PHP, Laravel, Python, Django, React y Next.js para crear aplicaciones web completas, desde el diseño de la interfaz hasta el funcionamiento interno. Crear soluciones funcionales y fáciles de usar."
  },
  {
    num: "02", 
    title: "Backend y APIs Personalizadas", 
    icon: <FaServer />,  // Servidor
    description: "Desarrollo backend diseñando APIs para que diferentes sistemas puedan comunicarse y trabajar juntos. Buscando sean seguridad y eficiencia, adaptadas a las necesidades del proyecto."
  },
  {
    num: "03", 
    title: "Frontend con React y Next.js", 
    icon: <FaReact />,  // Logo de React
    description: "Interfaces atractivas y responsivas usando React y Next.js, enfocándome en crear una buena experiencia para los usuarios, con un diseño limpio y fácil de navegar."
  },
  {
    num: "04", 
    title: "Aporte en Todas las Fases del Desarrollo", 
    icon: <FaProjectDiagram/>,  // Diagrama de proyecto
    description: "Participo activamente en todas las etapas del ciclo de desarrollo de software, desde la planificación y análisis, pasando por el diseño, desarrollo, pruebas, hasta la entrega y mantenimiento. Esto me permite entender el proyecto en su totalidad y aportar soluciones prácticas en cada fase para lograr un producto funcional y de calidad."
  },
];


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto max-w-6xl px-4">

        <motion.div initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {delay: 0.2, duration: 0.4, ease: "easeInOut"},
        }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px] ">
          {services.map((service, index) =>  (
            <div className="flex-1 flex flex-col justify-center gap-6 group" key={index}>

              {/* Top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent text-outline-hover transition-all duration-200 group:hover">{service.num}</div>
                <div className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-main transition-all duration-500 flex justify-center items-center hover:-rotate-45 hover:bg-cyan-400">
                   <div className="text-primary text-3xl">{service.icon}</div>
                </div>
              </div>
              {/* Header */}
              <h2 className="text-[42px] font-bold leading-none text-white hover:text-cyan-400 transition-all duration-500">{service.title}</h2>
              {/* descripción */}
              <p className="text-white/60">{service.description}</p>
              {/* Borde */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}

        </motion.div>
      </div>
    </section>
  )
}

export default Services