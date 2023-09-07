import { useState } from "react";

const SignIn = () => {
const[signInform, setIsSignInform] = useState(true);
const signInToggle = ()=>{
    setIsSignInform(!signInform);
}
  return (
    <div className="container">
      <form className="">
        <div className="form-group">
        <h1 className="font-bold text-xl py-2 text-pink-300 ">{signInform ?"Sign In" : "Sign Up"}</h1>
       <div className="form-group" >
       {!signInform &&  <input
        className=""
        type="text"
        placeholder="User Name"
      />}
       </div>
       
        <input
        type="email"
        placeholder="Email Address"
      />
        </div>
        <div className="form-group">
        <input className="" type="password" placeholder="Password" />
      </div>
        <button className="btn">{signInform ? "Sign In" : "Sign Up"}</button>
        <p className="py-2 text-slate-500 cursor-pointer" onClick = {signInToggle}>{signInform ? "Already Registered : login" : "New ? Sign Up now"}</p>
      </form>
    </div>
  );
};
export default SignIn;
