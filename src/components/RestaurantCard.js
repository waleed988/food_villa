import { RESTAURANTS_IMAGE_BASE_URL } from "./../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  sla,
}) => {
  return (
    <div className="text-center m-4 p-4 w-[300px] h-[450px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="restaurant-logo"
        src={RESTAURANTS_IMAGE_BASE_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4 className="font-bold">{avgRating} stars</h4>
      <h4>{sla?.deliveryTime} Minutes Delivery Time</h4>
    </div>
  );
};

export default RestaurantCard;
