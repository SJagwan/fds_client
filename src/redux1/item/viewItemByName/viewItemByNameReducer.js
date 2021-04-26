import { viewItemByNameConstant } from "./viewItemByNameConstant";

const initial_State = {
    item: [],
    error: undefined,
  };
  export const viewItemByNameReducer = (state = initial_State, action) => {
    switch (action.type) {
      case viewItemByNameConstant.Start:
        return {
          ...state,
        };
      case viewItemByNameConstant.Success:
        return {
          ...state,
          item: action.payload,
          error:action.error
        };
      case viewItemByNameConstant.Failure:
        return {
          ...state,
          item: action.payload,
          error: action.error,
        };
      default:
        return state;
    }
  };