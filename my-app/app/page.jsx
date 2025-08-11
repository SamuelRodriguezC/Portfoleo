import { Button } from '@/components/ui/button';
import React from 'react'
import { BsDownload } from "react-icons/bs";
import Social from './../components/uiComponents/Social';
import Photo from './../components/uiComponents/Photo';
import Stats  from './../components/uiComponents/Stats';


const Home = () => {
  return (
    <section className="w-full padding-x">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* Texto */}
          <div className="text-center xl:text-left order-2 xl:order-1">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hola Yo Soy <br/>
              <span className="text-main">Samuel Rodríguez</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita quia accusamus. Vitae iure itaque voluptatum ab atque ullam laudantium saepe assumenda, maxime facilis soluta, ad obcaecati labore ea quos.
            </p>
            {/* Btn y Redes Sociales */}
            <div className="flex flex-col xl:flex-row items-center gap-8">

              {/* descargar hoja de vida */}
              <Button>
                 <span>Descargar CV</span>
                 <BsDownload className="text-xl" />
              </Button>

              {/* Redes Social */}
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-4" iconStyles="icon-styles"/> 
              </div>
            </div>
          </div> 

          {/* Foto */}
          <div className="order-1 xl:order-2 mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home