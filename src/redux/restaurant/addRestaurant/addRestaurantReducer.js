import { addRestaurantConstant } from "./addRestaurantConstant"

const initial_State={
    restaurant:undefined,
    error:undefined
}

export const addRestaurantReducer=(state=initial_State,action)=>{
 switch(action.type){
  case addRestaurantConstant.Fetch_Add_Restaurant_Start:
   return{
       ...state,
   } ;
   case addRestaurantConstant.Fetch_Add_Restaurant_Success:
       return{
           ...state,
           restaurant: action.payload,
       };
    case addRestaurantConstant.Fetch_Add_Restaurant_Failure:
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