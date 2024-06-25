import "./homePage.css";
import SearchBar from "../../components/searchbar/Searchbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const { currentUser } = useContext(AuthContext);

  //console.log(currentUser);

  return (
    <div className="homePage">
      <div className="textContainer">
        <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum libero
          itaque nam laborum iure eveniet dolor obcaecati nesciunt ipsa! Ab ea
          eius quod perferendis sapiente cupiditate repellat earum similique
          consequatur!
        </p>

        <SearchBar />

        <div className="boxes">
          <div className="box">
            <h2>16+</h2>
            <p>years of experience</p>
          </div>
          <div className="box">
            <h2>200</h2>
            <p>Awad Gained</p>
          </div>
          <div className="box">
            <h2>1200+</h2>
            <p>Property ready</p>
          </div>
        </div>
      </div>

      <div className="imageContainer">
        <img src="/bg.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
