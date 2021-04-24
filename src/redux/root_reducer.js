import { combineReducers } from "redux";
import { addRestaurantReducer } from "./restaurant/addRestaurant/addRestaurantReducer";


export const rootReducer=combineReducers({
    addRestaurant:addRestaurantReducer
})