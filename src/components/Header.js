import { useState } from "react";
import { LOGO_URL } from "../utils/constaints";
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
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
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