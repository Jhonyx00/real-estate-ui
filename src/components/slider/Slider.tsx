import { ImageList } from "../../interfaces/imageList";

import "./slider.css";

function Slider(elements: ImageList) {
  return (
    <div className="slider">
      <div className="big-image">
        <img src={elements.images[0]} alt="" />
      </div>

      <div className="small-images">
        {elements.images.slice(1).map((image, index) => (
          <img src={image} alt="" key={index} />
        ))}
      </div>
    </div>
  );
}

export default Slider;
