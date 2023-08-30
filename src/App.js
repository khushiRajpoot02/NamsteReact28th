import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { lazy, Suspense } from "react";
const Grocey = lazy(()=>import ("./components/Grocery"))
const App = () => {
  return (
    <div>
      <Header />
     <Outlet/>
    </div>
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
