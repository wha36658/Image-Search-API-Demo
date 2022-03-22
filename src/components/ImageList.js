import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const imageArr = images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imageArr}</div>;
};

export default ImageList;
