import { PostDetail } from "./posrDetail";
import { User } from "./user";

export interface Post {
  message: Post | PromiseLike<Post>;
  id: string;
  title: string;
  price: number;
  images: string[];
  address: string;
  city: string;
  bedroom: number;
  bathroom: number;
  latitude: string;
  longitude: string;
  type: string;
  property: string;
  createdAt: string;
  userId: string;
  postDetail?: PostDetail;
  user: User;
}
