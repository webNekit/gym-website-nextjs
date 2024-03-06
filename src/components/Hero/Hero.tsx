import React from 'react'
import HeroSlider from '../HeroSlider/HeroSlider'

const Hero = () => {
  return (
    <section className="w-full py-56 bg-hero bg-cover bg-center bg-no-repeat" id='home'>
      <div className="container mx-auto h-full">
        <HeroSlider />
      </div>
    </section>
  )
}

export default Hero
