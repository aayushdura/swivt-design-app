import React, { ReactNode } from "react";
import "./Button.scss"
interface buttonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  primary: boolean;
}

const Button: React.FC<buttonProps> = ({ children, type, primary }) => (
  <button
    className={primary ? "primary-btn" : "secondary-btn"}
    type={type !== undefined ? type : "button"}
  >
    {children}
  </button>
);

export default Button;
