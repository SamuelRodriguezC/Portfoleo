"use client"


import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'


// liks para la barra de navegación
const navItems = [
  {
    name: 'Inicio',
    path: '/',
  },
  {
    name: 'Servicios',
    path: '/services',
  },
  {
    name: 'Currículum ',
    path: '/resume',
  },
  {
    name: 'Proyectos',
    path: '/work',
  },
  {
    name: 'Contacto',
    path: '/contact',
  },
]

const NavBar = () => {

  // Obtener el url actual del navegador
  const pathName = usePathname()

  return (
    <nav className='flex gap-8'>
      {/* Recorrer cada uno de los item de las lista */}
      {navItems.map((item, index) => 
        {return (
                <Link 
                    key={index} 
                    href={item.path}
                    className={`${item.path === pathName ? "text-main border-b-2 border-main" : "nav-item-hover"} capitalize`} >
                  {item.name}
                </Link>
            )}
          )
        }
    </nav>
  )
}

export default NavBar