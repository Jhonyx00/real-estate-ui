import { Link } from "react-router-dom";
import "./card.css";
import { Item } from "../../interfaces/item";

import Bed from "../../../public/bed.png";
import Bath from "../../../public/bath.png";
import Save from "../../../public/save.png";
import Chat from "../../../public/chat.png";
import Pin from "../../../public/pin.png";

function Card(item: Item) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="image-container">
        <img src={item.img} alt="" />
      </Link>
      <div className="text-container">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src={Pin} alt="" />
          <span>{item.address}</span>
        </p>

        <p className="price">$ {item.price}</p>

        <div className="card-bottom">
          <div className="features">
            <div className="feature">
              <img src={Bed} alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src={Bath} alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>

          <div className="icons">
            <div className="icon">
              <img src={Save} alt="" />
            </div>

            <div className="icon">
              <img src={Chat} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
