import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  RESTAURANT_MENU,
  RESTAURANTS_IMAGE_BASE_URL,
} from "../utils/constants";
import { MenuShimmer } from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    const response = await fetch(RESTAURANT_MENU + restaurantId);
    const responseJson = await response.json();
    setRestaurant(responseJson?.data?.cards[0]?.card?.card?.info);
    setCategories(
      responseJson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (category) => {
          return category.card.card["@type"].toLowerCase().includes("category");
        }
      )
    );
  };

  const addToCart = (restaurant, item) => {
    dispatch(addItems(restaurant + ' - ' + item));
  };

  return restaurant ? (
    <div className="grid place-items-center">
      <div className="text-center m-5 p-4 w-[500px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          className="rounded-lg"
          alt="restaurant-logo"
          src={RESTAURANTS_IMAGE_BASE_URL + restaurant.cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{restaurant.name}</h3>
        <h4>{restaurant.cuisines?.join(", ")}</h4>
        <h4 className="font-bold">{restaurant.avgRating} stars</h4>
        <h4>{restaurant.sla?.deliveryTime} Minutes Delivery Time</h4>
        <div className="m-5">
          {categories.map((category, index) => (
            <span
              key={index}
              className="font-bold text-2lg inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs text-blue-700 ring-1 ring-inset ring-blue-700/10"
            >
              <button onClick={() => addToCart(restaurant.name, category?.card?.card.title)}>
                {category?.card?.card.title}
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <MenuShimmer />
  );
};

export default RestaurantMenu;
