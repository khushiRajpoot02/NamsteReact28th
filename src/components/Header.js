import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constaints";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const[loginbtn, setLoginbtn] = useState("Login");
  const checkOnlineStatus = useOnlineStatus();
  const loginUser = useContext(UserContext);
  const {loggedInUser} = loginUser;// de-structuring the obj// if direct use obje it would not work 
  // console.log(loginUser);
  // useContext is a react hook from which we can access UserContext//
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
            <li className="px-4">Cart</li>
            <button
            onClick={()=>{
              loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login");
            }}
            >{loginbtn}</button>
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;