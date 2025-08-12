"use client"

import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: 'Teléfono',
    description: '(+57) 3106189535',
  },
  {
    icon: <FaEnvelope/>,
    title: 'Dirección de Correo',
    description: 'samuelrc250@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt/>,
    title: 'Ubicación',
    description: 'Bogotá, Colombia',
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 0.4, duration: 0.4, ease: "easeIn"}}}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row  ">
          {/* Formulario */}
          <div className="xl:w-[64%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-gray-800 rounded-xl" action="">
              <h3 className="text-4xl text-main font-bold">Trabajemos Juntos</h3>
              <p className="text-white/60 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid pariatur dolorum nemo? Iusto quo iste cumque quas omnis eum cupiditate? Et, magnam magni! Aliquam nemo consequatur enim voluptates a.</p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Primer Nombre" />
                <Input type="lastname" placeholder="Segundo Nombre" />
                <Input type="email" placeholder="Dirección de Correo" />
                <Input type="phone" placeholder="Número Teléfono" />
              </div>
              {/* Select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un Servicio"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Selecciona un Servicio</SelectLabel>
                    <SelectItem value="front">Front End</SelectItem>
                    <SelectItem value="back">Back End </SelectItem>
                    <SelectItem value="full">Full Stack </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textArea */}
              <Textarea 
                className="h-[200px]"
                placeholder="Puede escribir un mensaje aqui."
              />
              {/* Form Button */}
              <Button size="md" className="max-w-40">Enviar Mensaje</Button>
            </form>
          </div>
          {/* Información */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6 ">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-gray-800 text-main rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                    </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact