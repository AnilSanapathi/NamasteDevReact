import { useEffect, useState } from "react";
import { list } from "../constants";
import Restraurant from "./Restraurant";
import Shimmer from "./Shimmer";
import NoData from "./NoData";

const Body = () => {
  useEffect(() => {
    getRestaurants();
  }, []);

  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestro] = useState([]);
  const [filteredResto, setFilterResto] = useState([]);

  function filterRestro(type) {
    if (type === "search") {
      const filteredList = restaurants.filter((a) =>
        a.data.name?.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilterResto(filteredList);
    } else {
      setSearchText("");
      setFilterResto(restaurants);
    }
  }

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7338911&lng=83.3093517&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestro(json.data?.cards[2]?.data?.data?.cards);
    setFilterResto(json.data?.cards[2]?.data?.data?.cards);
  }

  if (!filteredResto) return;

  if (!restaurants.length) {
    return <Shimmer />;
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
        <button
          className="btn-submit"
          type="submit"
          onClick={() => filterRestro("search")}
        >
          Search
        </button>
        <button className="btn-submit" onClick={() => filterRestro("reset")}>
          Reset
        </button>
      </div>
      <div className="restaurant-list">
        {filteredResto.length ? (
          filteredResto.map((item, index) => (
            <Restraurant key={index} {...item.data} />
          ))
        ) : (
          <NoData />
        )}
      </div>
    </>
  );
};

export default Body;
