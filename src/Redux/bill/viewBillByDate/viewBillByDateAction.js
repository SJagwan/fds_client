import { viewBillByDateRequest } from "../../../services/billDetailsServices"
import { viewBillByDateConstant } from "./viewBillByDateConstant"


export const viewBillByDateStart=()=>({
    type:viewBillByDateConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewBillByDateSuccess=(data)=>({

    type:viewBillByDateConstant.Success,
    payload:data,
    error:undefined
})

export const viewBillByDateFailure=(error)=>({
    type:viewBillByDateConstant.Failure,
    payload:undefined,
    error:error
})
export const viewBillByDateThunk=(data)=>{
    return(dispatch)=>{
        const objAction=viewBillByDateStart();
        dispatch(objAction) 
        const promise=viewBillByDateRequest(data.startDate, data.endDate);
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=viewBillByDateSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      console.log(error.response.data);
      let objActionFailure=viewBillByDateFailure(error.response.data)
      dispatch(objActionFailure)

    })
    
    }
}