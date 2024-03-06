import React from 'react'
import HeroSlider from '../HeroSlider/HeroSlider'

const Hero = () => {
  return (
    <section className="w-full pb-32 bg-hero bg-cover bg-center bg-no-repeat" id='home'>
      <div className="container mx-auto">
        <HeroSlider />
      </div>
    </section>
  )
}

export default Hero
