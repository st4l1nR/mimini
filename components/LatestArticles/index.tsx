import React from "react";
import Image from "next/image";
const Article = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 space-y-3">
      <span className="text-xl font-bold text-center">
        Why Use External It Support
      </span>
      <span className="text-sm font-semibold text-center">
        Every avid independent filmaker has dreamed about making that special
        interest documentary, or short film to show of their creative prowess.
        Many have great ideas.
      </span>
    </div>
  );
};
const Index = () => {
  return (
    <div className="flex flex-col max-w-4xl m-auto">
      <div className="flex flex-col items-center justify-center w-full px-5 mb-10 space-y-3">
        <span className="text-5xl font-bold text-center">Latest Articles</span>
        <span className="text-sm font-semibold text-center">
          It's easy to get in the world of the virtual reality because the
          Mimini VR is engineered to feel lighter
        </span>
      </div>

      <div className="grid grid-cols-2 grid-rows-3">
        <div className="relative w-full h-full md:h-64 ">
          <Image
            src="/15.jpg"
            alt="kids using vr"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <Article />

        <Article />

        <div className='relative w-full h-full md:h-64 '>
          <Image
            src="/17.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="relative w-full h-full md:h-64 ">
          <Image
            src="/25.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <Article />
      </div>

      <span className="flex items-center justify-center w-full h-16 font-extrabold text-white bg-blue-600 text-md ">
        Purchase Mimini VR Today
      </span>
    </div>
  );
};

export default Index;
