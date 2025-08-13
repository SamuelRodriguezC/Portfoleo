import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar'
import { Button } from '../ui/button'
import NavbarMovile from './NavbarMovile'
import { BsDownload } from "react-icons/bs";


const Header = () => {
    return (
        <header className='py-7 xl:py-5 text-white padding-x'>
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo */}
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        Samuel R <span className='text-main'>.</span>
                    </h1>
                </Link>

                {/* Barra de Navegación para Escritorio */}
                <div className="hidden lg:flex items-center gap-8">
                    <NavBar/>
                <a href="/cv/cv_samuel_rodriguez.pdf" target="_blank" rel="noopener noreferrer">
                <Button>
                    <span>Ver CV</span>
                    <BsDownload className="text-xl" />
                </Button>
                </a>
                </div>

                {/* Barra de Navegación para Móviles */}
                <div className="lg:hidden">
                    <NavbarMovile/>
                </div>

            </div>
        </header>
    )
}

export default Header