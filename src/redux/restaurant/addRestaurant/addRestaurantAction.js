import { addRestaurantConstant } from "./addRestaurantConstant";

export const addRestaurantStart=()=>({
    type:addRestaurantConstant.Fetch_Add_Restaurant_Start
})

export const addRestaurantSuccess=()=>({
    typr:addRestaurantConstant.Fetch_Add_Restaurant_Success,
    payload:data
})

export const addRestaurantFailure=()=>({
    type:addRestaurantConstant.Fetch_Add_Restaurant_Failure,
    payload:error
})