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
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/constaints";
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

console.log(menuItems);
  if (restaurant === null) return <Shimmer />;
  return (
    // <div className="text-center">
    //   <div className="restaurant-summary">
    //   <div className="">
    //   <img
    //   className=""
    //   src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
    //   alt={restaurant?.name}
    // />
    //   </div> 
    //     <div className="restaurant-summary-details">
    //       <h2 className="restaurant-title">{restaurant?.name}</h2>
    //       <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
    //       <div className="restaurant-details">
    //         <div
    //           className="restaurant-rating"
    //           style={
    //             restaurant?.avgRating < 4
    /*              ? { backgroundColor: "var(--light-red)" }*/
    //               : restaurant?.avgRating === "--"
    /*               ? { backgroundColor: "white", color: "black" }*/
    //               : { color: "white" }
    //           }
    //         >
    //           <i className="fa-solid fa-star"></i>
    //           <span>{restaurant?.avgRating}</span>
    //         </div>
    //         <div className="restaurant-rating-slash">|</div>
    //         <div>{restaurant?.sla?.slaString}</div>
    //         <div className="restaurant-rating-slash">|</div>
    //         <div>{restaurant?.costForTwoMessage}</div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="restaurant-menu-content">
    //     <div className="menu-items-container">
    //       <div className="menu-title-wrap">
    //         <h3 className="menu-title">Recommended</h3>
    //         <p className="menu-count">{menuItems.length} ITEMS</p>
    //       </div>
    //       <div className="menu-items-list">
    //         {menuItems.map((item) => (
    //           <div className="menu-item" key={item?.id}>
    //             <div className="menu-item-details">
    //               <h3 className="item-title">{item?.name}</h3>
    //               <p className="item-cost">
    //                 {item?.price > 0
    /*                 ? new Intl.NumberFormat("en-IN", {
    */
    //                       style: "currency",
    //                       currency: "INR",
    //                     }).format(item?.price / 100)
    //                   : " "}
    //               </p>
    //               <p className="item-desc">{item?.description}</p>
    //             </div>
    //             <div className="menu-img-wrapper">
    //               {item?.imageId && (
    //                 <img
    //                   className="menu-item-img"
    //                   src={ITEM_IMG_CDN_URL + item?.imageId}
    //                   alt={item?.name}
    //                 />
    //               )}
    //               <button className="add-btn"> ADD +</button>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="text-center">
    <h2 className="font-bold my-4 text-2xl">{restaurant?.name}</h2>
    <p className = "">
    {restaurant?.cuisines?.join(",")} - {restaurant?.costForTwoMessage}
    </p>
    {/*categories accordian */}
    {menuItems.map((category)=>(
       <RestaurantCategory key={category.title}  data={category}/>
    ))}
    </div>
  );
};
export default RestaurantMenu;
