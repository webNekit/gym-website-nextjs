import React from 'react'

const link = [
    { label: "Главная", target: "home", offset: -100 },
    { label: "О нас", target: "about", offset: -80 }, 
    { label: "Классы", target: "classes", offset: -80 },
    { label: "Команда", target: "team", offset: -40 },
    { label: "Блог", target: "blog", offset: 0 }, 
]

const Navbar = ({containerStyles}: {containerStyles: string}) => {
  return (
    <nav className=''>
      Nav
    </nav>
  )
}

export default Navbar
