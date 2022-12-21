import React from "react";
import classNames from "classnames"

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  size?: string;
}

const Button = ({type = 'button', className,  size, ...props}: ButtonProps) => {
  return <button type={type} className={className} size={size}  {...props} ></button>
} 

export default Button