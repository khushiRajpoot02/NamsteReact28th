import { useEffect } from "react";

 const RestaurantMenu = ()=>{
    useEffect(()=>{
        fetchRestaurant();
    }, []);
const fetchRestaurant =async ()=>{
     const resData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7272832&lng=77.3370089&restaurantId=32128&catalog_qa=undefined&submitAction=ENTER");
     const resJson = await resData.json();
     console.log(resJson);

}
    return(
        <div>
        <h1>Restaurant Name</h1>
        <h2>Menu</h2>
        <ul>
        <li>Disesh</li>
        <li>Disesh</li>
        <li>Disesh</li>
        <li>Disesh</li>
        </ul>
        </div>
    )
}
export default RestaurantMenu;