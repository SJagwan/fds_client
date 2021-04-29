import { viewItembyCategoryRequest } from "../../../services/itemService"
import { viewItemByCategoryConstant } from "./viewItemByCategoryConstant"

export const viewItemByCategoryStart=()=>({
    type:viewItemByCategoryConstant.Start,
    payload:undefined,
    error:undefined
})
export const viewItemByCategorySuccess=(data)=>({
    type:viewItemByCategoryConstant.Success,
    payload:data,
    error:undefined
})
export const viewItemByCategoryFailure=(error)=>({
    type:viewItemByCategoryConstant.Failure,
    payload:undefined,
    error:error
    
})

export const viewItemByCategoryThunk=(data)=>{
    return (dispatch)=>{
        const objAction =viewItemByCategoryStart();
        dispatch(objAction)  
        const promise = viewItembyCategoryRequest(data);
        promise
          .then((response) => {
            console.log(response.data);
            let objActionSuccess= viewItemByCategorySuccess(response.data);
            dispatch(objActionSuccess)
          })
          .catch((error) => {
            console.log(error.message);
            let objActionFailure = viewItemByCategoryFailure(error.message)
            dispatch(objActionFailure)
          });
        
    }
}