import { viewCategoryConstant } from "./viewCategoryConstant";

const initial_State = {
  category: undefined,
  error: undefined,
};

export const viewCategoryReducer = (state = initial_State, action) => {
  switch (action.type) {
    case viewCategoryConstant.Start:
      return {
        ...state,
      };
    case viewCategoryConstant.Success:
      return {
        ...state,
        category: action.payload,
        error:action.error,
      };
    case viewCategoryConstant.Failure:
      return {
        ...state,
        category: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};