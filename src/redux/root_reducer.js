import { combineReducers } from "redux";

import { addCustomerReducer } from "./customer/addCustomer/addCustomerReducer";
import { updateCustomerReducer } from "./customer/updateCustomer/updateCustomerReducer";
import { viewCustomerReducer } from "./customer/viewCustomer/viewCustomerReducer";

import { addItemReducer } from "./item/addItem/addItemReducer";
import { addItemByRestaurantReducer } from "./item/addItemToRestaurant/addItemToRestaurantReducer";
import { viewItemReducer } from "./item/viewItem/viewItemReducer";
import { viewItemByCategoryReducer } from "./item/viewItemByCategory/viewItemByCategoryReducer";
import { viewItemByNameReducer } from "./item/viewItemByName/viewItemByNameReducer";


import { addRestaurantReducer } from "./restaurant/addRestaurant/addRestaurantReducer";
import { viewRestaurantByIdReducer } from "./restaurant/viewRestaurantById/viewRestaurantByIdReducer";
import { viewRestaurantByLocationReducer } from "./restaurant/viewRestaurantByLocation/viewRestaurantByLocationReducer";

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
    addOrder:addOrderReducer,
    addRestaurant:addRestaurantReducer,
    viewRestaurantById:viewRestaurantByIdReducer,
    viewRestaurantByLocation:viewRestaurantByLocationReducer,
    addItem:addItemReducer,
    addItemByRestaurant:addItemByRestaurantReducer,
    viewItem:viewItemReducer,
    viewItemByCategory:viewItemByCategoryReducer,
    viewItemByName:viewItemByNameReducer,
    addCustomer: addCustomerReducer,
    updateCustomer: updateCustomerReducer,
    viewCustomer: viewCustomerReducer


})