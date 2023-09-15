// import { useEffect, useState } from "react";

//  const RestaurantMenu = ()=>{
//     const[latitude, setLatitude] = useState("");
//     const[longitude, setLongitude] = useState("");
//     // const resMenu = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8996676&lng=77.4826837&restaurantId=405178&catalog_qa=undefined&submitAction=ENTER";
// useEffect(()=>{
//     if("geolocation" in navigator){
//         navigator.geolocation.getCurrentPosition((position)=>{
//             setLatitude(position.coords.latitude);
//             setLongitude(position.coords.longitude);
//          })
//     }
//     else{
//         console.log("geolocation is not available in the browser");
//     }

// }, []);
// console.log(latitude, longitude);
// const newApi = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=405178&catalog_qa=undefined&submitAction=ENTER`;
//     useEffect(()=>{
//         fetchRestaurant();
//     }, []);
// const fetchRestaurant =async ()=>{
//      const resData = await fetch(newApi);
//      const resJson = await resData.json();
//     //  console.log(resJson);

// }
//     return(
//         <div>
//         <h1>Restaurant Name</h1>
//         <h2>Menu</h2>
//         <ul>
//         <li>Disesh</li>
//         <li>Disesh</li>
//         <li>Disesh</li>
//         <li>Disesh</li>
//         </ul>
//         </div>
//     )
// }
// export default RestaurantMenu;

// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constaints";
import { useEffect, useState } from "react";
import useRestaurantMenu from "../utils/useReastaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId); // call useParams and get value of restaurant id using object destructuring
  // created custom hook useRestaurantMenu
  const [restaurant, menuItems] = useRestaurantMenu(
    resId,
    swiggy_menu_api_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY
  );
  console.log(menuItems);
  const [showIndex, setShowIndex] = useState(null);
  if (restaurant === null) return <Shimmer />;
  return (
    <div className="text-center">
    <h2 className="font-bold my-4 text-2xl">{restaurant?.name}</h2>
    <p className = "">
    {restaurant?.cuisines?.join(",")} - {restaurant?.costForTwoMessage}
    </p>
    {/*categories accordian */}
    {menuItems.map((category, idx)=>(
       <RestaurantCategory key={category.title} 
        data={category}
        // controling ResCategory via lefting the state
       showItems = {idx === showIndex ? true : false} 
       setShowIndex = {()=>setShowIndex(idx)}
       />
    ))}
    </div>
  );
};
export default RestaurantMenu;
