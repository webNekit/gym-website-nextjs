"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Navbar from '../Navbar/Navbar';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import Link from 'next/link';
import Image from 'next/image';
import { MdMenu } from 'react-icons/md';
import { RegisterLink, LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

const Header = () => {

  // состояние скролла
  const [headerActive, setHeaderActive] = useState(false);
  // состояние открытия меню
  const [openNav, setOpenNav] = useState(false);
  // Переменная для хронения информации о пользователе
  const { user } = useKindeBrowserClient();
  useEffect(() => {
    console.log(user);
  }, [user]);

  // обработчик скрола
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
    <header className={`${headerActive ? 'h-[70px]' : 'h-[125px]'} transition-all z-50 w-full h-[80px] bg-primary-200 fixed left-0 right-0 top-0`}>
        <div className="container mx-auto h-full flex items-center justify-between">
          {/* Start logo */}
          <Link href="/">
            <Image src={'/assets/img/logo.png'} alt={'Логотип сайта WellFit'} width={60} height={60} />
          </Link>
          {/* End logo */}
          {/* mobile navbar - not visible for large screens */}
          <MobileNavbar containerStyles={`${headerActive ? 'top-[70px]' : 'top-[80px]'} 
          ${openNav ? 'max-h-max pt-8 pb-10 border-t border-white/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'}
          transition-all text-white p-[15px] flex flex-col align-start gap-4 uppercase font-medium fixed bg-primary-200 w-full left-0 right-0 lg:hidden`} />
          {/* desktop navbar - not visible for small screens */}
          <Navbar containerStyles='hidden text-white lg:flex' />
          {/* menu button */}
          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-2">
              {user ?
              <LogoutLink className='uppercase text-white/50 hover:text-accent transition-all'>Выйти</LogoutLink> 
              : 
              <LoginLink className='uppercase text-white/50 hover:text-accent transition-all'>Войти</LoginLink>
              }
              
            </ul>
            <button onClick={() => setOpenNav(!openNav)} className='text-white lg:hidden'>
              <MdMenu className="text-4xl" />
            </button>
          </div>
        </div>
    </header>
  )
}

export default Header
