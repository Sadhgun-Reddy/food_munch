import RestaurantCard from './RestaurantCard';
import '../index.css'
import {useEffect, useState} from 'react'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Body = ()=>{
   const [listOfRes, setListOfRes] = useState([]);
   const [filteredListOfRes,setFilteredListOfRes] = useState([])

   const[searchText,setSearchText]=useState("");

   useEffect(()=>{
      fetchData()
   },[]);
   
   const fetchData = async()=>{
   const data=await  fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.4937761&lng=78.4017033&carousel=true&third_party_vendor=1")
      const json = await data.json();
      //console.log(json)
     
      setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
      setFilteredListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
      //console.log(listOfRes)
   };

   const onlineStatus = useOnlineStatus();

   if (onlineStatus === false)
      return(
         <h1>Offline</h1>
      );

    return listOfRes.length!==0? (
       <div className='body'>
         <div className='filter flex'>
            <div className='search m-4 p-4 '>
               <input type='text' className='border-solid border-2 border-black' value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value);
               }}/>
               <button className='px-4 py-2 bg-green-100 m-4 rounded-lg' onClick={()=>{
                  // console.log(searchText);

                  const filteredListOfRes=listOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredListOfRes(filteredListOfRes)
               }}>Search</button>
            </div>
            <div className='search m-4 p-4 flex items-center'>
               <button className='px-4 py-2 bg-gray-200 rounded-lg' onClick={
                  ()=>{const filteredListOfRes=listOfRes.filter((res)=>res.info.avgRating>4.2);
                     setFilteredListOfRes(filteredListOfRes);
                  }}>
                  Top Rated Restaurants
               </button>
            </div>
         </div>
          <div className='flex flex-wrap'> 
             {/* {
                filteredListOfRes?.map(restaurant=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
             } */}
             {
                filteredListOfRes?.map(restaurant=>
                <Link key={restaurant.info.id} to={"/restaurants/" +restaurant.info.id }> <RestaurantCard  resData={restaurant}/> </Link>)
             }
          </div>
       </div>
    ):<Shimmer/>
 }
export default Body;