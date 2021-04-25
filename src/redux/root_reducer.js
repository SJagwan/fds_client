import { combineReducers } from "redux";
import { itemToCartReducer } from "./foodCart/itemToCart/itemToCartReducer"
import { addOrderReducer } from "./orderDetail/addOrderDetail/addOrderReducer";
import { updateOrderReducer } from "./orderDetail/updateOrderDetail/updateOrderReducer";
import { viewOrderByCustomerIdReducer } from "./orderDetail/viewOrderByCustomer/viewOrderByCustomerReducer";
import {viewOrderReducer} from "./orderDetail/viewOrderDetail/viewOrderReducer";


 export const rootReducer=combineReducers({
    updateOrder : updateOrderReducer,
    viewOrder:viewOrderReducer,
    viewOrderByCustomer:viewOrderByCustomerIdReducer,
    itemToCart:itemToCartReducer,
    addOrder:addOrderReducer
})