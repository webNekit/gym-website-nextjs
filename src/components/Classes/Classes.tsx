"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

// import main components
import { fadeIn } from '@/utils/variantsMotion';
import CustomButton from '../CustomButton/CustomButton';

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
    <section className="w-full" id='classes'>
        <motion.div variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.2 }} className="w-full grid grid-cols-1 lg:grid-cols-2">
          {classes.map(( item, index ) => {
            return (
              <>
                <div className='relative w-full h-[300px] lg:h-[485px] flex flex-col ' key={index}>
                  <div className='bg-black/60 absolute w-full h-full top-0 z-10 flex flex-col justify-center items-center gap-4 p-4 lg:p-12'>
                    <h3 className='h3 text-accent uppercase'>{item.name}</h3>
                    <p className='text-white text-xl text-center'>{item.description}</p>
                    <div>
                      <CustomButton containerStyles='p-4' text='Подробнее'/>
                    </div>
                  </div>
                  <Image fill src={item.img} alt="Изображение" className='object-cover' />
                </div>
              </>
            )
          })}
        </motion.div>
    </section>
  )
}

export default Classes
