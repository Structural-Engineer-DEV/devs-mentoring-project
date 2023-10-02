import React from "react";

const ButtonCTA = ({ children, onClick, typeBlue, ...props }) => {
  const handleClick = (e) => {
    if (props.disabled) return;

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={` w-fit p-4 text-s rounded  m-4 ${
        typeBlue
          ? "bg-blue-600 hover:bg-blue-500"
          : "bg-amber-400 hover:bg-amber-300"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonCTA;
