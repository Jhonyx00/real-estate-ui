import { useState } from "react";
import { Query } from "../../interfaces/query";

import "./searchbar.css";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState<Query>({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (value: string) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };

  const handleChange = (e: { nativeEvent: { target: any } }) => {
    const { name, value } = e.nativeEvent.target;

    setQuery((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input
          type="text"
          name="city"
          id=""
          placeholder="City"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
          onChange={handleChange}
        />

        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <button className="search-button">
            <img src="./search-icon.svg" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
