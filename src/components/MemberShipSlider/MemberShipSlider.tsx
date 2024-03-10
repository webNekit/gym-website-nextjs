"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { MdClose } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
// import main components
import CustomButton from '../CustomButton/CustomButton';
// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const MemberShipSlider = () => {

  const memberShipData = [
    {
      title: 'Standart',
      price: 1200,
      benefits: [
        {
          icon: FaCheck,
          text: "Include memberShips"
        },
        {
          icon: FaCheck,
          text: "Include memberShips"
        },
        {
          icon: FaCheck,
          text: "Include memberShips"
        },
      ]
    },
    {
      title: 'Standart',
      price: 1200,
      benefits: [
        {
          icon: FaCheck,
          text: "Include memberShips"
        },
        {
          icon: FaCheck,
          text: "Include memberShips"
        },
        {
          icon: FaCheck,
          text: "Include memberShips"
        },
      ]
    },
    {
      title: 'Standart',
      price: 1200,
      benefits: [
        {
          icon: FaCheck,
          text: "Include memberShips"
        },
        {
          icon: FaCheck,
          text: "Include memberShips"
        },
        {
          icon: FaCheck,
          text: "Include memberShips"
        },
      ]
    },
  ];

  return (
    <Swiper className="w-full h-[calc(100% + 120px)]" slidesPerView={1} modules={[ Pagination ]} pagination={{ clickable: true }} breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 30 }, 1024: { slidesPerView: 3, spaceBetween: 30 }  }}>
      {memberShipData.map((item, index) => {
        return (
          <>
            <SwiperSlide key={index}>
              <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-full lg:max-w-none">
                <div className="py-5 px-5 border-b border-accent">
                  <h4 className="h4 text-center text-white">{item.title}</h4>
                </div>
                <div className='w-full px-5 py-5'>
                  <ul className="w-full flex flex-col gap-4">
                    {item.benefits.map((item, index) => {
                      return (
                        <>
                          <li key={index} className="flex items-center gap-2 text-white">
                            <item.icon className='text-white/70' />
                            <span className="text-xl">{item.text}</span>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
                <div className="w-full px-5 py-5 border-t border-accent">
                    <p className="text-center text-2xl text-white uppercase font-bold">{item.price} руб.</p>
                </div>
              </div>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  )
}

export default MemberShipSlider;