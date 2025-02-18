/* eslint-disable no-unsafe-optional-chaining */
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId)
    console.log(resInfo)
    if (resInfo === null)return <Shimmer/>;

    const{name,cuisines,costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info;
    // console.log(resInfo?.cards[2]?.card?.card?.info)
    const {itemCards}= resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log(itemCards)


    return (
        <div className="menu">
            <h1 className="font-bold">{name}</h1>
            <h2 className="font-bold">Menu</h2>
            <ul>
                <li>{cuisines.join(',')}</li>
                <li>{costForTwoMessage}</li>
                {itemCards.map((item)=>(<li key={item.card.info.id}> {item.card.info.name}-{"Rs."}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;