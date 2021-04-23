import { addCategoryConstant } from "./addCategoryConstant";

initial_State = {
  category: undefined,
  error: undefined,
};

export const addCategoryReducer = (state = initial_State, action) => {
  switch (action.type) {
    case addCategoryConstant.Fetch_Add_Category_Start:
      return {
        ...state,
      };
    case addCategoryConstant.Fetch_Add_Category_Success:
      return {
        ...state,
        category: action.payload,
      };
    case addCategoryConstant.Fetch_Add_Category_Failure:
      return {
        ...state,
        error: payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
