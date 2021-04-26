import { addRestaurantConstant } from "./addRestaurantConstant";

const initial_State = {
  restaurant: undefined,
  error: undefined,
};

export const addRestaurantReducer = (state = initial_State, action) => {
  switch (action.type) {
    case addRestaurantConstant.Start:
      return {
        ...state,
      };
    case addRestaurantConstant.Success:
      return {
        ...state,
        restaurant: action.payload,
        error: action.error,
      };
    case addRestaurantConstant.Failure:
      return {
        ...state,
        restaurant: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
