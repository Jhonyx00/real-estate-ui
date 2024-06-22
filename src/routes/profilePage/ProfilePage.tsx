import { useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest";
import "./profilePage.css";
function ProfilePage() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = apiRequest.post("/auth/logout");

      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profile-page">
      <div className="details">
        <div className="title">
          <h2>User Information</h2>
          <button>Update Profile</button>
        </div>

        <div className="info">
          <span>
            Avatar:
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </span>

          <span>
            User name: <b>John Doe</b>
          </span>
          <span>
            E-mail: <b>john@gmail.com</b>
          </span>
          <button onClick={handleLogout}>Logout</button>
        </div>

        <div className="title">
          <h2>My List</h2>
          <button>Create New Post</button>
        </div>

        <List />

        <div className="title">
          <h2>Save List</h2>
          <button>Update Profile</button>
        </div>
      </div>
      <div className="chat-container">
        <Chat></Chat>
      </div>
    </div>
  );
}

export default ProfilePage;
