import "leaflet/dist/leaflet.css";
import "./map.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { Item } from "../../interfaces/item";
import Pin from "../pin/Pin";
import { MapProps } from "../../interfaces/mapProps";

function Map(mapProps: MapProps) {
  return (
    <MapContainer
      center={[52.4797, -1.90269]}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mapProps.items.map((item: Item) => (
        <Pin
          key={item.id}
          id={item.id}
          title={item.title}
          img={item.img}
          bedroom={item.bedroom}
          bathroom={item.bathroom}
          price={item.price}
          latitude={item.latitude}
          longitude={item.longitude}
        ></Pin>
      ))}
    </MapContainer>
  );
}

export default Map;
