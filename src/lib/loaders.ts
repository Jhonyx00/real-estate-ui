import { AxiosResponse } from "axios";
import { Post } from "../interfaces/post";
import apiRequest from "./apiRequest";
import { defer } from "react-router-dom";

export const singlePageLoader = async ({
  params,
}: {
  params: { id: String };
}): Promise<Post> => {
  const res: AxiosResponse<Post> = await apiRequest("/posts/" + params.id); //id from children of layout component

  return res.data;
};

export const listPageLoader = async ({
  request,
}: {
  request: { url: string };
}) => {
  const query: string = request.url.split("?")[1];
  const res = apiRequest("/posts?" + query); //id from children of layout component

  return defer({
    postResponse: res,
  });
};

export const profilePageLoader = async () => {
  const res = apiRequest("/users/profilePosts"); //id from children of layout component

  //console.log(res);

  return defer({
    postResponse: res,
  });
};
