"use client"

import { delay, motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div 
        initial={{opacity: 0}} 
        animate={{
            opacity: 1, 
            transition: {delay: 1, duration: 0.4, ease: "easeIn"}
        }}
    >
        <div className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image 
            src="/assets/image.png"  
            priority 
            quality={100} 
            fill 
            alt="my image" 
            className="object-contain" 
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Photo
