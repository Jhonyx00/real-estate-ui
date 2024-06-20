import Filter from "../../components/filter/Filter";
import List from "../../components/list/List";
import Map from "../../components/map/Map";
import { Item } from "../../interfaces/item";
import { listData } from "../../lib/dummydata";
import "./listPage.css";

function ListPage() {
  const data: Item[] = listData;
  return (
    <div className="list-page">
      <div className="list-container">
        <Filter />
        <List></List>
      </div>

      <div className="map-container">
        <Map item={data} />
      </div>
    </div>
  );
}

export default ListPage;
