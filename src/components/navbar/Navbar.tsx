import "./navbar.css";
import Logo from "../../../public/hexagon.svg";
import MenuIcon from "../../../public/menu.png";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

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
        <div className="buttons">
          <a href="/" className="singin">
            Sign in
          </a>
          <a href="/" className="register">
            Sign up
          </a>
        </div>

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
