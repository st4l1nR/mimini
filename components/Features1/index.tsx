import React from "react";
import { IoLogoGameControllerB } from "react-icons/io";
import { RiRemoteControl2Line, RiSignalTowerFill } from "react-icons/ri";
import Image from "next/image";

const Index = () => {
  return (
    <div
      className="flex flex-col items-center justify-center m-auto space-y-10 max-w-7xl"
      style={{ height: "700px" }}
    >
      <div className="flex flex-col w-full space-y-3 text-center h-1/6">
        <span className="text-5xl font-bold">
          {`Wear it with Ease and Confort Ever`}
        </span>
        <span className="text-sm font-semibold text-center">
          {` It's easy to get lost in the world of virtual reality because the
          Mimini VR is engineered to feel lighter.`}
        </span>
      </div>

      <div className="relative flex w-full pt-12 space-x-4 h-5/6">
        <div className="relative hidden w-3/4 h-full md:block ">
          <Image
            src="/3.png"
            alt="men using vr"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="flex flex-col justify-around w-full p-5 md:w-2/4 md:justify-center md:space-y-11">
          <div className="flex space-x-5">
            <RiRemoteControl2Line className="w-16 h-16 text-blue-500" />
            <div className="flex flex-col space-y-2">
              <span className="text-xl font-bold">{`Strap In For The Ride`}</span>
              <span>
                {`It's easy to get lost in the world of virtual reality because
                the Mimini VR is engineered to feel lighter.`}
              </span>
            </div>
          </div>
          <div className="flex space-x-5">
            <IoLogoGameControllerB className="w-16 h-16 text-blue-500" />
            <div className="flex flex-col space-y-2">
              <span className="text-xl font-bold">Strap In For The Ride</span>
              <span>
                It's easy to get lost in the world of virtual reality because
                the Mimini VR is engineered to feel lighter.
              </span>
            </div>
          </div>

          <div className="flex space-x-5">
            <RiSignalTowerFill className="w-16 h-16 text-blue-500" />
            <div className="flex flex-col space-y-2">
              <span className="text-xl font-bold">{`Strap In For The Ride`}</span>
              <span>
                {`It's easy to get lost in the world of virtual reality because
                the Mimini VR is engineered to feel lighter.`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
