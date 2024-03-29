"use client";
import React, { useRef } from 'react';
import { FaBriefcase, FaClock, FaTrophy, FaUsers } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
// import main components
import { fadeIn } from '@/utils/variantsMotion';
import CountUp from 'react-countup';

const About = () => {

  // Преимущества
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
  // Достижения
  const stats = [
    {
      number: 19,
      icon: FaBriefcase,
      text: "Залов в Москве"
    },
    {
      number: 879,
      icon: FaClock,
      text: "Рабочих часов"
    },
    {
      number: 150,
      icon: FaUsers,
      text: "Довольных клиентов"
    },
    {
      number: 9,
      icon: FaTrophy,
      text: "Наград"
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref);
  const statsContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        duration: 0.5,
        ease: 'linear'
      },
    },
  };

  const statsItem = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [ 0.25, 0.6, 0.3, 0.8 ],
      }
    }
  };

  return (
    <section className="pt-8 pb-16 lg:pt-16 lg:pb-28 bg-white" id='about'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center gap-2 mb-6">
          <motion.h2 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}} className="h2 text-center">О WellFit</motion.h2>
          <motion.p variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}} className="max-w-[600px] mx-auto text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veritatis unde voluptas non, cum quis autem! Quam nam inventore optio fugit fugiat laudantium nulla quaerat.</motion.p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {featureds.map((featured, index) => {
            return (
              <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.2}} key={index} className='flex flex-col justify-center items-center gap-4 border p-10 rounded-lg'>
                <div className='text-4xl text-center bg-primary-300 text-white w-[80px] h-[80px] rounded-full flex justify-center items-center'>{featured.icon}</div>
                <div>
                  <h3 className='h4 text-accent text-center mb-4'>{featured.title}</h3>
                  <p className='text-center'>{featured.subtitle}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
        <div className="w-full">
          <motion.div variants={statsContainerVariant} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='w-full grid grid-cols-2 md:grid-cols-4'>
            {stats.map((stat, index) => {
              return (
                <motion.div key={index} variants={statsItem} className="flex flex-col justify-center items-center gap-5">
                  <div className='border border-accent/90 w-[140px] h-[140px] rounded-full p-1'>
                    <div ref={ref} className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full">
                      {isInView && (
                        <CountUp start={0} end={stat.number} duration={6} />
                      )}
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center text-center'>
                    <stat.icon className="text-3xl mb-2" />
                    <h4 className='h4'>{stat.text}</h4>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
