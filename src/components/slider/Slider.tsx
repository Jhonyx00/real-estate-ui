import { useState } from "react";
import { ImageList } from "../../interfaces/imageList";

import "./slider.css";

function Slider(elements: ImageList) {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const changeSlide = (direction: string) => {
    if (direction === "left") {
      imageIndex === 0
        ? setImageIndex(elements.images.length - 1)
        : setImageIndex(imageIndex! - 1);
    } else {
      imageIndex === elements.images.length - 1
        ? setImageIndex(0)
        : setImageIndex(imageIndex! + 1);
    }
  };
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="full-slider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="/arrow.png" alt="" />
          </div>
          <div className="img-container">
            <img src={elements.images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="/arrow.png" className="right" alt="" />
          </div>
          <span className="close" onClick={() => setImageIndex(null)}>
            ✕
          </span>
        </div>
      )}

      <div className="big-image">
        <img src={elements.images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>

      <div className="small-images">
        {elements.images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
