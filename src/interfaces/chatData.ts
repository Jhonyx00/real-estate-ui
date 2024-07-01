import { Message } from "./message";
import { User } from "./user";

export interface ChatData {
  id: string;
  createdAt: string;
  users: User;
  userIDs: string[];
  seenBy: string[];
  messages: Message[];
  lastMessage?: string;
}
