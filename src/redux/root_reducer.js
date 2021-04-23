import { combineReducers } from "redux";
import { addRestaurantReducer } from "./restaurant/addRestaurant/addRestaurantReducer";


const rootReducer=combineReducers({
    addRestaurant:addRestaurantReducer
})