import { useState } from "react";
import { Query } from "../../interfaces/query";

import "./searchbar.css";

const types = ["buy", "rent"];
function SearchBar() {
  const [query, setQuery] = useState<Query>({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (value: string) => {
    setQuery((prev) => ({ ...prev, type: value }));
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
        <input type="text" name="location" id="" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
        />

        <button className="search-button">
          <img src="./search-icon.svg" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
