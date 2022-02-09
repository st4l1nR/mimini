import React from "react";

const Index = React.forwardRef(
  (
    { variant, error, onChange, onBlur, name, label, ...props }: any,
    ref: any
  ) => {
    switch (variant) {
      case "multiline":
        return (
          <div className="flex flex-col space-y-2">
            {error && (
              <span className="w-full text-sm text-red-500 font-bold">
                {error}
              </span>
            )}
            <textarea
              className="w-full h-36 p-3 focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              name={name}
              ref={ref}
              onChange={onChange}
              onBlur={onBlur}
              {...props}
            />
          </div>
        );
      default:
        return (
          <div className="flex flex-col space-y-2">
            {error && (
              <span className="w-full text-sm text-red-500 font-bold">
                {error}
              </span>
            )}
            <input
              className="w-full h-12 p-3 border-2 border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              name={name}
              ref={ref}
              onChange={onChange}
              onBlur={onBlur}
              {...props}
            />
          </div>
        );
    }
  }
);

export default Index;
