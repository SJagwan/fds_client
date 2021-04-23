import { addCustomerConstant } from "./addCustomerConstant";

export const addCustomerStart=()=>({
    type:addCustomerConstant.Fetch_Add_Customer_Start
})

export const addCustomerSuccess=(data)=>({
    type:addCustomerConstant.Fetch_Add_Customer_Success,
    payload:data
})

export const addCustomerFailure=(data)=>({
    type:addCustomerConstant.Fetch_Add_Customer_Failure,
    payload:data
})
