import { addItemRequest } from "../../../services/itemService";
import { addItemConstant } from "./addItemConstant";

export const addItemStart=()=>({
    type:addItemConstant.Start,
    payload:undefined,
    error:undefined
})
export const addItemSuccess=(data)=>({
    type:addItemConstant.Success,
    payload:data,
    error:undefined
})
export const addItemFailure=(error)=>({
    type:addItemConstant.Failure,
    payload:undefined,
    error:error
    
})

export const addItemThunk=(state)=>{
    return (dispatch)=>{
        const objAction =addItemStart();
        dispatch(objAction)
        const data = {
            itemName:state.itemName,
            catId:state.catId,
            quantity:state.quantity,
            cost:state.cost,
            restaurantId:state.restaurantId,
          };
        const promise = addItemRequest(data);
        promise
          .then((response) => {
            console.log(response.data);
            let objActionSuccess= addItemSuccess(response.data);
            dispatch(objActionSuccess)
          })
          .catch((error) => {
            console.log(error.message);
            console.log(error.response.data);
            let objActionFailure = addItemFailure(error.response.data)
            dispatch(objActionFailure)
          });
        
    }
}