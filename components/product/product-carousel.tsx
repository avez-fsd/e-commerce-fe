"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "./product-card";
import Skeleton from "react-loading-skeleton";
import { Transition } from "@headlessui/react";

export default function ProductCarousel() {
  // const [isClient, setIsClient] = useState<boolean>(false);
  const [isShowing, setIsShowing] = useState(false);
  // useEffect(()=>{
  //     setIsClient(true)
  // },[])

  // if(!isClient){
  //     return (
  //         <Skeleton className='h-40 lg:h-56'/>
  //     )
  // }else {
  return (
    <>
      <Slider
        infinite
        speed={2000}
        cssEase="linear"
        arrows={false}
        autoplay
        slidesToShow={7}
        slidesToScroll={1}
        useTransform={false}
        responsive={[
          {
            breakpoint: 1136,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 891,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 658,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Slider>
    </>
  );
  // }
}
