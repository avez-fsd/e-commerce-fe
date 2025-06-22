import React from "react";
import Menu from "@/public/assets/icons/menu.svg";
import Search from "@/public/assets/icons/search.svg";
import CartIcon from "@/public/assets/icons/cart.svg";
import Heart from "@/public/assets/icons/heart.svg";
import Link from "next/link";
import Image from "next/image";
import SearchBox from "./search-box";
import Cart from "../cart/cart";

export default function Navbar() {
  return (
    <>
      <nav className="fixed w-full top-0 bg-white drop-shadow shadow-md p-3 h-[60px] lg:h-[80px] z-10">
        <div className="flex justify-between flex-wrap h-full items-center lg:hidden">
          <div className="flex space-x-4">
            <Link href="">
              <Menu className="text-2xl" />
            </Link>
            <span className="text-ellipsis">Myntra</span>
          </div>

          <div className="flex space-x-3">
            <Link href="">
              <Search className="text-2xl" />
            </Link>
            <Link href="">
              <Heart className="text-2xl" />
            </Link>
            <Link href="">
              <CartIcon className="text-2xl" />
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex h-full items-center justify-around">
          <Image
            src="/assets/images/myntra.webp"
            alt={""}
            width={56}
            height={56}
            className="w-auto h-auto"
          />
          <ul className="flex space-x-10">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
          <SearchBox />
          <div className="flex space-x-5">
            <Link href="">
              <div className="flex flex-col justify-center items-center">
                <Heart className="text-2xl" />
                <span className="">Wishlist</span>
              </div>
            </Link>
            <Link href="">
              <div className="flex flex-col justify-center items-center">
                <CartIcon className="text-2xl" />
                <span className="">Bag</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <Cart />
    </>
  );
}
