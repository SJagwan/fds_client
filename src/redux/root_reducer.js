import { combineReducers } from "redux";
import { addCustomerReducer } from "./customer/addCustomer/addCustomerReducer";


const rootReducer=combineReducers({
    addCustomer: addCustomerReducer
})