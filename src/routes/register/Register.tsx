import { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
function Register() {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="register">
      <div className="form-container">
        <form>
          <h2>Create an Account</h2>
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link to={"/login"}>Do you have an account?</Link>
        </form>
      </div>
      <div className="image-container">
        <img src="./bg.jpg" alt="" />
      </div>
    </div>
  );
}

export default Register;
