/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
   const {resData} = props;

   const{name,cloudinaryImageId,cuisines,avgRating,sla}= resData?.info;


   return(
      <div className='m-2 p-2 w-[250px] rounded-lg bg-gray-300 hover:bg-gray-800 cursor-pointer' >
         <img alt='restaurant-image' className='rounded-lg' src={CDN_URL+ cloudinaryImageId}/>
         <h3 className="font-bold py-4 ">{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating} Rating</h4>
         <p>Delivery Time: {sla?.deliveryTime} Min</p>
      </div>
   )
}

export default RestaurantCard;  