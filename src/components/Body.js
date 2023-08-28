import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils/constaints";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const responce = await fetch(swiggy_api_URL);
  //   const json = await responce.json();
  //   // console.log(json);
  //   // checking API data---
  //   let checkData =
  //     json.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;
  //   function checkingData(checkData) {
  //     for (let i = 0; i < checkData.data.cards.length; i++) {
  //       let findData =
  //         json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants;
  //       if (findData != undefined) {
  //         return findData;
  //       }
  //     }
  //   }
  //   checkData = checkingData(json);
  //   setListOfRestaurants(checkData);
  //   setFilteredRestaurant(checkData);
  // };

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
















  if (ListOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredData);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
        
{/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
{filteredRestaurant.map((restaurant) => {
  return (
    <Link
      to={"/restaurant/" + restaurant?.info?.id}
      key={restaurant?.info?.id}
    >
      <RestaurantCards res = {restaurant} />
    </Link>
  );
})}

      </div>
    </div>
  );
};
export default Body;

 