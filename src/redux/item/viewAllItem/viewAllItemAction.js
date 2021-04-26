import { viewAllItemRequest } from "../../../services/itemService"
import { viewAllItemConstant } from "./viewAllItemConstant"

export const viewAllItemStart=()=>({
    type:viewAllItemConstant.Start,
    payload:undefined,
    error:undefined
})
export const viewAllItemSuccess=(data)=>({
    type:viewAllItemConstant.Success,
    payload:data,
    error:undefined
})
export const viewAllItemFailure=(error)=>({
    type:viewAllItemConstant.Failure,
    payload:undefined,
    error:error 
})

export const viewAllItemThunk=()=>{
    return (dispatch)=>{
        const objAction =viewAllItemStart();
        dispatch(objAction)  
        const promise = viewAllItemRequest();
        promise
          .then((response) => {
            let objActionSuccess= viewAllItemSuccess(response.data);
            dispatch(objActionSuccess)
          })
          .catch((error) => {
            let objActionFailure = viewAllItemFailure(error.message)
            dispatch(objActionFailure)
          });
        
    }
}