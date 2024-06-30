import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Post } from "../../interfaces/post";
import { AxiosResponse } from "axios";
import "./profilePage.css";

function ProfilePage() {
  const loaderData = useLoaderData();
  const { postResponse } = loaderData as { postResponse: Post[] };
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

        <Suspense fallback={<p>Loading posts...</p>}>
          <Await
            resolve={postResponse}
            errorElement={<p>Error loading posts</p>}
          >
            {(postResponse: AxiosResponse) => {
              return <List posts={postResponse.data.userPosts}></List>;
            }}
          </Await>
        </Suspense>

        <div className="title">
          <h2>Saved List</h2>
        </div>

        <Suspense fallback={<p>Loading posts...</p>}>
          <Await
            resolve={postResponse}
            errorElement={<p>Error loading posts</p>}
          >
            {(postResponse: AxiosResponse) => {
              if (postResponse.data.savedPost.length === 0) {
                return <p>No saved places yet</p>;
              } else {
                return <List posts={postResponse.data.savedPost}></List>;
              }
            }}
          </Await>
        </Suspense>
      </div>
      <div className="chat-container">
        <Chat></Chat>
      </div>
    </div>
  );
}

export default ProfilePage;
