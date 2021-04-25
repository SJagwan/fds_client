import { combineReducers } from "redux";
import { addCategoryReducer } from "./category/addCategory/addCategoryReducer";
import { updateCategoryReducer } from "./category/updateCategory/updateCategoryReducer";
import { viewAllCategoryReducer } from "./category/viewAllCategory/viewAllCategoryReducer";
import { viewCategoryReducer } from "./category/viewCategory/viewCategoryReducer";


export const rootReducer=combineReducers({
    addCategory : addCategoryReducer,
    updateCategory : updateCategoryReducer,
    viewCategory : viewCategoryReducer,
    viewAllCategory : viewAllCategoryReducer
})