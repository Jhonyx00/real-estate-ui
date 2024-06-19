import "./navbar.css";
import Logo from "../../../public/hexagon.svg";
import MenuIcon from "../../../public/menu.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const user: boolean = true;
  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src={Logo} alt="" />
          <span>RealEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />

            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <span className="notification">3</span>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <div className="buttons">
            <a href="/" className="singin">
              Sign in
            </a>
            <a href="/" className="register">
              Sign up
            </a>
          </div>
        )}

        <div className="menuIcon">
          <img
            src={MenuIcon}
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
