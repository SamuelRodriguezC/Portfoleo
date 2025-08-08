import React from 'react'
import { motion } from 'framer-motion'


const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}

// Calcular el índice inverso para el retardo escalonado.
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((_, index) => {
               return ( 
               <motion.div 
                    key={index} 
                    variants={stairAnimation} 
                    initial="initial" 
                    animate="animate" 
                    exit="exit" 
                    transition={{
                        duration: 0.4,
                        case: "easeInOut",
                        delay: reverseIndex(index) * 0.1,
                    }} 
                className="h-full w-full bg-white relative"/>)
            })
            }
        </>
    )
}

export default Stairs