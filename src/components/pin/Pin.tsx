import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./pin.css";

function Pin({ id, latitude, longitude, img, title, bedroom, price }: any) {
  return (
    <Marker position={[latitude, longitude]}>
      <Popup>
        <div className="popup-container">
          <img src={img} alt="" />
          <div className="text-container">
            <Link to={`${id}`}>{title}</Link>
            <span>{bedroom} bedroom</span>
            <b>$ {price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
