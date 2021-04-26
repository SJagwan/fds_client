import { viewAllItemConstant } from "./viewAllItemConstant";

const initial_State = {
    items: [],
    error: undefined,
  };
  export const viewAllItemReducer = (state = initial_State, action) => {
    switch (action.type) {
      case viewAllItemConstant.Start:
        return {
          ...state,
        };
      case viewAllItemConstant.Success:
        return {
          ...state,
          items: action.payload,
          error:action.error
        };
      case viewAllItemConstant.Failure:
        return {
          ...state,
          items: action.payload,
          error: action.error,
        };
      default:
        return state;
    }
  };