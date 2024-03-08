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
    <Swiper>
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
    </Swiper>
  )
}

export default MemberShipSlider;