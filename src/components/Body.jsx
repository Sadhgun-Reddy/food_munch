import RestaurantCard from './RestaurantCard';
import '../index.css'
import {useEffect, useState} from 'react'
import Shimmer from './Shimmer';


const Body = ()=>{
   const [listOfRes, setListOfRes] = useState([]);
   const [filteredListOfRes,setFilteredListOfRes] = useState([])

   const[searchText,setSearchText]=useState("");

   useEffect(()=>{
      fetchData()
   },[]);
   
   const fetchData = async()=>{
const data=await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6528341&lng=83.1605913&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      console.log(json)
     
      setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
      setFilteredListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
      console.log(listOfRes)
   };

    return listOfRes.length!==0? (
       <div className='body'>
         <div className='filter'>
            <div className='search'>
               <input type='text' className='search-box' value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value);
               }}/>
               <button onClick={()=>{
                  console.log(searchText);

                  const filteredListOfRes=listOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredListOfRes(filteredListOfRes)
               }}>Search</button>
            </div>
            <button className='filter-btn' onClick={
               ()=>{const filteredListOfRes=listOfRes.filter((restaurant)=>restaurant.info.avgRating>4.0);
                  setListOfRes(filteredListOfRes);
               }}>
               Top Rated Restaurants
            </button>
         </div>
          <div className='res-container'> 
             {
                filteredListOfRes?.map(restaurant=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
             }
          </div>
       </div>
    ):<Shimmer/>
 }
export default Body;