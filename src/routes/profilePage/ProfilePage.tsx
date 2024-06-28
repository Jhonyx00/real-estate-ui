import { Link, useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest";
import "./profilePage.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");

      updateUser("");
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

          <Link to={"update"}>
            <button>Update Profile</button>
          </Link>
        </div>

        <div className="info">
          <span>
            Avatar:
            <img src={currentUser.avatar || "/avatar.png"} alt="" />
          </span>

          <span>
            User name: <b>{currentUser.username}</b>
          </span>
          <span>
            E-mail: <b>{currentUser.email}</b>
          </span>
          <button onClick={handleLogout}>Logout</button>
        </div>

        <div className="title">
          <h2>My List</h2>
          <Link to={"/add"}>
            <button>Create New Post</button>
          </Link>
        </div>
        <List />
        <div className="title">
          <h2>Saved List</h2>
        </div>
      </div>
      <div className="chat-container">
        <Chat></Chat>
      </div>
    </div>
  );
}

export default ProfilePage;
