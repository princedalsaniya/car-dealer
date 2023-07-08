/*
  Component   : Hero
  Description : This is the Hero component.
  Params      : None
  Requires    : CustomBtn => For `ExporeCars` Btn
  Author      : Prince Dalsaniya
*/

'use client'

// imports
import CustomBtn from "./CustomBtn"
import Image from "next/image"

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book, Rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking process.
        </p>

        <CustomBtn 
          title='Explore Cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="Hero image" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  )
}

export default Hero