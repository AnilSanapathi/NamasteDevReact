import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { imageURL } from "../../constants";
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
    setMenu(data1.data || []);
  }


  if (!menu) {
    return <Shimmer />;
  }

  if (menu && menu.length === 0) {
    return <NoData />;
  }

  return (
    <>
      <div>
        <h1>Restaurant ID: {menu.id}</h1>
        <h3>Name: {menu.name}</h3>
        <img alt="text" src={imageURL + menu.cloudinaryImageId} />
        <h3>City: {menu.city}</h3>
        <h3>Cost For Two : {menu.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(menu?.menu?.items).map((a) => {
            <li key={a.id}>{a.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
