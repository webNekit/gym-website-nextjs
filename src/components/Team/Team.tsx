"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import CustomButton from '../CustomButton/CustomButton';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variantsMotion';
import useTrainers from '@/Hooks/useTrainers';

const trainers = [
  {
    img: '/assets/img/teams/img_1.jpg',
    name: 'Efrev Olegov',
    role: 'Мисс Олимпия',
    desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore nihil aspernatur impedit neque delectus?',
    socials: [
      { icon: FaFacebook, href: 'http.facebook.com' },
      { icon: FaInstagram, href: 'http.facebook.com' },
      { icon: FaTwitter, href: 'http.facebook.com' },
    ],
  },
  {
    img: '/assets/img/teams/img_2.jpg',
    name: 'Pavel Glebov',
    role: 'Мистер Олимпия',
    desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore nihil aspernatur impedit neque delectus?',
    socials: [
      { icon: FaFacebook, href: 'http.facebook.com' },
      { icon: FaInstagram, href: 'http.facebook.com' },
      { icon: FaTwitter, href: 'http.facebook.com' },
    ],
  },
  {
    img: '/assets/img/teams/img_3.jpg',
    name: 'War Thunder',
    role: 'Танк Олимпии',
    desription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore nihil aspernatur impedit neque delectus?',
    socials: [
      { icon: FaFacebook, href: 'http.facebook.com' },
      { icon: FaInstagram, href: 'http.facebook.com' },
      { icon: FaTwitter, href: 'http.facebook.com' },
    ],
  },
];

const Team = () => {

  const treanerList = useTrainers();

  return (
    <section className="w-full py-16 bg-primary-200" id='team'>
      <div className="container mx-auto">
        <div className="w-full">
          <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.2 }} className="h2 text-center mb-6">Наши тренера</motion.h2>
          <div  className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {treanerList.map((trainer, index) => {
              return (
                <>
                  <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.2 }} key={index} className='flex flex-col justify-center items-center gap-4'>
                    <div className="relative w-full h-[320px]">
                      <Image fill src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${trainer.attributes?.Image?.data.attributes?.url}`} alt={`Фото тренера ${trainer.attributes?.Name}`} className='object-cover' />
                    </div>
                    <h4 className='h4 text-accent'>{trainer.attributes?.Name}</h4>
                    <p className='text-center text-xs tracking-[2px]'>{trainer.attributes?.Position}</p>
                    <p className='uppercase text-center'>{trainer.attributes?.Description}</p>
                    {/* <ul className='flex justify-center gap-6'>
                      {trainer.socials.map((social, index) => {
                        return (
                          <li key={index}>
                            <Link href={social.href} target='_blank' className=''>
                              <social.icon />
                            </Link>
                          </li>
                        );
                      })}
                    </ul> */}
                  </motion.div>
                </>
              )
            })}
          </div>
          <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.2 }} className="w-full flex justify-center pt-16">
            <CustomButton containerStyles='w-[200px] h-[60px] py-4' text='Все тренеры' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Team
