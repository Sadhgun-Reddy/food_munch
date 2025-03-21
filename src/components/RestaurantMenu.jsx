/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex]= useState(null);

    // Show shimmer while loading or if data isn't available
    if (resInfo === null || resInfo === undefined || !resInfo.cards) {
        return <Shimmer />;
    }

    // Optional chaining with default values
    const { name = "", cuisines = [], costForTwoMessage = "" } = 
        resInfo?.cards[2]?.card?.card?.info || {};

    const categories = 
        resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (c) => c.card?.card?.["@type"] === 
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) || [];

    // console.log(categories);
    

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h2 className="font-bold text-lg">Menu</h2>
            <p className="font-bold text-lg"> 
                {cuisines.join(', ')} - {costForTwoMessage}
            </p>
            {categories.map((category,index)=>(
                <RestaurantCategory 
                key={category?.card?.card.title} 
                data={category?.card?.card} 
                showItems={index === showIndex?true:false} 
                setShowIndex={()=>setShowIndex(index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;