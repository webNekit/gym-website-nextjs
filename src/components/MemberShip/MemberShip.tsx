"use client";
import React from 'react';
import MemberShipSlider from '../MemberShipSlider/MemberShipSlider';

const MemberShip = () => {
  return (
    <section className='w-full py-24 bg-membership bg-center bg-cover bg-no-repeat' id="memberShip">
        <div className="container mx-auto">
            <h2 className="h2 text-white text-center">Программа тренировок</h2>
            <div className="w-full pt-12">
              <MemberShipSlider />
            </div>
        </div>
    </section>
  )
}

export default MemberShip