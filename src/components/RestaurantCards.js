import { CDN_URL } from "../utils/constaints";
const RestaurantCards = (props)=>{
    const {res} = props
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = res?.info
    return (
      <div className="m-4 p-4 w-[250px] rounded-md  bg-gray-100 hover:shadow-gray-400">
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





  export default RestaurantCards;
