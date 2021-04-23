import { updateOrderConstant } from "./updateOrderConstant";

export const updateOrderStart=()=>({
    type:updateOrderConstant.Fetch_Update_Order_Start
})

export const updateOrderSuccess=(data)=>({
    type:updateOrderConstant.Fetch_Update_Order_Success,
    payload:data
})

export const updateOrderFailure=(error)=>({
    type:updateOrderConstant.Fetch_Update_Order_Failure,
    payload:error
})
