import { addCategoryConstant } from "./addCategoryConstant";

const initial_State = {
  category: undefined,
  error: undefined,
};

export const addCategoryReducer = (state = initial_State, action) => {
  switch (action.type) {
    case addCategoryConstant.Start:
      return {
        ...state,
      };
    case addCategoryConstant.Success:
      return {
        ...state,
        category: action.payload,
        error:action.error
      };
    case addCategoryConstant.Failure:
      return {
        ...state,
        category: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
