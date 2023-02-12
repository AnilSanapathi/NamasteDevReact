import { useEffect, useState } from "react";
import { RESTAURANTS_URL, list } from "../../constants";
import Restraurant from "./Restraurant";
import Shimmer from "./Shimmer";
import NoData from "./NoData";
import useOnline from "../../utils/offline";

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
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Oops! Please check your internet connection.</h1>;
  }

  async function getRestaurants() {
    const data = await fetch(RESTAURANTS_URL);
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
      <div className="flex justify-center space-x-10 p-10 ">
        <input
          type="text"
          className="h-12 w-4/12 border border-rose-300 rounded-xl text-center"
          placeholder="Search Restraurant"
          name="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="space-x-4">
          <button
            className=" w-20 h-12 rounded-2xl hover:bg-orange-300 border  border-rose-400"
            type="submit"
            onClick={() => filterRestro("search")}
          >
            Search
          </button>
          <button
            className=" w-20 h-12 rounded-2xl hover:bg-orange-300 border  border-rose-400"
            onClick={() => filterRestro("reset")}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly">
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
