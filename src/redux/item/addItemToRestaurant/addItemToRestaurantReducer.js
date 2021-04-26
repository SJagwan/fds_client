import { addItemToRestaurantConstant } from "./addItemToRestaurantConstant";

const initial_State = {
  restaurant: undefined,
  error: undefined,
};
export const addItemByRestaurantReducer = (state = initial_State, action) => {
  switch (action.type) {
    case addItemToRestaurantConstant.Start:
      return {
        ...state,
      };
    case addItemToRestaurantConstant.Success:
      return {
        ...state,
        restaurant: action.payload,
        error:action.error
      };
    case addItemToRestaurantConstant.Failure:
      return {
        ...state,
        restaurant: action.payload,
        error: action.error,
      };
    default:
        return state;
  }
};
