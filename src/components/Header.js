import { useState } from "react";
import { LOGO_URL } from "../utils/constaints";
import {Link} from "react-router-dom";
const Header = () => {
  const[loginbtn, setLoginbtn] = useState("Login");
    return (
      <div className="header">
        <div>
          <img
            className="logo-container"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login-btn"
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