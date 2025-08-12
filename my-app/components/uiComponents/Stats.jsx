"use client"

import React from 'react'
import Countup from "react-countup"



const stats = [
  {
    num: 3, 
    text: "Años en Programación",
  },
  {
    num: 4, 
    text: "Proyectos completados",
  },
  {
    num: 12, 
    text: "Tecnologías Exploradas",
  },
  {
    num: 392, 
    text: "Contribuciones en 2025",
  }
  
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-8">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w[80vm] mx-auto xl:max-w-none">
          {stats.map((item, index) => (

            <div className="flex-1 gap-4 items-center justify-center xl:justify-start" key={index}>
              <Countup end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>
              <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} "leading-snug text-white/80`}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
