import { addItemConstant } from "./addItemConstant";

export const addItemStart=()=>({
    type:addItemConstant.Fetch_add_Item_Start
})
export const addItemSuccess=(data)=>({
    type:addItemConstant.Fetch_add_Item_Success,
    payload:data
})
export const addItemFailure=(error)=>({
    type:addItemConstant.Fetch_add_Item_Failure,
    payload:error
})