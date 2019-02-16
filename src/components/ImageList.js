import React from "react";

import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = props => {
  // this is an example of desconstruction, getting three properties instead of the whole object
  // const images = props.images.map(({ description, id, urls }) => {
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
