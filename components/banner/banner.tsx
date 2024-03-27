'use client'

import Image from 'next/image'
import React from 'react'

import Slider from "react-slick";



export default function Banner({banners}:any) {
  return (
    <Slider infinite speed={2000} autoplay arrows={false} useTransform={false} fade>
      <div className='relative'>
        <Image
          src={banners[0]}
          width={0}
          height={0}
          sizes="100vw"
          alt={"Background Image"}
          className='w-full h-[60vh] lg:h-[70vh] object-cover'
        />

        {/* The child element */}
        <div
          className='absolute top-[50%] left-[50%] sm:left-[30%] translate-x-[-50%] translate-y-[-50%] z-10 p-5 space-y-4'
        >
          <h1 className='text-3xl text-center text-purple-700'>Fashion Sale</h1>
          <h1 className='text-3xl text-center animate-pulse'>
            Minimal Menz Style
          </h1>
          <p className='text-center w-[350px] text-gray-700'>
            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.
          </p>
          <div className='flex justify-center'>
            <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4">
              Shop Now
            </button>

          </div>
        </div>
      </div>
      <div className='relative'>
        <Image
          src={banners[1]}
          width={0}
          height={0}
          sizes="100vw"
          alt={"Background Image"}
          className='w-full h-[60vh] lg:h-[70vh] object-cover'
        />

        {/* The child element */}
        <div
          className='absolute top-[50%] left-[50%] sm:left-[70%] translate-x-[-50%] translate-y-[-50%] z-10 p-5 space-y-4'
        >
          <h1 className='text-3xl text-center text-purple-700'>Fashion Sale</h1>
          <h1 className='text-3xl text-center'>
            Minimal Menz Style
          </h1>
          <p className='text-center w-[350px] text-gray-700'>
            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.
          </p>
          <div className='flex justify-center'>
            <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4">
              Shop Now
            </button>

          </div>
        </div>
      </div>
    </Slider>
  )
}
