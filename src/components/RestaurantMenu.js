import { useEffect, useState } from "react";
import { generateMockMenu } from "../utils/mockMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams(); 
  console.log(useParams());

  const [menu, setMenu] = useState(null);

  useEffect(() => {
    setTimeout(() => {
        setMenu(generateMockMenu(resId));
    }, 1000);
  }, []);
  
  // We are not  using state variables because we already have the data and we are not updating the variables


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
