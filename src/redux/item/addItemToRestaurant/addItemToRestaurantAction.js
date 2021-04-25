import { addItemToRestaurantRequest } from "../../../services/itemService"
import { addItemToRestaurantConstant } from "./addItemToRestaurantConstant"

export const addItemToRestaurantStart=()=>({
    type:addItemToRestaurantConstant.Start,
    payload:undefined,
    error:undefined
})
export const addItemToRestaurantSuccess=(data)=>({
    type:addItemToRestaurantConstant.Success,
    payload:data,
    error:undefined
})
export const addItemToRestaurantFailure=(error)=>({
    type:addItemToRestaurantConstant.Failure,
    payload:undefined,
    error:error
    
})
export const addItemToRestaurantThunk=(data)=>{
    return (dispatch)=>{
        const objAction =addItemToRestaurantStart();
        dispatch(objAction)
        const promise = addItemToRestaurantRequest(data);
        promise
          .then((response) => {
            console.log(response.data);
            let objActionSuccess= addItemToRestaurantSuccess(response.data);
            dispatch(objActionSuccess)
          })
          .catch((error) => {
            console.log(error.message);
            console.log(error.response.data);
            let objActionFailure = addItemToRestaurantFailure(error.response.data)
            dispatch(objActionFailure)
          });
        
    }
}