import { viewBillByIdConstant } from "./viewBillByIdConstant";

export const viewBillByIdStart=()=>({
    type:viewBillByIdConstant.Fetch_View_Bill_Start
})

export const viewBillByIdSuccess=(data)=>({

    type:viewBillByIdConstant.Fetch_View_Bill_Success,
    payload:data
})

export const viewBillByIdFailure=(error)=>({
    type:viewBillByIdConstant.Fetch_View_Bill_Failure,
    payoad:error
})