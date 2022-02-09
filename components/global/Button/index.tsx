import React from "react";

const Index = ({ width, color, children, ...props }: any) => {
  return (
    <button
      className={`${width ? width : "w-44 "} h-12 p-2 ${
        color ? color : "bg-blue-600"
      } text-white flex justify-center items-center text-center`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Index;
