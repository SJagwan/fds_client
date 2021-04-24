import { combineReducers } from "redux";
import { addRestaurantReducer } from "./restaurant/addRestaurant/addRestaurantReducer";
import { viewRestaurantByIdReducer } from "./restaurant/viewRestaurantById/viewRestaurantByIdReducer";
import { viewRestaurantByLocationReducer } from "./restaurant/viewRestaurantByLocation/viewRestaurantByLocationReducer";


export const rootReducer=combineReducers({
    addRestaurant:addRestaurantReducer,
    viewRestaurantById:viewRestaurantByIdReducer,
    viewRestaurantByLocation:viewRestaurantByLocationReducer
})