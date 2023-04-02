import React, { useState } from "react";
import { GiBroadsword, GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { navMenu } from "@/constant";
import Link from "next/link";
import Button from "@/libs/atoms/Button";

type Props = {};

function Header({}: Props) {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleMenu = () => {
    setisMenuOpen(!isMenuOpen)
  };

  return (
    <nav className="sticky top-0 left-0 right-0 shadow-md bg-transparent backdrop-blur-md">
      <div className={`absolute ${isMenuOpen?'top-0':'-top-96'} left-0 right-0 transition-all ease-in-out duration-500`}>
        <div className="relative">
          <ul className="text-xl flex flex-col justify-center items-center py-4 h-72 bg-white shadow-lg space-y-2">
            {navMenu &&
              navMenu.map(({ menu, link }, i) => (
                <li
                  className="inline hover:bg-slate-200 p-2 rounded-xl transition-all duration-150 ease-out w-full text-center"
                  key={i}
                >
                  <Link href={link}>{menu}</Link>
                </li>
              ))}
          </ul>
          <GrClose onClick={handleMenu} className="absolute h-5 w-auto top-4 right-4" />
        </div>
      </div>
      <div className="flex items-center justify-between p-4 md:p-6 ">
        <div className="flex items-center font-semibold text-md text-indigo-600">
          <GiBroadsword className="h-6 w-auto" />
          <span className="italic text-3xl">Rzrstore</span>
          <span className="block">.GG</span>
        </div>
        <ul className="hidden text-lg md:text-xl flex-1 sm:flex space-x-4 md:space-x-8 justify-end mr-10">
          {navMenu &&
            navMenu.map(({ menu, link }, i) => (
              <li
                className="inline hover:bg-slate-200 p-2 rounded-xl transition-all duration-150 ease-out"
                key={i}
              >
                <Link href={link}>{menu}</Link>
              </li>
            ))}
        </ul>
        <div className="self-end">
          <div className="hidden sm:block">
            <Button isPrimary={true}>Sign In</Button>
          </div>
          <GiHamburgerMenu
            onClick={handleMenu}
            className="h-7 w-auto sm:hidden text-gray-700"
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
