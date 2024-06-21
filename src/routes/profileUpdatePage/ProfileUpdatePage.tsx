import { useState } from "react";
import { Link } from "react-router-dom";
import "./profileUpdatePage.css";

function ProfileUpdatePage() {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="register">
      <div className="form-container">
        <form>
          <h2>Update Profile</h2>
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Password" />
          <button disabled={isLoading}>Update</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="side-container">
        <input type="file" name="images" id="images" />
      </div>{" "}
    </div>
  );
}

export default ProfileUpdatePage;
