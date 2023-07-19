import React from "react";
import  ReactDOM  from "react-dom/client";
//learning react elemnts and components
// let's convert elemnts to components
const JsxHeading1 = ()=>{
    return <h1>Converting React elemnts to components</h1>;
}
const jsxHeading = <h1 className="heading">Hey this is jsx!</h1>
// creating components
const Title = ()=>{
    return(
        <div className="main">
        <h3>Here is the title components</h3>
        <h3>Let's add this into HeadingComponents</h3>
        <JsxHeading1/>
        </div>
    )
}
const CheckingBrackets = ()=>(
    <h1>Hey this is smallBracket used code!</h1>
)
const HeadingComponents = ()=>{
    return(
        <div id = "container">
        <h2>This is heading components</h2>
         <Title/>
         <CheckingBrackets/>
        </div>
    ) 
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponents/>);
