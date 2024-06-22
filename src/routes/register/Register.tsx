import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import apiRequest from "../../lib/apiRequest";

function Register() {
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(false);

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        email,
        password,
      });

      navigate("/login");
    } catch (err: any) {
      console.log(error);
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="register">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
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
