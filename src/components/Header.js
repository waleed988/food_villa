import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import useOnlineStatus from "./../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { currentUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between rounded-2xl lg:bg-slate-200">
      <div className="logo-container">
        <Link to="/">
          <img
            className="w-32 rounded-3xl ml-3 mt-2"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>
      </div>
      <div className="text-2xl mt-7">
        {currentUser.name} - ({currentUser.email})
      </div>
      <div className="flex items-center">
        <Link to="/cart">
          <p className="text-2xl mr-20">Cart - {cartItems.length} items</p>
        </Link>
        <ul className="flex p-4 m-4">
          <Link to="/">
            <li className="px-4 font-semibold text-lg">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4 font-semibold text-lg">About</li>
          </Link>
          <Link to="contact">
            <li className="px-4 font-semibold text-lg">Contact</li>
          </Link>
        </ul>
        {onlineStatus ? (
          <div className="inline-block mx-4 mb-[-2px] rounded-full border-black border-[0.5px] h-4 w-4 bg-green-500"></div>
        ) : (
          <div className="inline-block mx-4 mb-[-2px] rounded-full border-black border-[0.5px] h-4 w-4"></div>
        )}
      </div>
    </div>
  );
};

export default Header;
