import { addRestaurantConstant } from "./addRestaurantConstant";

export const addRestaurantStart=()=>({
    type:addRestaurantConstant.Fetch_Add_Restaurant_Start,
    payload:undefined,
    error:undefined
})

export const addRestaurantSuccess=()=>({
    typr:addRestaurantConstant.Fetch_Add_Restaurant_Success,
    payload:data,
    error;undefined,
})

export const addRestaurantFailure=()=>({
    type:addRestaurantConstant.Fetch_Add_Restaurant_Failure,
    payload:undefined,
    error:undefined
})