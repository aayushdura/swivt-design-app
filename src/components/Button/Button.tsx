import React, { CSSProperties, MouseEventHandler, ReactNode } from "react";
import { Style } from "util";
import "./Button.scss";
interface buttonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  primary?: boolean;
  style?: CSSProperties;
  onClick?:()=>void
}

const Button: React.FC<buttonProps> = ({ children, type, primary, style,onClick }) => (
  <button
    className={primary ? "primary-btn" : "secondary-btn"}
    type={type !== undefined ? type : "button"}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
