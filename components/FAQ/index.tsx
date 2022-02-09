import React from "react";

const Question = () => {
  return (
    <div className="flex space-x-3">
      <div className="w-12 h-6 p-2 bg-red-300 flex justify-center items-center rounded-full">
        <span className="text-xl text-blue-500 font-bold">{`i`}</span>
      </div>
      <div className="flex flex-col space-y-4">
        <span className="text-xl font-bold">{`Why Use External It Support`}</span>
        <span className="text-sm">
          {`Every avid independent filmmaker has dreamed about making that special
          interest documentary, or shot film to show off their creative prowess.
          Many have great ideas.`}
        </span>
      </div>
    </div>
  );
};
const Index = () => {
  return (
    <div className="max-w-4xl m-auto flex flex-col space-y-10 h-screen">
      <div className="w-full flex flex-col items-center space-y-5">
        <span className="text-5xl font-bold">{`FAQ`}</span>
        <span className="text-sm font-bold">
          {`It's easy to get lose in the world of virtual reality becuase Mimini
          VR is engineered to feel lighter.`}
        </span>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-5">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  );
};

export default Index;
