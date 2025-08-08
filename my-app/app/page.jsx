import { Button } from '@/components/ui/button';
import React from 'react'
import { BsDownload } from "react-icons/bs";


const Home = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* Texto */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hola Yo Soy <br/>
              <span className="text-main">Samuel Rodríguez</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita quia accusamus. Vitae iure itaque voluptatum ab atque ullam laudantium saepe assumenda, maxime facilis soluta, ad obcaecati labore ea quos.
            </p>
            {/* Btn y Redes Sociales */}
            <div className="">
              <Button variant="outline">
                 <span>Descargar CV</span>
                 <BsDownload className="text-xl" />

              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home