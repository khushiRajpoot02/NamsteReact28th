import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";
const Grocey = lazy(()=>import ("./components/Grocery"))

// updating userContext
const App = () => {
  const[userName, setUserName] = useState();
useEffect(()=>{
  userInfo = {
     name: "Khushi Kuamri"
  } 
  setUserName(userInfo.name);
}, []);

  return (
    <UserContext.Provider  value={{loggedInUser:userName, setUserName}}>
    <div>
      <Header />
     <Outlet/>
    </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children:[
      {
        path : "/",
        element : <Body/>,
      },
      {
        path : "/about",
        element : <About/>,
     },
     {
        path : "/contact",
        element : <Contact/>
     },
     {
      path: "/restaurant/:resId",
      element: <RestaurantMenu />,
    },
    {
      path : "/grocery",
      element : <Suspense fallback = {<h1>Loading...</h1>}>
      <Grocey/>
      </Suspense>
    }
    ],
    errorElement : <Error/>
 },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
