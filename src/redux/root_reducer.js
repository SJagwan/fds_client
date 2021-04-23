import { combineReducers } from "redux";
import { updateOrderReducer } from "./orderDetail/updateOrderDetail/updateOrderReducer";


 export const rootReducer=combineReducers({
    updateOrder : updateOrderReducer
})