import { viewItemConstant } from "./viewItemConstant";

const initial_State = {
    item: undefined,
    error: undefined,
  };
  export const viewItemReducer = (state = initial_State, action) => {
    switch (action.type) {
      case viewItemConstant.Start:
        return {
          ...state,
        };
      case viewItemConstant.Success:
        return {
          ...state,
          item: action.payload,
          error:action.error
        };
      case viewItemConstant.Failure:
        return {
          ...state,
          item: action.payload,
          error: action.error,
        };
      default:
        return state;
    }
  };