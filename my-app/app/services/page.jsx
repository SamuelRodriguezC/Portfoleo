"use client"

import React from 'react'
import { BsArrowDownRight } from "react-icons/bs"
import { motion } from "framer-motion"
import Link from 'next/link'

const services = [
  {
    num: "01", 
    title: "Web Development", 
    href: "",
    description: "lorem impos cone s ailloseado aso elsoeasde seéslsemp  asd asd asd as dsad a ad a dasd epoas ndejja éoiask. "
  },
  {
    num: "02", 
    title: "UI/UX design", 
    href: "",
    description: "lorem impos cone s ailloseado aso elsoeasde seéslsemp epoas ndejja éoiask. "
  },
  {
    num: "03", 
    title: "Logo design", 
    href: "",
    description: "lorem impos cone s ailloseado aso elsoeasde seéslsemp epoas ndejja éoiask. "
  },
  {
    num: "04", 
    title: "ASDads", 
    href: "",
    description: "lorem impos cone s ailloseado aso elsoeasde seéslsemp epoas ndejja éoiask. "
  },
]



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
                <Link className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-main transition-all duration-500 flex justify-center items-center hover:-rotate-45 hover:bg-cyan-400" href={service.href}>
                  <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
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