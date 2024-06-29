import { AxiosResponse } from "axios";
import { Post } from "../interfaces/post";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({
  params,
}: {
  params: { id: String };
}): Promise<Post> => {
  const res: AxiosResponse<Post> = await apiRequest("/posts/" + params.id); //id from children of layout component

  return res.data.message;
};

export const listPageLoader = async ({
  request,
}: {
  request: { url: string };
}): Promise<Post[]> => {
  const query: string = request.url.split("?")[1];
  const res: AxiosResponse = await apiRequest("/posts?" + query); //id from children of layout component

  return res.data.message;
};
