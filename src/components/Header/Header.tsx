import React from 'react'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <header className="w-full h-[90px] bg-white fixed left-0 right-0 top-0">
        <div className="container mx-auto">
          <Navbar containerStyles='hidden xl:flex' />
        </div>
    </header>
  )
}

export default Header
