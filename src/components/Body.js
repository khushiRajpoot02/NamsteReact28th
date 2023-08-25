import RestaurantCards from "./RestaurantCards";
import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils/constaints";
import Shimmer from "./Shimmer";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responce = await fetch(swiggy_api_URL);
    const json = await responce.json();
    // console.log(json);
    // checking API data---
    let checkData =
      json.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;
    function checkingData(checkData) {
      for (let i = 0; i < checkData.data.cards.length; i++) {
        let findData =
          json.data.cards[i].card.card.gridElements.infoWithStyle.restaurants;
        if (findData != undefined) {
          return findData;
        }
      }
    }
    checkData = checkingData(json);
    setListOfRestaurants(checkData);
    setFilteredRestaurant(checkData);
  };
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
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCards res={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
