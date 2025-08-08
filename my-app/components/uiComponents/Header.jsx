import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white bg-blue-50/20'>
            <div className="container mx-auto">

                {/* Logo */}
                <Link href={'/'}>
                    <h1 className='text-4xl font-semibold'>
                        Samuelo <span className='text-aplication'>.</span>
                    </h1>
                </Link>

                {/* Barra de Navegación para Escritorio */}

            </div>
        </header>
    )
}

export default Header