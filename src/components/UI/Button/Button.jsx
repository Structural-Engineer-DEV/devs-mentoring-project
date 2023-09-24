import React from "react";

const Button = (props) => {
  return (
    <button className={props.className} {...props}>
      {props.content}
    </button>
  );
};

export default Button;
