import React from "react";
import "./style.css";
import { Gallery } from "react-grid-gallery";

const images = [
  {
    src: "./images/rec1.jpeg",
    width: 320,
    height: 212,
  },

  {
    src: "./images/rec2.jpeg",
    width: 320,
    height: 212,
  },
  {
    src: "./images/rec3.jpeg",
    width: 320,
    height: 212,
  },
  {
    src: "./images/rec4.jpeg",
    width: 320,
    height: 212,
  },
  {
    src: "./images/rec4.jpeg",
    width: 320,
    height: 212,
  },
  {
    src: "./images/rec4.jpeg",
    width: 320,
    height: 212,
  },
  {
    src: "./images/rec4.jpeg",
    width: 320,
    height: 212,
  },
  {
    src: "./images/rec4.jpeg",
    width: 320,
    height: 212,
  },
  {
    src: "./images/rec4.jpeg",
    width: 320,
    height: 212,
  },
  {
    src: "./images/rec4.jpeg",
    width: 320,
    height: 212,
  },
];

const Galleries = () => {
  return (
    <div className="p-5 pt-0">
      <div className="products">
        <div className="head">
          <h3>Photo Collage</h3>
        </div>
        <div className="gallery pt-3">
          <Gallery images={images} />
        </div>
      </div>
    </div>
  );
};

export default Galleries;
