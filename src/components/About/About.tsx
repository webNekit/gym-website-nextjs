"use client";
import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { IoIosPricetag } from 'react-icons/io';
import { FaDumbbell } from 'react-icons/fa';
import { motion } from 'framer-motion';
// import main components
import { fadeIn } from '@/utils/variantsMotion';

const About = () => {

  const featured = [
    {
      icon: <FaUsers />,
      title: 'Ответственные тренера',
      subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati rerum ex asperiores nulla labore?'
    }
  ];

  return (
    <section className="h-screen bg-yellow-300" id='about'>
      
    </section>
  )
}

export default About
