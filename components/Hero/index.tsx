import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Clipboard } from "react-feather";
import { CgScrollV } from "react-icons/cg";
import Link from "next/link";

const Index = () => {
  const router = useRouter();
  return (
    <div
      className="relative flex flex-col w-full p-2 text-center text-white md:static md:flex-row md:space-x-3 md:text-justify md:text-black bg-gradient-to-b from-gray-600 to-gray-100 md:from-transparent md:to-transparent"
      style={{ maxHeight: "90vh" }}
    >
      <div className="flex-col hidden w-1/6 space-y-10 md:flex">
        <div className="relative flex justify-center w-full shadow-sm h-1/3">
          <Image
            src="/3.png"
            alt="Men playing with virtual reality glasses"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative flex items-center justify-center w-full h-2/3">
          <div className="absolute flex space-x-3 text-xs font-semibold transform -rotate-90 top-1/2">
            <a href="http://instagram.com">Instagram</a>
            <a href="http://facebook.com">Facebook</a>
            <a href="http://twitter.com">Twitter</a>
          </div>
        </div>
      </div>

      <div
        className="z-10 flex flex-col w-full space-y-5 md:w-2/6 md:space-y-3 md:z-auto"
        style={{ marginLeft: 0 }}
      >
        <div className="flex h-5 space-x-3">
          <span className="font-bold">Mini VR Next Gen</span>
          <div className="w-2 h-full bg-blue-600"></div>
        </div>
        <span className="text-6xl font-bold md:text-6xl">
          Live the Life You Want.
        </span>
        <span className="font-semibold">
          It's easy to get lost in the world of virtual reality because the Mi
          Vr is enginered to feel lighter
        </span>
        <div className="flex justify-center w-full">
          <Link href="/checkout">
            <button className="flex items-center justify-center w-64 h-16 p-3 mt-3 space-x-1 text-white bg-blue-600 md:w-full">
              <span>Purchase Now</span>
              <Clipboard />
            </button>
          </Link>
        </div>

        <div className="flex justify-center w-full h-full md:items-center">
          <div className="flex items-center justify-center space-x-1">
            <CgScrollV className="text-xl text-blue-400" />
            <div className="flex flex-col ">
              <span className="font-bold">Discover Mini VR</span>
              <span className="text-gray-400">Scroll down</span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div className="absolute top-0 right-0 z-0 w-full h-full md:hidden">
        <div className="relative w-full h-full ">
          <Image src="/1.png" layout="fill" objectFit="cover" />
        </div>
      </div>

      <div className="relative hidden h-screen md:block md:w-5/6 ">
        <Image
          src="/1.png"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="object-contain w-full h-full object-center-top"
        />
      </div>
    </div>
  );
};

export default Index;
