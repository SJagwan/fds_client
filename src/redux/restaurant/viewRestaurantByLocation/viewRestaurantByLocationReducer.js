import { viewRestaurantByLocationConstant } from "./viewRestaurantByLocationComponent";

const initial_State = {
    restaurant: undefined,
    error: undefined,
  };
  
  export const viewRestaurantByLocationReducer = (state = initial_State, action) => {
    switch (action.type) {
      case viewRestaurantByLocationConstant.Start:
        return {
          ...state,
        };
      case viewRestaurantByLocationConstant.Success:
        return {
          ...state,
          restaurant: action.payload,
          error: action.error,
        };
      case viewRestaurantByLocationConstant.Failure:
        return {
          ...state,
          restaurant: action.payload,
          error: action.error,
        };
      default:
        return state;
    }
  };