import { addCategoryConstant } from "./addCategoryConstant";

export const addCategoryStart=()=>({
    type:addCategoryConstant.Fetch_Add_Category_Start
})

export const addCategorySuccess=(data)=>({
    type:addCategoryConstant.Fetch_Add_Category_Success,
    payload:data
})

export const addCategoryFailure=(error)=>({
    type:addCategoryConstant.Fetch_Add_Category_Failure,
    payload:error
})
