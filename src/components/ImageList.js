import React from "react";

const ImageList = ({ images }) => {
  const imageArr = images.map(({ id, urls, description }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div>{imageArr}</div>;
};

export default ImageList;
