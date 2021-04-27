import DisplayRestaurant from "./DisplayRestaurant";

const DisplayRestaurantList = ({restaurantList}) => {
    return ( 
        <div >
            {
                restaurantList.map((restaurant)=> <div key={restaurant.restaurantId}> <DisplayRestaurant restaurant={restaurant}/></div>)
            }
        </div>
     );
}
 
export default DisplayRestaurantList;