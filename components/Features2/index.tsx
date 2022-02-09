import React from "react";
import { BiFullscreen } from "react-icons/bi";
import {Button} from '../global/index'
import { useRouter } from "next/router";

const FeatureItem = ({ children }: any) => {
  return (
    <div className="flex h-44 space-x-4 text-white">
      <BiFullscreen className="text-6xl" />
      <div className="flex flex-col space-y-4">
        <span className="text-xl font-extrabold">{children}</span>
        <span>Press and swipe to select and navigate</span>
      </div>
    </div>
  );
};

const Index = () => {
  const router = useRouter()
  return (
    <div
      className="w-full h-full p-5 flex justify-center items-center bg-local bg-cover bg-center"
      style={{
        height: "850px",
        backgroundImage: `url("/27.jpg")`,
      }}
    >
      <div className="max-w-5xl flex flex-col space-y-10 ">
        <div className="flex flex-col space-y-5 text-white">
          <span className="text-5xl font-bold text-center">
            Control Comes Naturally
          </span>
          <span className="text-lg text-center text-extrabold">
            Use the Mimini VR controller as a remote control to navigate your
            virtual reality with ease or use it as a gamepad complete with
            trigger to win battles. The controller is disigned to be used
            naturally with one hand.
          </span>
        </div>
        <div className="max-w-3xl m-auto grid grid-cols-2 gird-rows-2 gap-5">
          <FeatureItem>Touchpad</FeatureItem>
          <FeatureItem>Back - Home Key</FeatureItem>
          <FeatureItem>Trigger</FeatureItem>
          <FeatureItem>Volume Key</FeatureItem>
        </div>
        <div className='w-full flex justify-center items-center'>
          <Button onClick={() => router.push('/checkout')}>Purchase Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
