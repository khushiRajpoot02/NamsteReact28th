import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
// import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";
import Cart from "./Redux/Cart";
import SignIn from "./components/SignIn"
// const Grocey = lazy(()=>import ("./components/Grocery"))
// updating userContext
const App = () => {
  return (
   <Provider store = {appStore}>
    <div>
      <Header />
     <Outlet/>
    </div>
    </Provider>
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
      path: "/cart",
      element: <Cart />,
    },
   
     {
      // path="groups" element={[<Component1/>,<Component2/>]} 
      path: "/restaurant/:resId?",
      element:<RestaurantMenu/>   
    },
    // {
    //   // path="groups" element={[<Component1/>,<Component2/>]} 
    //   path: "/restaurant",
    //   element:<RestaurantMenu/>
        
        
    // },
    {
      path : "/login",
      element : <SignIn/>
    }
    
    ],
    errorElement : <Error/>
 },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
