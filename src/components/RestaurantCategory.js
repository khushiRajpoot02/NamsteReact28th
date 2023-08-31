import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({data})=>{
   const[showItems, setShowitems] = useState(false);
const handleClick= ()=>{
   setShowitems(!showItems);
}

 return(
    <div>
 {/*Header*/ }
 <div className="cursor-pointer w-6/12 mx-auto my-4 bg-white shadow-lg p-4" onClick={handleClick}>
 <div className="flex justify-between">
 <span>{data.title} ({data.itemCards.length})</span>
 <span>⬇️</span>
 </div>
 { showItems && <ItemList items={data.itemCards}/>}
 
 </div>
    </div>
 )
}
export  default RestaurantCategory;