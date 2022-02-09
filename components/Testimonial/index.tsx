import React from "react";

const Index = () => {
  return (
    <div
      className="relative p-5 flex justify-center items-center bg-local bg-cover bg-center bg-no-repeat"
      style={{ height: "700px", backgroundImage: `url("/4.jpg")` }}
    >
      <div className="max-w-xl m-auto flex flex-col justify-center items-center space-y-10 text-3xl text-white">
        <span className='text-3xl text-center'>
          While you're journey through uncharted lands, the strap keeps the
          Mmini VR securely on and the foam cushioning helps prevent too much
          light from seeping in.
        </span>
        <span className='text-xl font-bold'>JONH DOE  /  OUR CLIENT</span>
      </div>
    </div>
  );
};

export default Index;
