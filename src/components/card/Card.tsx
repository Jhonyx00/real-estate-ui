import { Link } from "react-router-dom";
import "./card.css";
import { Item } from "../../interfaces/item";

function Card(item: Item) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="image-container">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="text-container">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="./pin.png" alt="" />
          <span>{item.address}</span>
        </p>

        <p className="price">$ {item.price}</p>

        <div className="card-bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>

          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>

            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
