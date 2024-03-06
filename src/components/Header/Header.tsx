"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {

  const [headerActive, setHeaderActive] = useState(false);
  useEffect(() => {
    // initial scroll
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    }
    // Добавление скролла
    window.addEventListener('scroll', handleScroll);
    // Отмена скролла
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);
  return (
    <header className={`${headerActive ? 'h-[70px]' : 'h-[125px]'} transition-all z-50 w-full h-[90px] bg-primary-200 fixed left-0 right-0 top-0`}>
        <div className="container mx-auto h-full flex items-center justify-between">
          {/* Start logo */}
          <Link href="/">
            <Image src={'/assets/img/logo.png'} alt={'Логотип сайта WellFit'} width={60} height={60} />
          </Link>
          {/* End logo */}
          {/* mobile navbar - not visible for large screens */}
          <MobileNavbar containerStyles="text-white lg:hidden" />
          {/* desktop navbar - not visible for small screens */}
          <Navbar containerStyles='hidden text-white lg:flex' />
        </div>
    </header>
  )
}

export default Header
