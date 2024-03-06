"use client";
import React from 'react';
import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

const SwiperNavButtons = ({
  containerStyles,
  btnStyles,
  iconsStyles
}: {
  containerStyles: string,
  btnStyles: string,
  iconsStyles: string
}) => {
  // настройка для swiper
  const swiper = useSwiper();
  return (
    <div className={`${containerStyles}`}>
      <button className={`${btnStyles}`} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={`${iconsStyles}`} />
      </button>
      <button className={`${btnStyles}`} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={`${iconsStyles}`} />
      </button>
    </div>
  )
}

export default SwiperNavButtons