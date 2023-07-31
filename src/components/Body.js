import RestaurantCards from "./RestaurantCards";
import resList from "../utils/mockData";
import { useState } from "react";
// learning of react hoocks 
// how does useState works and how to declare react variable 
const Body = () => {
/*  const arr = [5, 2, 4, 7, 8];
  function double(x){
    return x*2;
  }
  const output = arr.map(double);
  console.log(output);
  const filterOu = arr.filter((x)=>{
    return x > 2;
  })
  console.log(filterOu);
  // another map function 
  const arr1 = [10, 20, 30, 40, 50];
  const result = arr1.map((y)=>(
                y -5
  ) )
  console.log(result);
  relist array hai uspe map fun use krke uske saare cards ko dispaly krna h 

  {resList.map((z)=>(
     <RestaurantCards propvar = {z} key = {z.info.data}/>
 )
         )}

   { const filtereddata = resList.filter((z)=>(
     z.info.rating > 4;
 )
 setresList(filtereddata);// ye hume filtered data dedegaaa......
         )} 
         */      

const [resData , setresDat]  = useState(resList);
    return (
      <div className="body">
       <button className="search-btn"
        onClick={()=>{
          const filteredData= resData.filter((res)=>
          res.info.avgRating > 3.5
          );
          setresDat(filteredData);
        }
        }
        >Search-btn</button>
      
        <div className="res-container">
          
         { resData.map((restaurant)=>(
          <RestaurantCards res={restaurant} 
          key={restaurant.info.id}
          />
         ))}
        </div>
      </div>
    );
  };
  export default Body;
