import { viewAllCategoryConstant } from "./viewAllCategoryConstant";

const initial_State = {
  categories: [],
  error: undefined,
};

export const viewAllCategoryReducer = (state = initial_State, action) => {
  switch (action.type) {
    case viewAllCategoryConstant.Start:
      return {
        ...state,
      };
    case viewAllCategoryConstant.Success:
      return {
        ...state,
        categories: action.payload,
        error:action.error,
      };
    case viewAllCategoryConstant.Failure:
      return {
        ...state,
        categories: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};