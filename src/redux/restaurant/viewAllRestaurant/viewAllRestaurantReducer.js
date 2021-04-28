import { viewAllRestaurantConstant } from "./viewAllRestaurantConstant";

const initial_State = {
  restaurants: [],
  error: undefined,
};

export const viewAllRestaurantReducer = (state = initial_State, action) => {
  switch (action.type) {
    case viewAllRestaurantConstant.Start:
      return {
        ...state,
      };
    case viewAllRestaurantConstant.Success:
      return {
        ...state,
        restaurants: action.payload,
        error: action.error,
      };
    case viewAllRestaurantConstant.Failure:
      return {
        ...state,
        restaurants: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
