import "./singlePage.css";
import Slider from "../../components/slider/Slider";

import { singlePostData, userData } from "../../lib/dummydata";
import Map from "../../components/map/Map";
import { Item } from "../../interfaces/item";

function SinglePage() {
  const data: Item[] = [singlePostData.item];
  return (
    <div className="single-page">
      <div className="details">
        <Slider images={singlePostData.item.images} />
        <div className="info">
          <div className="top">
            <div className="post">
              <h2>{singlePostData.item.title}</h2>
              <div className="address">
                <img src="/pin.png" alt="" />
                <span>{singlePostData.item.address}</span>
              </div>

              <div className="price">$ {singlePostData.item.price}</div>
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

      <div className="features">
        <p className="title">General</p>
        <div className="list-vertical">
          <div className="feature">
            <img src="/utility.png" alt="" />
            <div className="feature-text">
              <span>Utilities</span>
              <p>Renter is responsible</p>
            </div>
          </div>
          <div className="feature">
            <img src="/pet.png" alt="" />
            <div className="feature-text">
              <span>Pet Policy</span>
              <p>Pets Allowed</p>
            </div>
          </div>
          <div className="feature">
            <img src="/fee.png" alt="" />
            <div className="feature-text">
              <span>Property Fees</span>
              <p>Must have 3x the rent in total household income</p>
            </div>
          </div>
        </div>

        <p className="title">Sizes</p>
        <div className="sizes">
          <div className="size">
            <img src="/size.png" alt="" />
            <span>80 sqft</span>
          </div>
          <div className="size">
            <img src="/bed.png" alt="" />
            <span>2 beds</span>
          </div>
          <div className="size">
            <img src="/bath.png" alt="" />
            <span>1 bathroom</span>
          </div>
        </div>
        <p className="title">Nearby places</p>
        <div className="list-horizontal">
          <div className="feature">
            <img src="/school.png" alt="" />
            <div className="feature-text">
              <span>School</span>
              <p>250m away</p>
            </div>
          </div>
          <div className="feature">
            <img src="/pet.png" alt="" />
            <div className="feature-text">
              <span>Bus Stop</span>
              <p>100m away</p>
            </div>
          </div>
          <div className="feature">
            <img src="/fee.png" alt="" />
            <div className="feature-text">
              <span>Restaurant</span>
              <p>200m away</p>
            </div>
          </div>
        </div>

        <p className="title">Location</p>

        <div className="map-container">
          <div className="m">
            <Map item={data} />
          </div>
        </div>

        <div className="buttons">
          <button>
            <img src="/chat.png" alt="" />
            Send a message
          </button>
          <button>
            <img src="/save.png" alt="" />
            Save the place
          </button>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
