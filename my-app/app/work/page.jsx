"use client"
import { motion } from "framer-motion"
import React, {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/uiComponents/WorkSliderBtns"
import { Item } from "@radix-ui/react-select"

const projects = [
  {
    num: '01',
    category: 'Full Stack',
    title: 'MVOGMS',
    description: "asdasd asidpaij paisj paijdpiajsp iallañjnlasdjn aslk clñsjnclañsjndm añljn lñnlañsj cad casda asdas adasddad",
    stack: [
      {name: "HTMl 5"},
      {name: "Php"},
      {name: "Css"},
      {name: "JavaScript"},
      {name: "MySQL"},
    ],
    image: '/assets/work/mvogms/photo.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'Full Stack',
    title: 'Proyecto Scissors',
    description: "asdasd asidpaij paisj paijdpiajsp iallañjnlasdjn aslk clñsjnclañsjndm añljn lñnlañsj cad casda asdas adasddad",
    stack: [
      {name: "HTMl 5"},
      {name: "Css"},
      {name: "Java"},
      {name: "Spring Boot"},
      {name: "Bootstrap"},
      {name: "MySQL"},
    ],
    image: '/assets/work/scissors/pscissors.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'Full Stack',
    title: 'Comité',
    description: "asdasd asidpaij paisj paijdpiajsp iallañjnlasdjn aslk clñsjnclañsjndm añljn lñnlañsj cad casda asdas adasddad",
    stack: [
      {name: "Php"},
      {name: "Laravel"},
      {name: "Filament"},
      {name: "TailwindCss"},
      {name: "BluePrint"},
      {name: "MySQL"},
    ],
    image: '/assets/work/comite/comite.png',
    live: '',
    github: '',
  },
  {
    num: '04',
    category: 'Full Stack',
    title: 'ShopLine',
    description: "asdasd asidpaij paisj paijdpiajsp iallañjnlasdjn aslk clñsjnclañsjndm añljn lñnlañsj cad casda asdas adasddad",
    stack: [
      {name: "Python"},
      {name: "Django"},
      {name: "TypeScript"},
      {name: "Next.js"},
      {name: "TailwindCss"},
      {name: "MySQL"},
    ],
    image: '/assets/work/shopline/shopline.png',
    live: '',
    github: '',
  },
]

const Work = () => {

  const [project, SetProject ] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex
    // Update project state based on current slide index
    SetProject(projects[currentIndex])
  }

  return (
    <motion.section 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 0.4, duration: 0.4, ease: "easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] ">

          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">

              {/* Project Num  */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
                </div>
              {/* Project Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-main transition-all duration-500 capitalize">Proyecto {project.category}</h2>

              {/* Project Description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack  */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-main">{item.name}{index !== project.stack.length - 1 && ","}</li>
                ))}
              </ul>
              {/* Separator */}
              <div className="border border-white/20"></div>
              {/* Botones */}
              <div className="flex items-center gap-4">
                {/* Live Project */}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-main"/>
                    </TooltipTrigger>
                    <TooltipContent  className="bg-white text-black px-5 rounded-sm">
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
                {/* Git Hub Button  */}
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-cyan-400"/>
                    </TooltipTrigger>
                    <TooltipContent  className="bg-white text-black px-5 rounded-sm">
                      <p>Repositorio Git Hub</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-gray-50/20">
                    {/* Overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt=""></Image>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-main hover:bg-cyan-400 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transtition-all duration-400"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work