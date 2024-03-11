"use client"
import React from 'react';
import Image from 'next/image';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';

const HeaderUserAction = ({ imagePath } : { imagePath: string }) => {
  return (
    <>
        <Image src={imagePath} alt='Фото профиля' width={50} height={50} className='' />
        <LogoutLink className='uppercase text-white/50 hover:text-accent transition-all'>Выйти</LogoutLink> 
    </>
  )
}

export default HeaderUserAction