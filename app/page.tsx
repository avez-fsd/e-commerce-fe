import Banner from '@/components/banner/banner'
import Navbar from '@/components/navbar/navbar'
import Image from 'next/image'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCarousel from '@/components/product/product-carousel'

export default function Home() {
  return (
    <div className='w-full'>
      <div className='bg-black p-2'>
        <p className='text-white text-center text-sm'>Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer Shop Now</p>
      </div>

      <div className='w-full'>
        <Banner banners={['/assets/images/bannerMen3.webp','/assets/images/bannerWomen3.webp']}/>
      </div>
      {/* <div className='lg:hidden'>
        <Banner banners={['/assets/images/banner1M.webp','/assets/images/banner2M.webp']}/>
      </div> */}

      <div className='flex justify-around flex-wrap mt-5'>
        <div className='relative w-[450px] h-[250px]'>
          <Image src="/assets/images/men2.webp" alt={''} fill layout='fill' objectFit='contain'/>
          <div className='absolute p-3 bg-white left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-sm'>
            <p className='text-center text-xl'>Men's</p>
          </div>
        </div>
        <div className='relative w-[450px] h-[250px]'>
          <Image src="/assets/images/women2.webp" alt={''} fill layout='fill' objectFit='contain'/>
          <div className='absolute p-3 bg-white left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-sm'>
            <p className='text-center text-xl'>Women's</p>
          </div>
        </div>
        <div className='relative w-[450px] h-[250px]'>
          <Image src="/assets/images/kids2.webp" alt={''} fill layout='fill' objectFit='contain'/>
          <div className='absolute p-3 bg-white left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-sm'>
            <p className='text-center text-xl'>Kid's</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='w-full lg:p-5'>
          <h3 className='text-center text-2xl mt-2 font-bold'>Blockbuster deals</h3>
            <ProductCarousel/>
        </div>
      </div>

      
       
    </div>
  )
}
