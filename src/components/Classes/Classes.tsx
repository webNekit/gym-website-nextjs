"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

// import main components
import { fadeIn } from '@/utils/variantsMotion';

const classes = [
  {
    name: 'Бодибилдинг',
    img: '/assets/img/classes/img_1.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, porro!'
  },
  {
    name: 'Кроссфит',
    img: '/assets/img/classes/img_2.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, porro!'
  },
  {
    name: 'Кардио',
    img: '/assets/img/classes/img_3.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, porro!'
  },
  {
    name: 'Пауэрлифтинг',
    img: '/assets/img/classes/img_4.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, porro!'
  },
];

const Classes = () => {
  return (
    <section className="w-full h-screen bg-green-300" id='classes'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, porro!
    </section>
  )
}

export default Classes
