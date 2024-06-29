import "./list.css";
import Card from "../card/Card";
import { Post } from "../../interfaces/post";

function List({ posts }: { posts: Post[] }) {
  return (
    <div className="list">
      {posts.map((post) => (
        <Card key={post.id} post={post}></Card>
      ))}
    </div>
  );
}

export default List;
