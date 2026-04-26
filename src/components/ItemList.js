import { addItem } from "../utils/cartSlice";
import { FOOD_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  };

  console.log(item);
  return (
    <div className="space-y-6">
      {item.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center p-5 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
        >
          <div className="flex-1 pr-6">
            <div className="w-full">
              <span className="font-semibold text-gray-800 text-base">{item.name}</span>
              <span className="font-medium text-orange-500 ml-2"> - ₹{item.price}</span>
            </div>
            <p className="text-sm text-gray-500 leading-6 mt-2">{item.description}</p>
          </div>

          <div className="w-40 relative">
            <div className="absolute bottom-0 left-10">
              <button
                className="px-5 py-2 bg-white text-green-600 font-bold rounded-xl shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300"
                onClick={() => handleClick(item)}
              >
                Add +
              </button>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png" className="w-full h-32 object-cover rounded-2xl" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
