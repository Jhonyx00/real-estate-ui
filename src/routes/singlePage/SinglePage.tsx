import "./singlePage.css";
import Slider from "../../components/slider/Slider";

import { singlePostData, userData } from "../../lib/dummydata";

function SinglePage() {
  return (
    <div className="single-page">
      <div className="details">
        <Slider images={singlePostData.images} />
        <div className="info">
          <div className="top">
            <div className="post">
              <h2>{singlePostData.title}</h2>
              <div className="address">
                <img src="/pin.png" alt="" />
                <span>{singlePostData.address}</span>
              </div>

              <div className="price">$ {singlePostData.price}</div>
            </div>
            <div className="user">
              <img src={userData.img} alt="" />
              <span>{userData.name}</span>
            </div>
          </div>

          <div className="bottom">
            <p className="description">{singlePostData.description}</p>
          </div>
        </div>
      </div>

      <div className="features">features</div>
    </div>
  );
}

export default SinglePage;
