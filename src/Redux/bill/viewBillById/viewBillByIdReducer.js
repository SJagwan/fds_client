import { viewBillByIdConstant } from "./viewBillByIdConstant"

const initial_State = {
    bill=undefined,
    error:undefined

}
export const viewBillByIdReducer=(state=initial_State,action)=>{
    switch(action.type){
        case  viewBillByIdConstant.Fetch_View_Bill_Start:
            return {
                ...state,
            };
        case viewBillByIdConstant.Fetch_View_Bill_Success:
            return{
                    ...state,
                    bill: action.payload,
                };
        case viewBillByIdConstant.Fetch_View_Bill_Failure:
            return{
                    ...state,
                        error: payload.error,
                    };
            default:
            return{
                    ...state,
                        };
    }
}