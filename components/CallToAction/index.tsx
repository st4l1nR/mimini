import React from "react";
import { Button } from "../global/index";

const Index = () => {
  return (
    <div className="max-w-lg m-auto p-5 flex flex-col space-y-5">
      <span className="text-5xl font-bold text-center">
        {`Live The Life You Want`}
      </span>
      <span className="text-sm font-bold text-center">
        {`If you want to spend hours with your Mimini VR, you can; the Mimini VR
        is engineered with your comfort in mind and is designed to feel
        comfortable when you're wearing it.`}
      </span>
      <div className="w-full flex justify-center">
        <Button>{`Purchase now`}</Button>
      </div>
    </div>
  );
};

export default Index;
