import { Item } from "../../interfaces/item";
import { listData } from "../../lib/dummydata";
import Card from "../card/Card";
import "./list.css";
function List() {
  return (
    <div className="list">
      {listData.map((item: Item) => (
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
  );
}

export default List;
