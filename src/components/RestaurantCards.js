import { CDN_URL } from "../utils/constaints";
const RestaurantCards = (props)=>{
    const {res} = props
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = res?.info
    return (
      <div className="m-4 p-4 w-[250px] rounded-md  bg-gray-100 cursor-pointer">
        <img
          alt="mehgana-food"
          className="res-img"
          src={CDN_URL+cloudinaryImageId}/>
        <h3 className = "font-bold py-3">{name}</h3>
        <h4 className="break-words">{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };
// Higher Order Component
// input--> RestaurantCards--->output==>ResturauntCardPromoted
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
