import React from "react";
import { Command } from "react-feather";
const Index = (props: any) => {
  const { className, ...customProps } = props;
  return (
    <div
      className={`flex items-center space-x-3 font-bold text-lg ${className}`}
      {...customProps}
    >
      <Command />
      <span>Mimini</span>
    </div>
  );
};

export default Index;
