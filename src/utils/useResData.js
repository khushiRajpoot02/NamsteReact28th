// import { useState, useEffect } from "react";
// const useResData = (swiggy_api_URL)=>{

//     const [ListOfRestaurants, setListOfRestaurants] = useState([]);
//     const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//     useEffect(() => {
//         fetchData();
//       }, []);
//     async function fetchData() {
//         // handle the error using try... catch
//         try {
//           const response = await fetch(swiggy_api_URL);
//           const json = await response.json();
    
//           // initialize checkJsonData() function to check Swiggy Restaurant data
//           async function checkJsonData(jsonData) {
//             for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    
//               // initialize checkData for Swiggy Restaurant data
//               let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
//               // if checkData is not undefined then return it
//               if (checkData !== undefined) {
//                 return checkData;
//               }
//             }
//           }
    
//           // call the checkJsonData() function which return Swiggy Restaurant data
//           const resData = await checkJsonData(json);
    
//           // update the state variable restaurants with Swiggy API data
//           setListOfRestaurants(resData);
//           setFilteredRestaurant(resData);
//         } catch (error) {
//           console.log(error);
//         }
//       }
//       return [ListOfRestaurants,filteredRestaurant];
// }
// export default useResData;
