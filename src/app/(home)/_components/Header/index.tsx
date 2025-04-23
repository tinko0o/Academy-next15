"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import NavBar from "./navbar";

const Header = () => {
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-10 bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="w-full px-6">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className=" max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={` flex items-center ${
                  sticky ? "py-2 lg:py-5" : "py-5"
                } `}
              >
                <Image
                  src="/images/logo/logo.svg"
                  data-slot="avatar-image"
                  alt="logo"
                  width={50}
                  height={30}
                  className=" h-7 "
                />
                <p className="h-full font-extrabold text-lg">DÊMYC</p>
              </Link>
            </div>
            <NavBar />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
