import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (!menu) return <Shimmer />;

  const categories = menu.categories.filter((cat) => cat.items.length > 0);

  return (
    <div>
      {categories.map((cat, index) => (
        <RestaurantCategory
          key={cat.title}
          data={cat}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
