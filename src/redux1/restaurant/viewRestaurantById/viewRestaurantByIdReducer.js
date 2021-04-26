import { viewRestaurantByIdConstant } from "./viewRestaurantByIdComponent";

const initial_State = {
    restaurant: undefined,
    error: undefined,
  };
  
  export const viewRestaurantByIdReducer = (state = initial_State, action) => {
    switch (action.type) {
      case viewRestaurantByIdConstant.Start:
        return {
          ...state,
        };
      case viewRestaurantByIdConstant.Success:
        return {
          ...state,
          restaurant: action.payload,
          error: action.error,
        };
      case viewRestaurantByIdConstant.Failure:
        return {
          ...state,
          restaurant: action.payload,
          error: action.error,
        };
      default:
        return state;
    }
  };