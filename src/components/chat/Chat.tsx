import { useContext, useRef, useState } from "react";
import "./chat.css";
import { ChatData } from "../../interfaces/chatData";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { User } from "../../interfaces/user";
import { Data } from "../../interfaces/data";

import { format } from "timeago.js";

function Chat({ data }: { data: Data }) {
  const [chat, setChat] = useState<ChatData | null>(null);
  const { currentUser } = useContext(AuthContext);
  const textArea = useRef<HTMLTextAreaElement>(null);

  const handleOpenChat = async (id: string, receiver: User) => {
    try {
      const res = await apiRequest("/chats/" + id);
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="chat">
      <div className="messages">
        <h2>Messages</h2>

        {data.chats.map((chat: ChatData) => (
          <div
            className="message"
            key={chat.id}
            style={{
              backgroundColor: chat.seenBy.includes(currentUser.id)
                ? "white"
                : "background-color: rgb(255, 222, 104)",
            }}
            onClick={() => handleOpenChat(chat.id, data.receiver)}
          >
            <img src={data.receiver.avatar || "/avatar.png"} alt="" />
            <span>{data.receiver.username}</span>
            <p>{chat.lastMessage}</p>
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
