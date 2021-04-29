import { viewItembyNameRequest } from "../../../services/itemService"
import { viewItemByNameConstant } from "./viewItemByNameConstant"

export const viewItemByNameStart=()=>({
    type:viewItemByNameConstant.Start,
    payload:undefined,
    error:undefined
})
export const viewItemByNameSuccess=(data)=>({
    type:viewItemByNameConstant.Success,
    payload:data,
    error:undefined
})
export const viewItemByNameFailure=(error)=>({
    type:viewItemByNameConstant.Failure,
    payload:undefined,
    error:error
    
})

export const viewItemByNameThunk=(data)=>{
    return (dispatch)=>{
        const objAction =viewItemByNameStart();
        dispatch(objAction)  
        const promise = viewItembyNameRequest(data);
        promise
          .then((response) => {
            console.log(response.data);
            let objActionSuccess= viewItemByNameSuccess(response.data);
            dispatch(objActionSuccess)
          })
          .catch((error) => {
            console.log(error.message);
            let objActionFailure = viewItemByNameFailure(error.message)
            dispatch(objActionFailure)
          });
        
    }
}