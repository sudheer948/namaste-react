import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div
      className="sticky top-0 z-50 flex justify-between items-center px-6 py-4
bg-white/10 backdrop-blur-2xl border-b border-white/20
shadow-lg"
    >
      <div className="logo-container flex items-center shrink-0">
        <img
          className="w-28 cursor-pointer object-contain"
          src={LOGO_URL}
          alt="logo"
        />
      </div>

      <div>
        <ul className="flex items-center flex-wrap justify-end gap-2 text-[15px] font-medium text-gray-700">
          <li className="flex items-center gap-2 font-semibold">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>

          <li className="px-4 py-2 rounded-xl bg-orange-50 text-orange-500 font-semibold">
            <Link to={"/"}>Home</Link>
          </li>

          <li className="px-4 py-2 rounded-xl bg-orange-50 text-orange-500 font-semibold">
            <Link to={"/about"}>About Us</Link>
          </li>

          <li className="px-4 py-2 rounded-xl bg-orange-50 text-orange-500 font-semibold">
            <Link to={"/contact"}>Contact Us</Link>
          </li>

          <li className="px-4 py-2 rounded-xl bg-orange-50 text-orange-500 font-semibold">
            <Link to={"/grocery"}>Grocery</Link>
          </li>

          <li className="px-4 py-2 rounded-xl bg-orange-50 text-orange-500 font-semibold">
            <Link to={"/cart"}>Cart - {cartItems.length}</Link>
          </li>

          <button
            className="px-4 md:px-5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <li className="font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-xl">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
