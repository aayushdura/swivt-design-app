import React, { CSSProperties, ReactNode } from "react";
import "./CircleButton.scss"
interface circleButtonProps {
  children: ReactNode;
  type: string;
  onClick:React.MouseEventHandler;
  style?:CSSProperties
}
const CircleButton: React.FC<circleButtonProps> = ({ children, type,onClick,style}) => {
  return (
    <button className={type === "small" ? "primary-c-btn" : "secondary-c-btn"} style={style}onClick={onClick}>
      {children}
    </button>
  );
};

export default CircleButton;
