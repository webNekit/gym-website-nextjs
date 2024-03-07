"use client";
import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa';
import { motion } from 'framer-motion';
// import main components
import { fadeIn } from '@/utils/variantsMotion';

const About = () => {

  const featureds = [
    {
      icon: <FaUsers />,
      title: 'Ответственные тренера',
      subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati rerum ex asperiores nulla labore?'
    },
    {
      icon: <IoIosPricetag />,
      title: 'Ответственные тренера',
      subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati rerum ex asperiores nulla labore?'
    },
    {
      icon: <FaDumbbell />,
      title: 'Ответственные тренера',
      subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati rerum ex asperiores nulla labore?'
    },
  ];

  return (
    <section className="pt-8 pb-16 lg:pt-16 lg:pb-28 bg-white" id='about'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center gap-2 mb-6">
          <h2 className="h2 text-center">О WellFit</h2>
          <p className="max-w-[600px] mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis unde voluptas non, cum quis autem! Quam nam inventore optio fugit fugiat laudantium nulla quaerat.</p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featureds.map((featured, index) => {
            return (
              <div key={index} className='flex flex-col justify-center items-center gap-4 border p-10 rounded-lg'>
                <div className='text-4xl text-center bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center'>{featured.icon}</div>
                <div>
                  <h3 className='h4 text-accent text-center mb-4'>{featured.title}</h3>
                  <p className='text-center'>{featured.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
