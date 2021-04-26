import { viewBillByIdRequest } from "../../../services/billDetailsServices";
import { viewBillByIdConstant } from "./viewBillByIdConstant";

export const viewBillByIdStart=()=>({
    type:viewBillByIdConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewBillByIdSuccess=(data)=>({

    type:viewBillByIdConstant.Success,
    payload:data,
    error:undefined
})

export const viewBillByIdFailure=(error)=>({
    type:viewBillByIdConstant.Failure,
    payload:undefined,
    error:error
})
export const viewBillByIdThunk=(data)=>{
    return(dispatch)=>{
        const objAction=viewBillByIdStart();
        dispatch(objAction) 
        const promise=viewBillByIdRequest(data.billId);
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=viewBillByIdSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      console.log(error.response.data);
      let objActionFailure=viewBillByIdFailure(error.message)
      dispatch(objActionFailure)

    })
    
    }
}