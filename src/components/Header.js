import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constaints";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useSelector} from "react-redux";
const Header = () => {
  const[loginbtn, setLoginbtn] = useState("Login");
  const checkOnlineStatus = useOnlineStatus();
  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems);
    return (
      <div className="h-24 flex justify-between bg-pink-200 shadow-lg m-4 p-4 items-center">
        <div  className=" m-4 p-4">
          <img className="logo w-16"
            src={LOGO_URL}
          />
        </div>
        <div className="flex">
          <ul  className="flex m-4 p-4">
          <li className="px-4">Online Status:{checkOnlineStatus === false?"🔴":"🟢"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 font-bold text-lg"><Link to="/cart">Cart-({cartItems.length})</Link></li>
            <li className="px-4"><Link to="/login">SignIn</Link></li>
    
          </ul>
        </div>
      </div>
    );
  };
  export default Header;