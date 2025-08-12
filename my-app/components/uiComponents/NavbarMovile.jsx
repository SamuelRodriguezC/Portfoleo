"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { CiMenuFries } from "react-icons/ci";
import Link from 'next/link';



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

const NavbarMovile = () => {
    const pathName = usePathname()
    return (
        <Sheet>
            <SheetTrigger>
                <CiMenuFries className="text-[32px] text-main cursor-pointer" />
            </SheetTrigger> 
           <SheetContent className="flex flex-col p-6 gap-6 items-center">
            <nav className="flex flex-col gap-4 mt-10 text-center">
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
            </SheetContent>
        </Sheet>
    )
}

export default NavbarMovile