import { useLoaderData } from "react-router-dom";
import Filter from "../../components/filter/Filter";
import List from "../../components/list/List";
import Map from "../../components/map/Map";
import { Post } from "../../interfaces/post";
import "./listPage.css";

function ListPage() {
  const loaderData = useLoaderData();
  const posts = loaderData as Array<Post>;

  return (
    <div className="list-page">
      <div className="list-container">
        <Filter />
        <List posts={posts} />
      </div>

      <div className="map-container">
        <Map item={posts} />
      </div>
    </div>
  );
}

export default ListPage;
