/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */

import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
   const {resData} = props;
   const{name,cloudinaryImageId,cuisines,avgRating,sla}= resData?.info;

   return(
      <div className='m-2 p-2 w-[250px] h-[400px] rounded-lg bg-gray-300 hover:bg-gray-400 cursor-pointer flex flex-col' >
         <img 
            alt='restaurant-image' 
            className='rounded-lg w-full h-[200px] object-cover' 
            src={CDN_URL + cloudinaryImageId}
         />
         <div className="flex flex-col flex-grow">
            <h3 className="font-bold py-4 text-lg truncate">{name}</h3>
            <h4 className="text-sm overflow-hidden text-ellipsis">{cuisines.join(", ")}</h4>
            <h4 className="mt-2">{avgRating} Rating</h4>
            <p className="mt-auto ">Delivery Time: {sla?.deliveryTime} Min</p>
         </div>
      </div>
   )
}

export default RestaurantCard;