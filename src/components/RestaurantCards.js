import { useContext } from "react";
import { CDN_URL } from "../utils/constaints";
import UserContext from "../utils/UserContext";
const RestaurantCards = (props)=>{
  const loginUser = useContext(UserContext);
  console.log(loginUser);
    const {res} = props
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, areaName} = res?.info
  
    return (
      <div className="card">
      <img 
          alt="mehgana-food"
          className="res-img"
          src={CDN_URL+cloudinaryImageId}/>
        <h3 className = "font-bold py-3">{name}</h3>
        <h5 className="break-words">{cuisines.join(",")}</h5>
        <span>
        <h4
          style={
            avgRating < 4
              ? { backgroundColor: "red" }
              : avgRating === "--"
                ? { backgroundColor: "pink", color: "white" }
                : { backgroundColor: "green", color: "black"}
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>•</h4>
        <h4>{areaName}</h4>
        <h4>•</h4>
        <h4>{costForTwo ? costForTwo : '₹200 for two'}</h4>
      </span>
      </div>
    );
  };
// // Higher Order Component
// // input--> RestaurantCards--->output==>ResturauntCardPromoted
 export const withPromotedLabel = (RestaurantCards)=>{
  return (props)=>{
    return(
    <div>
    <label className="absolute bg-black text-white m-2 p-2 rounded-md">Promoted</label>,
    <RestaurantCards {...props}/>
    </div>
    )
  }
}
export default RestaurantCards;
