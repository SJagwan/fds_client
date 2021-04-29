import { viewRestaurantByLocation } from "../../../services/restaurantService"
import { viewRestaurantByLocationConstant } from "./viewRestaurantByLocationComponent"

export const viewRestaurantByLocationStart=()=>({
    type:viewRestaurantByLocationConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewRestaurantByLocationSuccess=(data)=>({
    type:viewRestaurantByLocationConstant.Success,
    payload:data,
    error:undefined,
})

export const viewRestaurantByLocationFailure=(error)=>({
    type:viewRestaurantByLocationConstant.Failure,
    payload:undefined,
    error:error
})

export const viewRestaurantByLocationThunk=(state)=>{
    return(dispatch)=>{
        const objAction=viewRestaurantByLocationStart();
        dispatch(objAction)
        
        const pincode=state.pincode

    const promise=viewRestaurantByLocation(pincode);
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=viewRestaurantByLocationSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      let objActionFailure=viewRestaurantByLocationFailure(error.message);
      dispatch(objActionFailure);
    })
    }
}