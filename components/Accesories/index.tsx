import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../global/index";

const Item = ({ src }: any) => {
  return (
    <div className="relative w-full h-72 rounded-xl">
      <Image src={src} alt="" layout="fill" objectFit="cover"/>
      <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full p-3 bg-blue-600 opacity-0 hover:opacity-90">
        <div className="flex flex-col items-center space-y-3 text-white">
          <span className="text-xl font-bold">Hover Style</span>
          <span className="text-center">
            Every avoid independent filmaker has dreamed about making that
            special interest documentary
          </span>
        </div>
      </div>
    </div>
  );
};
const Index = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col items-center space-y-5">
        <span className="text-5xl font-bold">{`Accesories`}</span>
        <span className="text-sm font-bold text-center">
          {`It's easy to get lose in the world of virtual reality because Mimini
          VR is engineered to feel lighter.`}
        </span>
      </div>
      <div className="grid w-full max-w-4xl grid-cols-1 grid-rows-2 gap-2 m-auto md:grid-cols-3">
        <Item src="/19.jpg" />
        <Item src="/21.jpg" />
        <Item src="/20.jpg" />
        <Item src="/23.jpg" />
        <Item src="/22.jpg" />
        <Item src="/24.jpg" />
      </div>
    </div>
  );
};

export default Index;
