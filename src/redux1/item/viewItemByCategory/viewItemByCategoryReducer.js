import { viewItemByCategoryConstant } from "./viewItemByCategoryConstant";

const initial_State = {
    item: undefined,
    error: undefined,
  };
  export const viewItemByCategoryReducer = (state = initial_State, action) => {
    switch (action.type) {
      case viewItemByCategoryConstant.Start:
        return {
          ...state,
        };
      case viewItemByCategoryConstant.Success:
        return {
          ...state,
          item: action.payload,
          error:action.error
        };
      case viewItemByCategoryConstant.Failure:
        return {
          ...state,
          item: action.payload,
          error: action.error,
        };
      default:
        return state;
    }
  };