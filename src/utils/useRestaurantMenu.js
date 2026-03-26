import { generateMockMenu } from "../utils/mockMenu";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setMenu(generateMockMenu(resId));
    }, 1000);
  }, []);

  return menu;
};

export default useRestaurantMenu;