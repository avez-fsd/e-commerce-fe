'use client'

import React from 'react'
import Search from '@/public/assets/icons/search-2.svg'

export default function SearchBox() {
  return (
    <div className="flex items-center w-full lg:w-1/3 h-10 rounded-sm focus-within:shadow-sm bg-gray-100 overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-400">
            <Search className="h-6 w-6"/>
        </div>
        <input
            className="peer h-full w-full outline-none text-sm pr-2 bg-gray-100 text-gray-500"
            type="text"
            id="search"
            placeholder="Search something.." 
        /> 
    </div>
  )
}
