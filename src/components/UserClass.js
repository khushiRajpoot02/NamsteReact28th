import React from "react";
class UserClass extends React.Component {
  // getting props
  constructor(props) {
    super(props);
    //console.log(this.props.name + "child constructor");
    // creating state variable
    this.state = {
      userInfo :{
        name : "dummy",
        location : "default",
        avatar_url : ""
      }
    };
    // updating state variable
  }
  async componentDidMount(){
    // const apiData = "https://api.github.com/users/khushiRajpoot02";
    const data =  await fetch("https://api.github.com/users/khushiRajpoot02");
    const json = await data.json();
    // console.log("child component Did Mount");
    this.setState({
       userInfo : json,
    })
    console.log(json);
  }
 
  render() {
    console.log(this.props.name+ " child render");
    // const { count1 } = this.state;
    const{name, location, avatar_url} = this.state.userInfo;
    return (
      // getting data from props using this keyword
      <div className="user-card">
        <h2>name: {name}</h2>
        <h3>Location :{location}</h3>
        <img src={avatar_url}></img>
      </div>
    );
  }
}
export default UserClass;
