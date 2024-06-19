import { useState } from "react";
import "./chat.css";

function Chat() {
  const [chat, setChat] = useState<boolean>(true);
  return (
    <div className="chat">
      <div className="messages">
        <h2>Messages</h2>

        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>

      {chat && (
        <div className="chatbox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>John Doe</span>
            </div>
            <span className="close" onClick={() => setChat(false)}>
              ✕
            </span>
          </div>
          <div className="center">
            <div className="chat-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chat-message own">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chat-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chat-message own">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chat-message">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              </p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
