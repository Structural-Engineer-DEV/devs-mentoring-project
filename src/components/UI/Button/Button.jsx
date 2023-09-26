import React from "react";

const Button = ({ children, onClick, ...props }) => {
  const handleClick = (e) => {
    if (props.disabled) return;

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
