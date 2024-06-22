import "./navbar.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="./hexagon.svg" alt="" />
          <span>RealEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/avatar.png"} alt="" />

            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <span className="notification">3</span>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <div className="buttons">
            <a href="/login" className="singin">
              Sign in
            </a>
            <a href="/register" className="register">
              Sign up
            </a>
          </div>
        )}

        <div className="menuIcon">
          <img
            src="./menu.png"
            alt=""
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
