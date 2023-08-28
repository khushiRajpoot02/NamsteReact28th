import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import React from "react";
class About extends Component {
constructor(props){
  super(props);
//   console.log("parent constructor");
}

 componentDidMount(){
    // // const apiData = "https://api.github.com/users/khushiRajpoot02";
    // const data =  await fetch("https://api.github.com/users/khushiRajpoot02");
    // const json = data.json();
    // console.log(json);

    console.log("Parent component Did Mount");
  }
  render() {
    console.log(" parent render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Namste Food Adda</h2>
        <UserClass/>
      </div>
    );
  }
}
export default About;
/* Class Based Component-----
making Account as class base component for User 
it will behave as a parent of User component
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is Namste Food Adda</h2>
      <User name = {"Khushi Kumari"} 
      location = {"Varanasi"}
      contact = {"khushi@gmail.com"}
      />
      <UserClass
      name = {"Khushi Kuamri(class)"}
      location = {"Varanasi"}
      contact = {"khushi@gmail.com"}
      />
    </div>
  );
};
export default About;
*/
