import React from 'react'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <header className="w-full fixed left-0 right-0 top-0">
        <div className="container mx-auto">
          <Navbar containerStyles='bg-red-200 py-12' />
        </div>
    </header>
  )
}

export default Header
