import { Link } from "react-router-dom";
import "./card.css";
import { Post } from "../../interfaces/post";

function Card({ post }: { post: Post }) {
  return (
    <div className="card">
      <Link to={`/${post.id}`} className="image-container">
        <img src={post.images[0]} alt="" />
      </Link>
      <div className="text-container">
        <h2 className="title">
          <Link to={`/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="address">
          <img src="./pin.png" alt="" />
          <span>{post.address}</span>
        </p>

        <p className="price">$ {post.price}</p>

        <div className="card-bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{post.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{post.bathroom} bathroom</span>
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
