"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";

import cococunt from "@public/coconut.png";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between h-28 items-center px-5 xl:px-28 relative">
      <div>
        <Link
          href="/"
          className="font-Poppins font-semibold text-base sm:text-lg tracking-widest"
        >
          DreamTropical.io
        </Link>
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link href={"/events"} className="LinkText">
            Events
          </Link>
        </li>
        <li>
          <Link href={"#"} className="LinkText">
            Contact
          </Link>
        </li>
        <li>
          <Link
            href={"#"}
            className="LinkText px-10 border-l-[1px] border-gray-400"
          >
            Login
          </Link>
        </li>
      </ul>

      <div className="md:hidden relative ">
        {!toggleMenu && (
          <CgMenuRight
            onClick={() => setToggleMenu((prev) => !prev)}
            size={24}
            className="text-gray-600"
          />
        )}
      </div>

      {toggleMenu && (
        <div className="min-w-[250px] h-screen SliderColor  fixed top-0 right-0 md:hidden px-8 pt-3 z-50">
          <RiCloseLine
            onClick={() => setToggleMenu((prev) => !prev)}
            size={24}
            className="text-white"
          />

          <ul className="flex flex-col gap-2 mt-5 ">
            <li>
              <Link
                href="/events"
                className="text-white font-medium font-Poppins text-sm tracking-widest"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-white font-medium font-Poppins text-sm tracking-widest"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-white font-medium font-Poppins text-sm tracking-widest"
              >
                Login
              </Link>
            </li>
          </ul>
          <Image
            src={cococunt}
            alt="coconut"
            className="w-10 absolute top-[94%] left-[50%] -translate-x-[50%] -translate-y-[50%] "
          />
        </div>
      )}
    </header>
  );
}
