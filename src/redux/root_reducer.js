import { combineReducers } from "redux";
import { addCustomerReducer } from "./customer/addCustomer/addCustomerReducer";
import { updateCustomerReducer } from "./customer/updateCustomer/updateCustomerReducer";
import { viewCustomerReducer } from "./customer/viewCustomer/viewCustomerReducer";

export const rootReducer=combineReducers({
    addCustomer: addCustomerReducer,
    updateCustomer: updateCustomerReducer,
    viewCustomer: viewCustomerReducer
})