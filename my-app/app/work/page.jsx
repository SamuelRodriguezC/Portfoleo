"use client"
import { motion } from "framer-motion"
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import { VscRobot } from "react-icons/vsc";
import WorkSliderBtns from "@/components/uiComponents/WorkSliderBtns"
import ColorThief from "colorthief"


const projects = [
  {
    num: '01',
    category: 'Full Stack',
    title: 'MVOGMS',
    description: "MVOGMS es un sistema integral de gestión para supermercados, diseñado para optimizar el control de productos, órdenes, proveedores y clientes en un solo lugar. El sistema permite registrar y actualizar inventarios en tiempo real, gestionar compras y ventas, y mantener un historial organizado de proveedores y clientes. Con su interfaz intuitiva y funciones centralizadas, MVGOMS mejora la eficiencia operativa y reduce errores en el manejo de stock.",
    stack: [
      { name: "HTML 5" },
      { name: "Php" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "MySQL" },
    ],
    images: [
      { photo: '/assets/work/mvogms/photo.png' },
      { photo: '/assets/work/mvogms/photo2.png' },
      { photo: '/assets/work/mvogms/photo3.png' },
      { photo: '/assets/work/mvogms/photo4.png' },
    ],
    github: 'https://github.com/SamuelRodriguezC/mvogms',
  },
  {
    num: '02',
    category: 'Full Stack',
    title: 'Scissors',
    description: "En Garzón Peluquería, la gestión manual de citas y productos generaba desorganización, cruces de horarios, falta de seguimiento a clientes y un control deficiente del inventario, afectando la eficiencia y la experiencia del usuario. Proyecto Scissors surge como una solución integral que centraliza la programación de citas, asignación de estilistas, gestión del catálogo, historial de citas e inventario junto con la generación de reportes, optimizando tiempos, mejorando el servicio al cliente y asegurando un control preciso de los recursos del negocio.",
    stack: [
      { name: "HTML 5" },
      { name: "Css" },
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Bootstrap" },
      { name: "MySQL" },
    ],
    images: [
      { photo: '/assets/work/scissors/pscissors.png' },
      { photo: '/assets/work/scissors/pscissors2.png' },
      { photo: '/assets/work/scissors/pscissors3.png' },
      { photo: '/assets/work/scissors/pscissors4.png' },
    ],
    github: '',
  },
  {
    num: '03',
    category: 'Full Stack',
    title: 'Comité',
    description: "En la Universidad Libre, la gestión de opciones de grado era lenta y desorganizada eso generaba falta de seguimiento centralizado. Comité resuelve este problema integrando en una sola plataforma el registro de transacciones, asignación de roles, control de procesos y etapas con fechas límite, validación de entregables y emisión de certificados, mejorando la coordinación, trazabilidad y eficiencia del proceso académico.",
    stack: [
      { name: "Php" },
      { name: "Laravel" },
      { name: "Filament" },
      { name: "TailwindCss" },
      { name: "BluePrint" },
      { name: "MySQL" },
    ],
    images: [
      { photo: '/assets/work/comite/comite.png' },
      { photo: '/assets/work/comite/comite2.png' },
      { photo: '/assets/work/comite/comite3.png' },
      { photo: '/assets/work/comite/comite4.png' },
    ],
    github: 'https://github.com/SamuelRodriguezC/comite',
  },
  {
    num: '04',
    category: 'Full Stack',
    title: 'ShopLine',
    description: "Shopline es una plataforma pensada para dar visibilidad a pequeñas empresas en el entorno digital, facilitando la venta online. Permite mostrar productos de forma atractiva, realizar reseñas, gestionar ordenes, buscar y agregar productos al carrito además del pago online por medio de stripe, ayudando a los negocios a ampliar su alcance, mejorar su presencia online y aumentar sus oportunidades de venta.",
    stack: [
      { name: "Python" },
      { name: "Django" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "TailwindCss" },
      { name: "MySQL" },
    ],
    images: [
      { photo: '/assets/work/shopline/shopline.png' },
      { photo: '/assets/work/shopline/shopline2.png' },
      { photo: '/assets/work/shopline/shopline3.png' },
      { photo: '/assets/work/shopline/shopline4.png' },
    ],
    github: 'https://github.com/SamuelRodriguezC/shopline',
  },
]

const Work = () => {
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      {projects.map((project, index) => (
        <div key={index} className="container mx-auto mb-16">
          <div className={`flex flex-col xl:flex-row xl:gap-[30px] ${index % 2 !== 0 ? 'xl:flex-row-reverse ' : ''}`}>

            {/* Texto del proyecto */}
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">

                <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-main transition-all duration-500 capitalize">
                  {project.title} - {project.category}
                </h2>

                <p className="text-white/60">{project.description}</p>

                <ul className="flex gap-4 flex-wrap">
                  {project.stack.map((item, i) => (
                    <li key={i} className="text-xl text-main">
                      {item.name}{i !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>

                <div className="border border-white/20"></div>

                <div className="flex items-center gap-4">
                  {/* GitHub */}
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:shadow-[0px_0px_10px_rgb(34_211_238)] transition-all duration-300">
                          <BsGithub className="text-white text-3xl group-hover:text-cyan-400 cursor-pointer "/>
                        </TooltipTrigger>
                        <TooltipContent className="bg-white text-black px-5 rounded-sm">
                          <p>Repositorio Git Hub</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>

            {/* Slider de imágenes */}
            <div className="w-full xl:w-[50%]">
              <Swiper
                loop={true} 
                spaceBetween={30}
                slidesPerView={1}
                
                className="xl:h-[520px] mb-12 cursor-pointer rounded-xl"
              >
                {project.images.map((image, i) => (
                  <SwiperSlide key={i} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-gray-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={image.photo} fill className="object-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <WorkSliderBtns
                  containerStyles={`flex gap-2 absolute bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none ${
                    index % 2 === 0 ? 'right-0' : 'left-0'
                  }`}
                  btnStyles="bg-main hover:bg-cyan-400 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transtition-all duration-400 cursor-pointer"
                />
              </Swiper>
            </div>
          </div>
          {/* Separador */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-full flex items-center justify-center my-16"
          >
            {/* Línea con gradiente */}
            <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

            {/* Icono decorativo */}
            <div className="relative z-10 bg-[#0a0a0a] px-4">
              <VscRobot  className="text-cyan-400 text-2xl" />
            </div>
          </motion.div>
        </div>
        
      ))}
    </motion.section>
    
  )
}

export default Work
