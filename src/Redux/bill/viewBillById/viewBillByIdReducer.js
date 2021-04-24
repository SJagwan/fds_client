import { viewBillByIdConstant } from "./viewBillByIdConstant"

const initial_State = {
    bill:undefined,
    error:undefined

}
export const viewBillByIdReducer=(state=initial_State,action)=>{
    switch(action.type){
        case  viewBillByIdConstant.Start:
            return {
                ...state,
            };
        case viewBillByIdConstant.Success:
            return{
                    ...state,
                    bill: action.payload,
                    error: action.error
                };
        case viewBillByIdConstant.Failure:
            return{
                    ...state,
                        error: action.error,
                        bill: action.payload
                    };
            default:
            return state
                        
    }
}