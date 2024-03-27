'use client'

import React from 'react'
import Image from 'next/image'

export default function ProductCard() {
  return (
    <div className="flex w-full max-w-[200px] flex-col overflow-hidden rounded-sm bg-white shadow-md">
        <a className="relative mx-3 mt-3 flex h-40 lg:h-56 overflow-hidden" href="#">
          <Image fill={true} className="object-cover"  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-xs font-medium text-white">39% OFF</span>
        </a>
        <div className="mt-2 px-2">
          <a href="#">
            <h5 className="text-sm tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p className='space-x-1'>
              <span className="text-xm font-bold text-slate-900">$449</span>
              <span className="text-sm text-slate-900 line-through">$699</span>
            </p>
          </div>
          {/* <a href="#" className="flex items-center justify-center space-x-1 rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <CartBag className='text-2xl'/>
            <span> Add to Bag</span>
            
          </a> */}
        </div>
      </div>
  )
}
