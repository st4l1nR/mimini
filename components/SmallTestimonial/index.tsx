import React from "react";

const Index = () => {
  const TestimonialItem = ({ type }: any) => {
    const NewYorkIcon = () => <img src="/nytimes-wordmark.svg" alt="new york times logo" className='w-44 h-auto' />;
    const TechCrunchIcon = () => <img src="/techcrunch-icon.svg" alt="techcrunch logo" className='w-9 h-auto' />;
    return (
      <div className="flex flex-col space-y-3">
        {type === "ny" ? <NewYorkIcon /> : <TechCrunchIcon />}
        <span>
          "It's easy to get lose in the world of virtual reality becuase Mimini
          VR is engineered to feel lighter."
        </span>
        <span className="text-sm font-bold">
          {type === "ny" ? "The New York Times" : "TechCrunch"}
        </span>
      </div>
    );
  };

  return (
    <div className="h-screen max-w-4xl m-auto flex flex-col space-y-11">
      <div className="flex flex-col items-center space-y-2">
        <span className="text-3xl font-bold">In the Press</span>
        <span className="text-sm font-semibold">
          It's easy to get lose in the world of virtual reality becuase Mimini
          VR is engineered to feel lighter.
        </span>
      </div>
      <div className="p-5 grid grid-cols-2 grid-rows-3 gap-5">
        <TestimonialItem type="ny" />
        <TestimonialItem />
        <TestimonialItem type="ny" />
        <TestimonialItem />
        <TestimonialItem type="ny" />
        <TestimonialItem />
      </div>
    </div>
  );
};

export default Index;
