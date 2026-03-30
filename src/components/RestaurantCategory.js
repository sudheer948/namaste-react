import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log(data);

  const handleClick = () => {
    setShowIndex();
  }
  return (
    <div>
      <div className="text-center w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer select-none" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.items.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList item={data.items} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
