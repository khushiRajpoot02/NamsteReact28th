import { useRef, useState } from "react";
import { validData } from "../utils/validator";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
const SignIn = () => {
const[signInform, setIsSignInform] = useState(true);
const[errorMessage, setErrorMessage] = useState(null);
const signInToggle = ()=>{
    setIsSignInform(!signInform);
}
const email  = useRef(null);
const password = useRef(null);
const name = useRef(null);
const handleClick =()=>{
  // after clicking on submit button whatever the data we will get will validate that and then after will proceed
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = validData(email.current.value, password.current.value);
    // console.log(isValid);
    setErrorMessage(message);
    if(message!==null)return;
    if(!signInform){
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value,
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
      setErrorMessage(errorMessage + "-" + errorCode)
    });
    // ...
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode + "-" + errorMessage);
  });
    }
    else{
      //sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + "-" + errorMessage);
  });

    }
   
}
  return (
    <div className="container">
      <form className="" onSubmit={(e)=>e.preventDefault()}>
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
        ref={email}
        placeholder="Email Address"
      />
        </div>
        <div className="form-group">
        <input 
        className="" 
        type="password"
        ref={password}
         placeholder="Password" />
      </div>
        <button className="btn"
        onClick={handleClick}
        >{signInform ? "Sign In" : "Sign Up"}</button>
        <p className="py-2 text-red-400">{errorMessage}</p>
        <p className="py-2 text-slate-500 cursor-pointer" onClick = {signInToggle}>{signInform ? "Already Registered : login" : "New ? Sign Up now"}</p>
        </form>
    </div>
  );
};
export default SignIn;
