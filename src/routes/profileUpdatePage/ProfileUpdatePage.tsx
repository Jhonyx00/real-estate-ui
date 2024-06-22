import "./profileUpdatePage.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfileUpdatePage() {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { currentUser, updateUser } = useContext(AuthContext);

  return (
    <div className="register">
      <div className="form-container">
        <form>
          <h2>Update Profile</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            defaultValue={currentUser.username}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            defaultValue={currentUser.email}
          />
          <input type="text" name="password" placeholder="Password" />
          <button disabled={isLoading}>Update</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="side-container">
        {/* <input type="file" name="images" id="images" /> */}
        <img src={currentUser.avatar || "/avatar.png"} alt="" />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
