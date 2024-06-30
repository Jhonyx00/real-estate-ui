import { Await, useLoaderData } from "react-router-dom";
import Filter from "../../components/filter/Filter";
import List from "../../components/list/List";
import Map from "../../components/map/Map";
import { Post } from "../../interfaces/post";
import "./listPage.css";
import { Suspense } from "react";
import { AxiosResponse } from "axios";

function ListPage() {
  const loaderData = useLoaderData();
  const { postResponse } = loaderData as { postResponse: Post[] };

  return (
    <div className="list-page">
      <div className="list-container">
        <Filter />
        <Suspense fallback={<p>Loading posts...</p>}>
          <Await
            resolve={postResponse}
            errorElement={<p>Error loading posts</p>}
          >
            {(postResponse: AxiosResponse) => {
              return <List posts={postResponse.data.message}></List>;
            }}
          </Await>
        </Suspense>
      </div>

      <div className="map-container">
        <Suspense fallback={<p>Loading map...</p>}>
          <Await resolve={postResponse} errorElement={<p>Error loading map</p>}>
            {(postResponse: AxiosResponse) => {
              return <Map item={postResponse.data.message} />;
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

export default ListPage;
