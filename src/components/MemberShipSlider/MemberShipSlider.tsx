"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { MdClose } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import GlobalAPI from '@/utils/GlobalAPI';
// import main components
import CustomButton from '../CustomButton/CustomButton';
// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const MemberShipSlider = () => {


  const [priceList, setPriceList] = useState([]);

  useEffect(() => {
    getPriceList();
  },[]);

  const getPriceList = () => {
    GlobalAPI.getPrices().then(resp => {
      console.log(resp.data.data);
      setPriceList(resp.data.data);
    });
  }

  return (
    <Swiper className="w-full h-[calc(100% + 120px)]" slidesPerView={1} modules={[ Pagination ]} pagination={{ clickable: true }} breakpoints={{ 768: { slidesPerView: 2, spaceBetween: 30 }, 1024: { slidesPerView: 3, spaceBetween: 30 }  }}>
      {priceList.map((item, index) => {
        return (
          <>
            <SwiperSlide key={index} className="h-full">
              <div className="border h-full border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-full lg:max-w-none">
                <div className="py-5 px-5 border-b border-accent">
                  <h4 className="h4 text-center text-white">{item.attributes?.Name}</h4>
                </div>
                <div className='w-full px-5 py-5'>
                  <ul className="w-full flex flex-col gap-4">
                    {item.attributes?.Benef.map((item, index) => {
                      return (
                        <>
                          <li key={index} className="flex items-center gap-2 text-white">
                            <FaCheck />
                            {item.name}
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
                <div className="w-full px-5 py-5 border-t border-accent">
                    <p className="text-center text-2xl text-white uppercase font-bold">{item.attributes?.Price} руб.</p>
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