import React, { ReactNode } from "react";
import "./CircleButton.scss"
interface circleButtonProps {
  children: ReactNode;
  type: string;
  onClick:React.MouseEventHandler;
}
const CircleButton: React.FC<circleButtonProps> = ({ children, type,onClick,}) => {
  return (
    <button className={type === "small" ? "primary-c-btn" : "secondary-c-btn"} onClick={onClick}>
      {children}
    </button>
  );
};

export default CircleButton;
