import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log(data);

  const handleClick = () => {
    setShowIndex();
  }
  return (
    <div className="max-w-4xl mx-auto my-6">
      <div className="bg-white/80 backdrop-blur-lg border border-white/30 shadow-md rounded-2xl p-6">
        <div className="flex justify-between items-center cursor-pointer select-none" onClick={handleClick}>
          <span className="font-bold text-xl text-gray-800">
            {data.title} ({data.items.length})
          </span>
          <span className="text-lg text-gray-500">{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {showItems && <ItemList item={data.items} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
