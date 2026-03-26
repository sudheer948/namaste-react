import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams(); 

  const menu = useRestaurantMenu(resId);

  return  !menu ? <Shimmer /> : (
    <div>
        <h1>{menu.name}</h1>

        {menu.categories.map((cat) => (
            <div key={cat.title}>
                <h2>{cat.title}</h2>

                {cat.items.map((item) => (
                    <div key={item.id}>
                        {item.name} - ₹{item.price}
                    </div>
                ))}
            </div>
        ))}
    </div>
  );
};

export default RestaurantMenu;
