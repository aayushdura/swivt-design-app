import React from "react";
interface imageBlockProps {
  imageSource: string;
  width?: number | string;
  height?: number | string;
  altTitle: string;
}
const ImageBlock: React.FC<imageBlockProps> = ({
  imageSource,
  width,
  height,
  altTitle,
}) => {
  return <img src={imageSource} width={width} height={height} alt={altTitle} />;
};

export default ImageBlock;
