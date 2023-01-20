import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: "button" | "submit" | "reset";
  minWidth?: string;
  size?: string;
  text?: string;
  className?: any;
  onClick?: (EVENT) => void;
  someEvent?: () => void;
}

const Button = ({
  minWidth = "30vh",
  type = "button",
  size,
  className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-10",
  text,
  ...props
}: ButtonProps) => {
  console.log("this @@@@PROPS:::", props);

  return (
    <button
      color={props?.color}
      type={type}
      onClick={props.onClick}
      className={className}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
