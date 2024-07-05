import { useContext, useEffect, useRef, useState } from "react";
import "./chat.css";
import { ChatData } from "../../interfaces/chatData";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { User } from "../../interfaces/user";
import { Data } from "../../interfaces/data";

import { format } from "timeago.js";
import { SocketContext } from "../../context/SocketContext";
import { Message } from "../../interfaces/message";
import { useNotificationStore } from "../../lib/notificationStore";

function Chat({ data }: { data: Data }) {
  const [chat, setChat] = useState<ChatData | null>(null);
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);
  const messageEndRef = useRef<HTMLDivElement>(null);

  const decrease = useNotificationStore((state: any) => state.decrease);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat]);

  const textArea = useRef<HTMLTextAreaElement>(null);

  const handleOpenChat = async (id: string, receiver: User) => {
    try {
      const res = await apiRequest("/chats/" + id);

      if (!res.data.seenBy.includes(currentUser.id)) {
        decrease();
      }
      setChat({ ...res.data, receiver });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const text = formData.get("text");

    if (!text) return;

    try {
      const res = await apiRequest.post("/messages/" + chat?.id, { text });

      setChat((prev: any) => ({
        ...prev,
        messages: [...prev?.messages, res.data],
      }));

      if (textArea?.current) {
        //reset textarea
        textArea.current.value = "";
      }

      socket.emit("sendMessage", {
        receiverId: data.receiver.id,
        data: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const read = async () => {
      try {
        await apiRequest.put("/chats/read/" + chat?.id);
      } catch (error) {
        console.log(error);
      }
    };
    //if chat is open

    //update last message
    if (chat && socket) {
      socket.on("getMessage", (data: Message) => {
        if (chat.id === data.chatId) {
          setChat((prev: any) => ({
            ...prev,
            messages: [...prev?.messages, data],
          }));
          read();
        }
      });
    }

    return () => {
      socket.off("getMessage");
    };
  }, [socket, chat]);
  return (
    <div className="chat">
      <div className="messages">
        <h2>Messages</h2>

        {data.chats.map((item: ChatData) => (
          <div
            className="message"
            key={item.id}
            style={{
              backgroundColor:
                item.seenBy.includes(currentUser.id) || chat?.id === item.id
                  ? "white"
                  : "background-color: rgb(255, 222, 104)",
            }}
            onClick={() => handleOpenChat(item.id, data.receiver)}
          >
            <img src={data.receiver.avatar || "/avatar.png"} alt="" />
            <span>{data.receiver.username}</span>
            <p>{item.lastMessage}</p>
          </div>
        ))}
      </div>

      {chat && (
        <div className="chatbox">
          <div className="top">
            <div className="user">
              <img src={data.receiver.avatar || "/avatar.png"} alt="" />
              <span>{data.receiver.username}</span>
            </div>
            <span className="close" onClick={() => setChat(null)}>
              ✕
            </span>
          </div>
          <div className="center">
            {chat.messages.map((message) => (
              <div
                className="chat-message"
                key={message.id}
                style={{
                  alignSelf:
                    message.userId === currentUser.id
                      ? "flex-end"
                      : "flex-start",
                }}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
            <div ref={messageEndRef}></div>
          </div>
          <form className="bottom" onSubmit={handleSubmit}>
            <textarea
              name="text"
              id=""
              placeholder="Type a message"
              ref={textArea}
            ></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;
