import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_DETAILS, imageURL } from "../../constants";
import NoData from "./NoData";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { menuId } = useParams();
  useEffect(() => {
    const data = getMenuDetails(menuId);
  }, []);

  async function getMenuDetails(menuId) {
    const data = await fetch(RESTAURANT_DETAILS + menuId);
    const data1 = await data.json();
    console.log(data1, "");
    setMenu(data1.data || []);
  }

  if (!menu) {
    return <Shimmer />;
  }

  if (menu && menu.length === 0) {
    console.log(menu, "menu");
    return <NoData />;
  }

  return (
    <>
      <div className="ml-20 mt-11 content-center border border-rose-400 pl-5">
        <h1 className="font-bold">Restaurant ID: {menu.id}</h1>
        <h3 className="font-semibold">Name: {menu.name}</h3>
        <img
          className="h-40 w-60"
          alt="restaurant"
          src={imageURL + menu.cloudinaryImageId}
        />
        <h3>City: {menu.city}</h3>
        <h3>Cost For Two : {menu.costForTwoMsg}</h3>
        <div className="">
          <h1 className="font-bold">Menu</h1>
          <ul className="ml-4 font-light flex flex-col">
            {Object.values(menu?.menu?.items).map((a, i) => {
              return (
                <li key={a.id}>
                  {i+1}. {a.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
