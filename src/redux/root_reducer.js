import { combineReducers } from "redux";
import { addCategoryReducer } from "./category/addCategory/addCategoryReducer";


export const rootReducer=combineReducers({
    addCategory : addCategoryReducer
})