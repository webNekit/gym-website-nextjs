"use client";
import { Link as ScrollLink } from 'react-scroll';
import React from 'react';
import Link from 'next/link';

const links = [
    { label: "Главная", target: "home", offset: -100 },
    { label: "О нас", target: "about", offset: -80 }, 
    { label: "Классы", target: "classes", offset: -80 },
    { label: "Тренеры", target: "team", offset: -40 },
    { label: "Программа тренировок", target: "memberShip", offset: -20 },
    { label: "Блог", target: "blog", offset: 0 }, 
]

const Navbar = ({containerStyles}: {containerStyles: string}) => {
  return (
    <nav className={`${containerStyles}`}>
      <menu className="w-full flex gap-4">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <ScrollLink offset={link.offset} to={link.target} smooth spy activeClass='active' className="cursor-pointer hover:text-accent transition-all">{link.label}</ScrollLink>
            </li>
          );
        })}
      </menu>
    </nav>
  )
}

export default Navbar
