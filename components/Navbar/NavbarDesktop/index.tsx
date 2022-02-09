import React from "react";
import { useRouter } from "next/router";
import NavbarItem from "./NavbarItem/index";
import { Search, Command } from "react-feather";
import { Logo } from "../../global/index";
import Link from "next/link";

const Index = () => {
  const router = useRouter();

  return (
    <div className="sticky top-0 right-0 z-50 flex items-center w-full h-16 px-5 mb-10 space-x-4 font-bold bg-white ">
      <div className="flex items-center justify-center w-1/6 h-full">
        <Link href="/">
          <div>
            <Logo
              className="text-blue-400 cursor-pointer"
            />
          </div>
        </Link>
      </div>
      <div className="flex w-4/6 h-full space-x-5">
        <Link href="/" passHref>
          <NavbarItem>Home</NavbarItem>
        </Link>
        <Link href="/features" passHref>
          <NavbarItem>Features</NavbarItem>
        </Link>
        <Link href="/reviews" passHref>
          <NavbarItem>Reviews</NavbarItem>
        </Link>
        <Link href="/checkout" passHref>
          <NavbarItem>Purchase</NavbarItem>
        </Link>
        <Link href="/faq" passHref>
          <NavbarItem>FAQ</NavbarItem>
        </Link>
      </div>
    </div>
  );
};

export default Index;
