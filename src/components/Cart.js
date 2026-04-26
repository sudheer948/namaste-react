import { clearCart } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const Empty = () => {
    dispatch(clearCart());
  };

  const last = () => {
    dispatch(removeItem());
  };

  return cartItems.length === 0 ? (
    <h1 className="text-center my-16 font-bold text-3xl text-gray-700"> Your Cart is Empty 🛒 </h1>
  ) : (
    <div className="max-w-4xl mx-auto my-10 p-6">
      <div className="flex items-center justify-between mb-1">
        <button className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold shadow-md transition-all duration-300" onClick={Empty}>
          Clear Cart
        </button>
        <button className="px-5 py-2 rounded-xl bg-gray-800 hover:bg-black text-white font-semibold shadow-md transition-all duration-300" onClick={last}>
          Remove last Item
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-5 text-gray-800 text-center">Cart 🛒</h1>
      <ItemList item={cartItems} />
    </div>
  );
};

export default Cart;
