import { combineReducers } from "redux";
import { addItemReducer } from "./item/addItem/addItemReducer";

export const rootReducer = combineReducers({
    addItem:addItemReducer

})