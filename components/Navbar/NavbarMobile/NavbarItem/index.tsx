import React from "react";

const Index = React.forwardRef((props:any, ref:any) => {
  return (
    <a {...props} ref={ref}>
      <span className='hover:text-gray-500'> {props.children}</span>
    </a>
  );
})

export default Index;
