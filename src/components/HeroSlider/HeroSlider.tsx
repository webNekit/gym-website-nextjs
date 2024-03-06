"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import CustomButton from '../CustomButton/CustomButton';
import SwiperNavButtons from '../SwiperNavButtons/SwiperNavButtons';

const HeroSlider = () => {
  return (
    <Swiper className='w-full h-full'>
        <SwiperSlide className="w-full h-full flex justify-end">
            <div className='lg:max-w-[65%] lg:ml-auto'>
                <h1 className="h1 text-center lg:text-left mb-8">
                    <span>Начни работу</span> над собой
                </h1>
                <p className="text-slate-200 text-xl text-center lg:text-left mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae architecto officiis voluptatem cupiditate aut deserunt.</p>
                <CustomButton text={'Заказать консультацию'} containerStyles={'sm:w-[200px] w-full h-[60px] px-4'} />
            </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full flex justify-end">
            <div className='lg:max-w-[65%] lg:ml-auto'>
                <h1 className="h1 text-center lg:text-left mb-8">
                    <span>Начни работу</span> над собой
                </h1>
                <p className="text-slate-200 text-xl text-center lg:text-left mb-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae architecto officiis voluptatem cupiditate aut deserunt.</p>
                <CustomButton text={'Заказать консультацию'} containerStyles={'sm:w-[200px] w-full h-[60px] px-4'} />
            </div>
        </SwiperSlide>
        <SwiperNavButtons 
          containerStyles="absolute bottom-2 lg:bottom-0 left-0 w-full z-50 flex justify-center lg:justify-start gap-2" 
          btnStyles='border border-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300' 
          iconsStyles='text-2xl' 
        />
    </Swiper>
  )
}

export default HeroSlider