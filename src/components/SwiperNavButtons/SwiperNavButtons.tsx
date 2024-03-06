"use client";
import React from 'react';
import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

const SwiperNavButtons = ({
    containerStyles,
    btnStyles,
    iconsStyles
} : {
    containerStyles: string,
    btnStyles: string,
    iconsStyles: string
}) => {
  return (
    <div className={`${containerStyles}`}>
      <button className={`${btnStyles}`}>
        <PiCaretLeftBold  className={`${iconsStyles}`} />
      </button>
      <button className={`${btnStyles}`}>
        <PiCaretRightBold  className={`${iconsStyles}`} />
      </button>
    </div>
  )
}

export default SwiperNavButtons