import AddRestaurant from "../components/restaurant/AddRestaurant";
import ViewByLocationRestaurant from "../components/restaurant/ViewByLocationRestaurant";
import ViewRestaurantById from "../components/restaurant/ViewRestaurantById";

const RestaurantPage = () => {
    return ( 
        <div>
            {<AddRestaurant/>}
            {/* {<UpdateRestaurant/>} */}
            {/* <ViewRestaurantById/> */}
            {/* {<ViewByLocationRestaurant/>} */}
        </div>
     );
}
 
export default RestaurantPage;