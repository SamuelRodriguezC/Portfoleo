"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";
import { Button } from "@/components/ui/button";

// liks para la barra de navegación
const navItems = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Servicios",
    path: "/services",
  },
  {
    name: "Currículum ",
    path: "/resume",
  },
  {
    name: "Proyectos",
    path: "/work",
  },
  {
    name: "Contacto",
    path: "/contact",
  },
];

const NavbarMovile = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-main cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col p-6 gap-6 items-center">
        <nav className="flex flex-col gap-4 mt-10 text-center">
          {navItems.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className={`${
                  item.path === pathName
                    ? "text-main border-b-2 border-main"
                    : "nav-item-hover"
                } capitalize`}
              >
                {item.name}
              </Link>
            );
          })}
          <a
            href="/cv/cv_samuel_rodriguez.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <span>Ver CV</span>
              <BsDownload className="text-xl" />
            </Button>
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMovile;
