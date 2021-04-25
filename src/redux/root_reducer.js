import { combineReducers } from "redux";
import { addItemReducer } from "./item/addItem/addItemReducer";
import { addItemByRestaurantReducer } from "./item/addItemToRestaurant/addItemToRestaurantReducer";
import { viewItemReducer } from "./item/viewItem/viewItemReducer";
import { viewItemByCategoryReducer } from "./item/viewItemByCategory/viewItemByCategoryReducer";
import { viewItemByNameReducer } from "./item/viewItemByName/viewItemByNameReducer";

export const rootReducer = combineReducers({
    addItem:addItemReducer,
    addItemByRestaurant:addItemByRestaurantReducer,
    viewItem:viewItemReducer,
    viewItemByCategory:viewItemByCategoryReducer,
    viewItemByName:viewItemByNameReducer

})