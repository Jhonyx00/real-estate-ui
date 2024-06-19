import Card from "../../components/card/Card";
import Filter from "../../components/filter/Filter";
import Map from "../../components/map/Map";
import { Item } from "../../interfaces/item";
import { listData } from "../../lib/dummydata";
import "./listPage.css";

function ListPage() {
  const data: Item[] = listData;
  return (
    <div className="list-page">
      <div className="list-container">
        <div className="wrapper">
          <Filter />

          {data.map((item: Item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              images={item.images}
              bedroom={item.bedroom}
              bathroom={item.bathroom}
              price={item.price}
              address={item.address}
              latitude={item.latitude}
              longitude={item.longitude}
            />
          ))}
        </div>
      </div>

      <div className="map-container">
        <Map item={data} />
      </div>
    </div>
  );
}

export default ListPage;
