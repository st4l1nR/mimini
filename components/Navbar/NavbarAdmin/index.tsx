import React from "react";
import { useRouter } from "next/router";
import { Logo } from "../../global/index";

const Index = () => {
  const router = useRouter();
  return (
    <div className="sticky right-0 top-0 z-50 w-full h-20 mb-10 px-5 flex items-center space-x-10 font-bold bg-white ">
      <div className="w-1/6 h-full flex justify-center items-center">
        <Logo
          className="text-blue-400 cursor-pointer"
          onClick={() => router.push("/admin")}
        />
      </div>
      <div className="font-montserrat w-5/6 h-full flex items-center text-3xl text-blue-500">
        <span>Welcome Stalin</span>
      </div>
    </div>
  );
};

export default Index;
