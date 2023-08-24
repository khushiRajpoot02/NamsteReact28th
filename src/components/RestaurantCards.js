import { CDN_URL } from "../utils/constaints";
const RestaurantCards = (props) => {
    const {res}=props
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = res?.info
    return (
      <div className="res-card">
        <img
          alt="mehgana-food"
          className="res-img"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };
  export default RestaurantCards;
