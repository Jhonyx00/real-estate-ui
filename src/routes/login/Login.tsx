import { Link } from "react-router-dom";

import "./login.css";
import { useState } from "react";
function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  return (
    <div className="login">
      <div className="form-container">
        <form>
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
          <button disabled={isLoading}>Register</button>
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
