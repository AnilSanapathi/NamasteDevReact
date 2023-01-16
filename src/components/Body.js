import { useState } from "react";
import { list } from "../constants";
import Restraurant from "./Restraurant";

const Body = () => {
  const restaurantList = list?.data?.cards?.filter(
    (a) => a.cardType === "restaurant"
  );

  const [searchText, setSearchText] = useState("");
  const [restraurants, setRestra] = useState(restaurantList);

  function filterRestro(type) {
    if (type === "search") {
      const filteredList = restaurantList.filter((a) =>
        a.data.data.name?.includes(searchText)
      );
      setRestra(filteredList);
    } else {
      setSearchText('')
      setRestra(restaurantList);
    }
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search Restraurant"
          name="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn-submit" type="submit" onClick={() => filterRestro("search")}>Search</button>
        <button className="btn-submit" onClick={() => filterRestro("reset")}>Reset</button>
      </div>
      <div className="restaurant-list">
        {restraurants.map((item, index) => (
          <Restraurant key={index} {...item.data.data} />
        ))}
      </div>
    </>
  );
};

export default Body;
