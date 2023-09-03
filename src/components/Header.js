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
      <div className="flex justify-between bg-pink-100 shadow-lg m-2">
        <div  className="m-4 p-4">
          <img className="w-28"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul  className="flex m-4 p-4">
          <li className="px-4">Online Status:{checkOnlineStatus === false?"🔴":"🟢"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 font-bold text-lg"><Link to="/cart">Cart-({cartItems.length})</Link></li>
            <button
            onClick={()=>{
              loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login");
            }}
            >{loginbtn}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;