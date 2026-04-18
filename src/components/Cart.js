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
    <h1 className="text-center m-10 font-bold text-2xl">Empty Cart</h1>
  ) : (
    <div className="w-6/12 mx-auto my-10 p-2">
      <div className="flex items-center gap-2">
        <button className="bg-black text-white rounded-xl p-3" onClick={Empty}>
          Clear Cart
        </button>
        <button className="bg-black text-white rounded-xl p-3" onClick={last}>
          Remove last Item
        </button>
      </div>
      <h1 className="text-center text-xl font-bold">Cart</h1>
      <ItemList item={cartItems} />
    </div>
  );
};

export default Cart;
