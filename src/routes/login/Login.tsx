import { Link, useNavigate } from "react-router-dom";

import "./login.css";
import { useState } from "react";
import apiRequest from "../../lib/apiRequest";

function Login() {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(false);

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err: any) {
      console.log(error);
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Welcome back</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            minLength={3}
            maxLength={20}
          />
          <input type="text" name="password" placeholder="Password" required />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to={"/register"}>Don't you have an account?</Link>
        </form>
      </div>
      <div className="image-container">
        <img src="./bg.jpg" alt="" />
      </div>
    </div>
  );
}

export default Login;
