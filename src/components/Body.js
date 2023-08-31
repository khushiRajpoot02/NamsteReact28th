import RestaurantCards, {withPromotedLabel} from "./RestaurantCards";
import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils/constaints";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCards";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const restarountCardPromoted = withPromotedLabel(RestaurantCards);

  useEffect(() => {
    fetchData();
  }, []);
//console.log(ListOfRestaurants);
  async function fetchData() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);
      // update the state variable restaurants with Swiggy API data
      setListOfRestaurants(resData);
      setFilteredRestaurant(resData);
    } catch (error) {
      console.log(error);
    }
  }
  const checkOnlineStatus = useOnlineStatus();
  if(checkOnlineStatus===false)return <h1>Looks you are offline!! Please check your internet connection</h1>;
  return ListOfRestaurants.length === 0 ? (
       <Shimmer/>
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className=" border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className="px-4 py-2 bg-green-100 m-2 rounded-lg"
            onClick={() => {
              const filteredData = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick = {() => {
            const filteredData = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredData);
          }}
        >
          Top Rated restaurant
        </button>
        </div>
        
      </div>
      <div  className="flex flex-wrap content-stretch ">
        
{/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
{filteredRestaurant.map((restaurant) => {
  return (
    <Link
      to={"/restaurant/" + restaurant?.info?.id}
      key={restaurant?.info?.id}
    >

    {restaurant.info.promoted ? 
      <restarountCardPromoted res = {restaurant} /> 
      : <RestaurantCards res = {restaurant} /> }
     
    </Link>
  );
})}
      </div>
    </div>
  )
};
export default Body;

 