import "./singlePage.css";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import apiRequest from "../../lib/apiRequest";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Post } from "../../interfaces/post";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function SinglePage() {
  const loaderData = useLoaderData();
  const post = loaderData as Post;
  const { currentUser } = useContext(AuthContext);
  const [saved, setSaved] = useState<boolean>(post.isSaved);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }

    console.log(post);

    setSaved((prev) => !prev);

    try {
      const res = await apiRequest.post("/users/save", {
        postId: post.id,
      });
      console.log(res.data);
    } catch (err: any) {
      console.log(err.response.data.message);
      setSaved((prev) => !prev);
    }
  };

  return (
    <div className="single-page">
      <div className="details">
        <Slider images={post.images} />
        <div className="info">
          <div className="top">
            <div className="post">
              <h2>{post.title}</h2>
              <div className="address">
                <img src="/pin.png" alt="" />
                <span>{post.address}</span>
              </div>

              <div className="price">$ {post.price}</div>
            </div>
            <div className="user">
              <img src={post.user.avatar} alt="" />
              <span>{post.user.username}</span>
            </div>
          </div>

          <div className="bottom">
            <p className="description">{post.postDetail?.description}</p>
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
              {post.postDetail?.utilities === "owner" ? (
                <p>Owner is responsible</p>
              ) : (
                <p>Tenant is responsible</p>
              )}
            </div>
          </div>
          <div className="feature">
            <img src="/pet.png" alt="" />
            <div className="feature-text">
              <span>Pet Policy</span>

              {post.postDetail?.pet === "allowed" ? (
                <p>Pets Allowed</p>
              ) : (
                <p>Pets Not Allowed</p>
              )}
            </div>
          </div>
          <div className="feature">
            <img src="/fee.png" alt="" />
            <div className="feature-text">
              <span>Income Policy</span>
              <p>{post.postDetail?.income}</p>
            </div>
          </div>
        </div>

        <p className="title">Sizes</p>
        <div className="sizes">
          <div className="size">
            <img src="/size.png" alt="" />
            <span>{post.postDetail?.size} sqft</span>
          </div>
          <div className="size">
            <img src="/bed.png" alt="" />
            <span>{post.bedroom} beds</span>
          </div>
          <div className="size">
            <img src="/bath.png" alt="" />
            <span>{post.bathroom} bathroom </span>
          </div>
        </div>
        <p className="title">Nearby places</p>
        <div className="list-horizontal">
          <div className="feature">
            <img src="/school.png" alt="" />
            <div className="feature-text">
              <span>School</span>
              <p>
                {post.postDetail?.school
                  ? post.postDetail?.school > 999
                    ? `${post.postDetail?.school / 1000}km away`
                    : `${post.postDetail?.school}m away`
                  : "no info"}
              </p>
            </div>
          </div>
          <div className="feature">
            <img src="/pet.png" alt="" />
            <div className="feature-text">
              <span>Bus Stop</span>
              <p>
                {post.postDetail?.bus
                  ? post.postDetail?.bus > 999
                    ? `${post.postDetail?.bus / 1000}km away`
                    : `${post.postDetail?.bus}m away`
                  : "no info"}
              </p>
            </div>
          </div>
          <div className="feature">
            <img src="/fee.png" alt="" />
            <div className="feature-text">
              <span>Restaurant</span>
              <p>
                {post.postDetail?.restaurant
                  ? post.postDetail?.restaurant > 999
                    ? `${post.postDetail?.restaurant / 1000}km away`
                    : `${post.postDetail?.restaurant}m away`
                  : "no info"}
              </p>{" "}
            </div>
          </div>
        </div>

        <p className="title">Location</p>

        <div className="map-container">
          <Map item={[post]} />
        </div>

        <div className="buttons">
          <button>
            <img src="/chat.png" alt="" />
            Send a message
          </button>
          <button
            onClick={handleSave}
            style={{
              backgroundColor: saved
                ? "rgb(255, 222, 104)"
                : "rgb(255, 255, 255)",
            }}
          >
            <img src="/save.png" alt="" />
            {saved ? "Place saved" : "Save the place"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
