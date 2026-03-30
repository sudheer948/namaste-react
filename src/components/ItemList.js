import { LOGO_URL } from "../utils/constants";

const ItemList = ({ item }) => {
  console.log(item);
  return (
    <div>
      {item.map((item) => (
        <div
          key={item.id}
          className="flex justify-between p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="p-2">
            <div className="w-8/12">
              <span>{item.name}</span>
              <span> - ₹{item.price}</span>
            </div>
            <p className="text-xs">{item.description}</p>
          </div>

          <div className="w-4/12">
            <div className="absolute">
            <button className="p-1 bg-black text-white mx-7 shadow-lg rounded-lg">Add +</button>
            </div>
             <img src={LOGO_URL} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
