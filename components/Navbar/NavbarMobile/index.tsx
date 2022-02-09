import React, { useState } from "react";
import { useRouter } from "next/router";
import { Menu as MenuIcon, Command, X } from "react-feather";
import { Logo } from "../../global/index";
import NavbarItem from "./NavbarItem/index";
import Link from "next/link";

const Index = () => {
  const router = useRouter();
  const [isMenu, setIsMenu] = useState(false);

  const handlePush = (path: string) => {
    router.push(path);
    setIsMenu(false);
  };
  return (
    <div className="sticky top-0 right-0 z-50 flex w-full h-16 px-4 mb-5 bg-white">
      <div className="flex items-center justify-start w-1/3 cursor-pointer">
        <MenuIcon onClick={() => setIsMenu(true)} />
      </div>
      <div className="flex items-center justify-center w-1/3 h-full">
        <Link href="/">
          <div>
            <Logo
              className="text-blue-400 cursor-pointer"
            />
          </div>
        </Link>
      </div>
      <div
        className={`absolute left-0 w-full h-screen p-5 bg-gradient-to-b from-blue-500 to-blue-300 flex flex-col space-x-4 z-50 ${
          !isMenu && "hidden"
        }`}
      >
        <div className="flex justify-end w-full">
          <X
            className="text-white cursor-pointer"
            onClick={() => setIsMenu(false)}
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-screen space-y-10 text-2xl text-white">
          <Link href="/" passHref>
            <NavbarItem onClick={() => setIsMenu(false)}>Home</NavbarItem>
          </Link>
          <Link href="/features" passHref>
            <NavbarItem onClick={() => setIsMenu(false)}>Features</NavbarItem>
          </Link>
          <Link href="/reviews" passHref>
            <NavbarItem onClick={() => setIsMenu(false)}>Reviews</NavbarItem>
          </Link>
          <Link href="/checkout" passHref>
            <NavbarItem onClick={() => setIsMenu(false)}>Purchase</NavbarItem>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
