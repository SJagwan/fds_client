import { addItemConstant } from "./addItemConstant";

const initial_State = {
  item: undefined,
  error: undefined,
};
export const addItemReducer = (state = initial_State, action) => {
  switch (action.type) {
    case addItemConstant.Start:
      return {
        ...state,
      };
    case addItemConstant.Success:
      return {
        ...state,
        item: action.payload,
        error:action.error
      };
    case addItemConstant.Failure:
      return {
        ...state,
        item: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
