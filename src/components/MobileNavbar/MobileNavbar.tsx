"use client";
import { Link as ScrollLink } from 'react-scroll';
import React from 'react';

const links = [
    { label: "Главная", target: "home", offset: -100 },
    { label: "О нас", target: "about", offset: -80 },
    { label: "Классы", target: "classes", offset: -80 },
    { label: "Тренеры", target: "team", offset: -40 },
    { label: "Блог", target: "blog", offset: 0 },
]
const MobileNavbar = ({ containerStyles }: { containerStyles: string }) => {
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <li className='inline-flex' key={index}>
                        <ScrollLink offset={link.offset} to={link.target} smooth spy activeClass='active' className="cursor-pointer hover:text-accent transition-all">{link.label}</ScrollLink>
                    </li>
                )
            })}
        </nav>
    )
}

export default MobileNavbar