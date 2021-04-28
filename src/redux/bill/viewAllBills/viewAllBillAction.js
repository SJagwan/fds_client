import { viewAllBillRequest} from "../../../services/billDetailsServices";
import { viewAllBillConstant } from "./viewAllBillConstant";

export const viewAllBillStart=()=>({
    type:viewAllBillConstant.Start,
    payload:undefined,
    error:undefined
})

export const viewAllBillSuccess=(data)=>({

    type:viewAllBillConstant.Success,
    payload:data,
    error:undefined
})

export const viewAllBillFailure=(error)=>({
    type:viewAllBillConstant.Failure,
    payload:undefined,
    error:error
})
export const viewAllBillThunk=(customerId)=>{
    return(dispatch)=>{
        const objAction=viewAllBillStart();
        dispatch(objAction) 
        const promise=viewAllBillRequest(customerId);
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=viewAllBillSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      console.log(error.response.data);
      let objActionFailure=viewAllBillFailure(error.message)
      dispatch(objActionFailure)

    })
    
    }
}