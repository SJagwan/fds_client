import { viewBillByDateConstant } from "./viewBillByDateConstant";


const initial_State = {
    bill:undefined,
    error:undefined

}
export const viewBillByDateReducer=(state=initial_State,action)=>{
    switch(action.type){
        case  viewBillByDateConstant.Start:
            return {
                ...state,
            };
        case viewBillByDateConstant.Success:
            return{
                    ...state,
                    bill: action.payload,
                    error: action.error
                };
        case viewBillByDateConstant.Failure:
            return{
                    ...state,
                        error: action.error,
                        bill: action.payload
                    };
            default:
            return state
                        
    }
}