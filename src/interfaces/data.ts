import { ChatData } from "./chatData";
import { User } from "./user";

export interface Data {
  chats: ChatData[];
  receiver: User;
}
