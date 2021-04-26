import { viewAllRestaurant } from "../../../services/restaurantService"
import { viewAllRestaurantConstant } from "./viewAllRestaurantConstant"

export const viewAllRestaurantStart=()=>({
    type:viewAllRestaurantConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewAllRestaurantSuccess=(data)=>({
    type:viewAllRestaurantConstant.Success,
    payload:data,
    error:undefined,
})

export const viewAllRestaurantFailure=(error)=>({
    type:viewAllRestaurantConstant.Failure,
    payload:undefined,
    error:error
})

export const viewAllRestaurantThunk=()=>{
    return(dispatch)=>{
        const objAction=viewAllRestaurantStart();
        dispatch(objAction)


        const promise=viewAllRestaurant();
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=viewAllRestaurantSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      
      let objActionFailure=viewAllRestaurantFailure(error.message);
      dispatch(objActionFailure);
    })
    }
}