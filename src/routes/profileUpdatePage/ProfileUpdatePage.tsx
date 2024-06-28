import "./profileUpdatePage.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../components/uploadWidget/UploadWidget";

function ProfileUpdatePage() {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string[]>([]);
  const { currentUser, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await apiRequest.put(`/users/${currentUser.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });

      updateUser(res.data);
      navigate("/profile");
    } catch (error: any) {
      console.log("error", error);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="register">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Update Profile</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            defaultValue={currentUser.username}
            maxLength={50}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            defaultValue={currentUser.email}
            maxLength={50}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            maxLength={50}
          />
          <button disabled={isLoading}>Update</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="side-container">
        <UploadWidget
          setState={setAvatar}
          currentImage={currentUser.avatar}
          multiple={false}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
