"use client"
import { FaPhp, FaPython, FaReact, FaLaravel } from "react-icons/fa"
import { SiTailwindcss, SiJavascript, SiTypescript, SiDjango, SiNextdotjs, SiHtml5, SiCss3, SiBlueprint, SiFilament, SiGithub} from "react-icons/si"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { inertia, motion } from "framer-motion"

const about = {
  title: "Sobre mí",
  description: "Estudiante en el área de análisis y desarrollo de software, con conocimientos en front-end, back-end y gestión de bases de datos. Con profundo interés por el aprendizaje continuo y compromiso con la creación de soluciones prácticas y funcionales.",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Samuel Rodríguez",
    },
    {
      fieldName: "Correo",
      fieldValue: "samuelrc250@gmail.com"
    },
    {
      fieldName: "Teléfono",
      fieldValue: "(+57) 3106189535",
    },
    {
      fieldName: "Ubicación",
      fieldValue: "Bogotá, Colombia"
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Español (nativo), Inglés (intermedio)"
    },
    {
      fieldName: "Perfil GitHub",
      fieldValue: "SamuelRodriguezC"
    },
    {
      fieldName: "Disponibilidad",
      fieldValue: "Remoto o presencial"
    }

  ],

}

const expericence ={
  icon: '/assets/resume/badge.svg',
  title: "Mi Experiencia",
  description: "Desarrollo de proyectos en entornos colaborativos, aplicando metodologías ágiles y herramientas de control de versiones. Enfoque en la resolución de problemas, adaptación a diferentes retos y mejora continua del código mediante retroalimentación y pruebas constantes.",
  items: [  
  {
    company: "Universidad Libre",
    postition: "Full Stack Developer", 
    duration: "Marzo 2025 - Septiembre 2025"
  },
]
}

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Educación", 
  description: "Formación técnica y tecnológica que abarca todas las fases del desarrollo de software, incluyendo análisis de requerimientos, diseño, programación, pruebas, implementación y mantenimiento. Enfoque en la aplicación de buenas prácticas y uso de herramientas modernas para el desarrollo web y de aplicaciones.",
  items: [
    {
      institution: "Servicio Nacional de Aprendizaje",
      degree: "Técnico en Programación de Software",
      duration: "Enero 2022 - Diciembre 2023"
    },
    {
      institution: "Servicio Nacional de Aprendizaje",
      degree: "Tecnólogo en Análisis y Desarrollo de Software",
      duration: "Enero 2024 - Septiembre 2024"
    }
  ]
}

const skills = {
  title: "Mis Habilidades",
  description: "Manejo de herramientas y lenguajes que permiten desarrollar aplicaciones web completas, desde el diseño de interfaces atractivas hasta la programación del lado del servidor. Experiencia en el uso de frameworks y librerías modernas que facilitan la creación de proyectos funcionales, optimizados y adaptados a diferentes necesidades.", 
  skillList: [
    {
      icon: <FaPhp/>,
      name: "Php",
    },
    {
      icon: <FaLaravel/>,
      name: "Laravel",
    },
    {
      icon: <SiBlueprint/>,
      name: "BluePrint",
    },
    {
      icon: <SiFilament/>,
      name: "Filament",
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
      icon: <FaReact/>,
      name: "React",
    },
    {
      icon: <FaPython/>,
      name: "python",
    },
    {
      icon: <SiDjango/>,
      name: "Django - Django Rest",
    },
    {
      icon: <SiNextdotjs/>,
      name: "Next.js",
    },
    // {
    //   icon: <SiHtml5/>,
    //   name: "HTML5",
    // },
    // {
    //   icon: <SiCss3/>,
    //   name: "Css",
    // },
    {
      icon: <SiGithub/>,
      name: "Git Hub",
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
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                {/* Lista de Habilidades */}
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-5">
                  {skills.skillList.map((skill, index) => (
                    // Cada Item
                    <li key={index} className="">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-gray-800 rounded-xl flex justify-center items-center group cursor-pointer">
                            <div className="text-6xl group-hover:text-cyan-400 transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-white text-black px-5 rounded-sm">
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* ----------------- Sobre mí ----------------- */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[900px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4 ">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/*----------------- Educación -----------------*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center lg:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-gray-800 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1 ">
                        <span className="text-main">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center">{item.degree}</h3>
                        <div className="flex items-center gap-3 mt-8">
                          <span className="w-[6px] h-[6px] rounded-full bg-main"></span>
                          <p className="text-white/60 text-sm ">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
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