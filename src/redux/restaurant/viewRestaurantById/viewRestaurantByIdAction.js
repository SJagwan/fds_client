import { viewRestaurantById } from "../../../services/restaurantService"
import { viewRestaurantByIdConstant } from "./viewRestaurantByIdComponent"

export const viewRestaurantByIdStart=()=>({
    type:viewRestaurantByIdConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewRestaurantByIdSuccess=(data)=>({
    type:viewRestaurantByIdConstant.Success,
    payload:data,
    error:undefined,
})

export const viewRestaurantByIdFailure=(error)=>({
    type:viewRestaurantByIdConstant.Failure,
    payload:undefined,
    error:error
})

export const viewRestaurantByIdThunk=(state)=>{
    return(dispatch)=>{
        const objAction=viewRestaurantByIdStart();
        dispatch(objAction)

        const restaurantId=state.restaurantId


        const promise=viewRestaurantById(restaurantId);
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=viewRestaurantByIdSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      let objActionFailure=viewRestaurantByIdFailure(error.message);
      dispatch(objActionFailure);
    })
    }
}