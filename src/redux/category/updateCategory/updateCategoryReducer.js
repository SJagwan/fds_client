import { updateCategoryConstant } from "./updateCategoryConstant";

const initial_State = {
  category: undefined,
  error: undefined,
};

export const updateCategoryReducer = (state = initial_State, action) => {
  switch (action.type) {
    case updateCategoryConstant.Start:
      return {
        ...state,
      };
    case updateCategoryConstant.Success:
      return {
        ...state,
        category: action.payload,
        error:action.error
      };
    case updateCategoryConstant.Failure:
      return {
        ...state,
        category: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
