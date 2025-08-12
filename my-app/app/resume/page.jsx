"use client"
import { Faphp, FaPython, FaReact, FaLaravel } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiTypescript, SiDjango, SiNextdotjs, SiHtml5, SiCss3} from "react-icons/si"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const about = {
  title: "Sobre mí",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos est nemo facere impedit, autem nostrum, similique repudiandae, incidunt ad ipsa officia eaque iste alias harum voluptates quasi voluptatibus molestiae ex.",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Samuel Rodríguez",
    },
    {
      fieldName: "Teléfono",
      fieldValue: "(+57) 3106189535",
    },
    {
      fieldName: "Correo",
      fieldValue: "samuelrc250@gmail.com"
    },
    {
      fieldName: "Nacionalidad",
      fieldValue: "Colombiano"
    },

  ],

}

const expericence ={
  icon: '/assets/resume/badge.svg',
  title: "Mi Experiencia",
  description: "asdfas asd asd asdnasdnlasjn lasndl jnaslj nalsdj naslj nalsj nas",
  items: [  
  {
    company: "Tech Solutions",
    postition: "Full Stack Developer", 
    duration: "Marzo 2025 - Septiembre 2025"
  },
  {
    company: "Tech Solutions",
    postition: "Full Stack Developer", 
    duration: "Marzo 2025 - Septiembre 2025"
  },
  {
    company: "Tech Solutions",
    postition: "Full Stack Developer", 
    duration: "Marzo 2025 - Septiembre 2025"
  },
]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Educación", 
  description: "asdpjkpaj pasjdpiaj paij askdpiajd piajsp daij ijapijdaijpaji piajdp iaj ad ",
  items: [
    {
      institution: "Servicion Nacional de Aprendizaje - SENA",
      degree: "Técnico en Programación de Software",
      duration: "Enero 2022 - Diciembre 2023"
    },
    {
      institution: "Servicion Nacional de Aprendizaje - SENA",
      degree: "tecnólogo en Análisis y Desarrollo de Software",
      duration: "Enero 2024 - Septiembre 2024"
    }
  ]
}

const skills = {
  title: "Mis Habilidades",
  description: "aadoaslan ljasndlansdl na ljaldjal nasljd nalsn dlajd asljnas aldj lj asjf na", 
  skillList: [
    {
      icon: <Faphp/>,
      name: "Php",
    },
    {
      icon: <FaPython/>,
      name: "python",
    },
    {
      icon: <FaReact/>,
      name: "React",
    },
    {
      icon: <FaLaravel/>,
      name: "Laravel",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiJavascript/>,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript/>,
      name: "TypeScript",
    },
    {
      icon: <SiDjango/>,
      name: "Django - Django Rest",
    },
    {
      icon: <SiNextdotjs/>,
      name: "Next.js",
    },
    {
      icon: <SiHtml5/>,
      name: "HTML5",
    },
    {
      icon: <SiCss3/>,
      name: "Css",
    },
  ]
}



const Resume = () => {
  return (
    <motion.div
      initial={{opacity: 0 }}
      animate={{opacity: 1, transition: {delay: 0.4, ease: "easeIn"},
    
    }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >

      <div className="container mx-auto padding-x ">
        <Tabs defaultValue="skills" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre Mi</TabsTrigger>
            <TabsTrigger value="education">Educación</TabsTrigger>
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* ----------------- Habilidades ----------------- */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/* ----------------- Sobre mí ----------------- */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
            {/*----------------- Educación -----------------*/}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/*----------------- Experiencia -----------------*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{expericence.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{expericence.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {expericence.items.map((item, index) => (
                      <li key={index} className="bg-gray-800 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1 ">
                        <span className="text-main">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.postition}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-main"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


          </div>
        </Tabs>
      </div>

    </motion.div>
  )
}

export default Resume