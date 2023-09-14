import { useState, useContext, useEffect } from "react";
import { LOGO_URL } from "../utils/constaints";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useDispatch, useSelector} from "react-redux";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase"
import { addUser, removeUser } from "../Redux/userSignSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const[signInform, setIsSignInform] = useState(true);
const signInToggle = ()=>{
  setIsSignInform(!signInform);
}

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid, email, displayName} = user;
      dispatch(addUser({uid : uid, email : email, displayName : displayName }))
      navigate("/");
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
      navigate("/");
    }
  });
  
},[])
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
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4 font-bold text-lg"><Link to="/cart">Cart-({cartItems.length})</Link></li>
            <li className="px-4"><Link to="/login" onClick = {signInToggle}>{signInform ? "SignIn" : "SignUp"}{checkOnlineStatus === false?"🔴":"🟢"}</Link></li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;