import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames"

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  size?: string;
}

const Button = ({type = 'button', className,  size, ...props}: ButtonProps) => {
  console.log('this is props', props);
  
  return <button type={type} className={className} size={size}  {...props} >Call All</button>
} 

export default Button