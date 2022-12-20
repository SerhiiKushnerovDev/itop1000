import React from "react";
import styles from "./button.module.scss"
import classNames from "classnames"

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({type = 'button', className,  ...props}: ButtonProps) => {
  const cn = classNames(styles.root, className)
  return <button type={type} {...props}  className={cn}></button>
} 

export default Button