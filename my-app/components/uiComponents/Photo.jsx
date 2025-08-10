"use client" 

import { delay, motion } from "framer-motion" 
import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative"> 

      <motion.div 
        initial={{ opacity: 0 }} // Estado inicial: invisible
        animate={{
            opacity: 1, // Estado final: visible
            transition: { delay: 1, duration: 0.4, ease: "easeIn" } // Retraso de 2s, duración de 0.4s, curva suave
        }}
      >
        {/* Contenedor de la imagen (aparece un poco antes que el contenedor principal) */}
        <motion.div 
          initial={{ opacity: 0, y: 0 }} // Invisible y sin desplazamiento
          animate={{
            opacity: 1,           // Se vuelve visible
            y: [5, -15, 5]        // Sube y baja
          }}
          transition={{
            opacity: { delay: 1.4, duration: 0.4, ease: "easeIn" }, // Fade in
            y: { delay: 1.8, duration: 5, ease: "easeInOut", repeat: Infinity } // Movimiento continuo
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
        >
          <Image 
            src="/assets/image.png"  
            priority 
            quality={100} 
            fill 
            alt="my image" 
            className="object-contain" 
          />
        </motion.div>

      </motion.div>

      {/* SVG animado que rodea la imagen */}
      <motion.svg 
        className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" // Tamaño del círculo según el dispositivo
        fill="transparent" // Sin relleno
        viewBox="0 0 506 506" // Área de dibujo
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Círculo animado */}
        <motion.circle 
            cx="253" cy="253" r="250" // Centro y radio del círculo
            stroke="#22d3ee" // Color de borde (cyan-400)
            strokeWidth="4" // Grosor de línea
            strokeLinecap="round" // Extremos redondeados
            strokeLinejoin="round" // Uniones redondeadas
            initial={{ strokeDasharray: "24 10 0 0" }} // Patrón inicial de línea discontinua
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], // Cambia el patrón de línea
              rotate: [120, 360] // Gira el círculo de 120° a 360°
            }}
            transition={{
              duration: 20, // La animación dura 20 segundos
              repeat: Infinity, // Se repite infinitamente
              repeatType: "reverse" // Invierte la dirección en cada ciclo
            }}
        />
      </motion.svg>
    </div>
  )
}

export default Photo // Exporta el componente para su uso en otras partes del proyecto
