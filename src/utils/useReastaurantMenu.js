import { useState, useEffect } from "react";
const useRestaurantMenu = (
    resId, 
    swiggy_menu_api_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
    )=>{
    const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
      getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
    }, []);
    
    async function getRestaurantInfo() {
      try {
        const response = await fetch(swiggy_menu_api_URL+ resId);
        const json = await response.json();
    //console.log(json);
        // Set restaurant data
        const restaurantData = json?.data?.cards?.map(x => x.card)?.
                               find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
        setRestaurant(restaurantData);
    
        // Set menu item data
        // const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
        //                       groupedCard?.cardGroupMap?.REGULAR?.
        //                       cards?.map(x => x.card?.card)?.
        //                       filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
        //                       map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];

        const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
   groupedCard?.cardGroupMap?.REGULAR?.
   cards?.map(x => x.card?.card)?.
   filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY) || [];
        
        // const uniqueMenuItems = [];
        // menuItemsData.forEach((item) => {
        //   if (!uniqueMenuItems.find(x => x.id === item.id)) {
        //     uniqueMenuItems.push(item);
        //   }
        // })
        setMenuItems(menuItemsData);
      } catch (error) {
        setMenuItems([]);
        setRestaurant(null);
        console.log(error);
      }
    }
    return [restaurant, menuItems];  
}
export default useRestaurantMenu;
//export const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";==>menu
//export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";==>above heading(res)
//
//const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(x => x.card?.card)?. filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];