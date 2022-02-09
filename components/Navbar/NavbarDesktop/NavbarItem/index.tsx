import { AppProps } from "next/dist/shared/lib/router/router";
import React from "react";

const Index = React.forwardRef((props: any, ref: any) => {
  return (
    <a
      ref={ref}
      className="flex items-center justify-center w-1/5 border-t-4 border-transparent cursor-pointer hover:border-blue-400"
      {...props}
    >
      <span>{props.children}</span>
    </a>
  );
});

export default Index;
