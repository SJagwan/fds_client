import { viewItemRequest } from "../../../services/itemService"
import { viewItemConstant } from "./viewItemConstant"

export const viewItemStart=()=>({
    type:viewItemConstant.Start,
    payload:undefined,
    error:undefined
})
export const viewItemSuccess=(data)=>({
    type:viewItemConstant.Success,
    payload:data,
    error:undefined
})
export const viewItemFailure=(error)=>({
    type:viewItemConstant.Failure,
    payload:undefined,
    error:error
    
})

export const viewItemThunk=(data)=>{
    return (dispatch)=>{
        const objAction =viewItemStart();
        dispatch(objAction)  
        const promise = viewItemRequest(data);
        promise
          .then((response) => {
            let objActionSuccess= viewItemSuccess(response.data);
            dispatch(objActionSuccess)
          })
          .catch((error) => {
            let objActionFailure = viewItemFailure(error.response.data)
            dispatch(objActionFailure)
          });
        
    }
}