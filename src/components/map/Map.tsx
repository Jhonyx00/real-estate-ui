import "leaflet/dist/leaflet.css";
import "./map.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../pin/Pin";
import { MapProps } from "../../interfaces/mapProps";
import { Post } from "../../interfaces/post";

function Map(mapProps: MapProps) {
  return (
    <MapContainer
      center={
        mapProps.item.length === 1
          ? [
              parseFloat(mapProps.item[0].latitude),
              parseFloat(mapProps.item[0].longitude),
            ]
          : [52.4797, -1.90269]
      }
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mapProps.item.map((item: Post) => (
        <Pin
          key={item.id}
          id={item.id}
          title={item.title}
          img={item.images}
          bedroom={item.bedroom}
          bathroom={item.bathroom}
          price={item.price}
          latitude={parseFloat(item.latitude)}
          longitude={parseFloat(item.longitude)}
        ></Pin>
      ))}
    </MapContainer>
  );
}

export default Map;
