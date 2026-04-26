import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-72 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
    >
      <img
        className="w-full h-44 object-cover rounded-2xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-lg text-gray-800">{name}</h3>
      <h4 className="text-gray-600 text-sm leading-6">{cuisines.join(", ")}</h4>
      <h4 className="font-medium text-gray-700 mt-2">⭐ {avgRating} stars</h4>
      <h4 className="text-gray-700 font-medium">{costForTwo}</h4>
      <h4 className="text-gray-500">{sla?.deliveryTime} minutes</h4>
      <h4 className="text-sm text-gray-400 mt-2">User : {loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-3 left-3 bg-black/80 text-white px-4 py-1.5 rounded-xl bg-white/20 backdrop-blur-xl border border-white/30 text-gray-800 text-sm font-semibold shodow-lg z-10">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
