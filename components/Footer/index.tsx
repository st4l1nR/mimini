import React from "react";
import { Facebook, Twitter, Instagram, Command } from "react-feather";
import { Logo } from "../global/index";
import Image from 'next/image'

const Index = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-40 mt-10 space-y-3 text-white justify-self-end ">
      <Logo className="z-10 text-white" />
      <div className="z-10 flex space-x-3">
        <a href="https://facebook.com">
          <Facebook />
        </a>
        <a href="https://instagram.com">
          <Instagram />
        </a>
        <a href="https://twitter.com">
          <Twitter />
        </a>
      </div>
      <Image
        className="filter brightness-50"
        src="/26.jpg"
        layout="fill"
        objectFit="cover"
      ></Image>
    </div>
  );
};

export default Index;
