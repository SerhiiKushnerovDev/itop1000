import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: "button" | "submit" | "reset";
  size?: string;
  text?: string;
  className?: string;
  onClick?: () => void;
}

const Button = ({ type = "button", size, text, ...props }: ButtonProps) => {
  console.log("this is props", props);

  return (
    <button color={props?.color} type={type} {...props}>
      {text}
    </button>
  );
};

export default Button;
