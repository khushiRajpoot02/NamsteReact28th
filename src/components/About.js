import UserClass from "./UserClass";
import { Component } from "react";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
constructor(props){
  super(props);
//   console.log("parent constructor");
}
 componentDidMount(){
    // // const apiData = "https://api.github.com/users/khushiRajpoot02";
    // const data =  await fetch("https://api.github.com/users/khushiRajpoot02");
    // const json = await data.json();
    // console.log(json);

    console.log("Parent component Did Mount");
  }
  // using React context inside class base component

  render() {
    // const {loggedInUser} = useContext(UserContext);
    console.log(" parent render");
    return (
      <div>
        <h1>About Us</h1>
        <UserContext.Consumer>
        {({loggedInUser})=><h1 className="font-bold text-lg">{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h2>This is Namste Food Adda</h2>
        <UserClass/>
      </div>
    );
  }
}
export default About;