import React from "react";
import "./TextBlock.scss"
interface textBlockPropos {
  title?: string;
  content: string;
  subtitle?: string;
}
const TextBlock:React.FC<textBlockPropos> = ({ title, content, subtitle }) => {
  return (
    <div className="text-block-wrapper">
        <h3>{title}</h3>
        {subtitle && <h6>{subtitle}</h6>}
        <p>{content}</p>
    </div>
  );
};

export default TextBlock;
