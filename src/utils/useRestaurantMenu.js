import { useEffect, useState } from "react";
import MOCK_MENU from "../utils/mockMenu";

const useRestaurantMenu = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setMenu(MOCK_MENU);
    }, 1000);
  }, []);

  return menu;
};

export default useRestaurantMenu;