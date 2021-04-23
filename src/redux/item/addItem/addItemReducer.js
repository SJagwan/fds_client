import { addItemConstant } from "./addItemConstant";

initial_State = {
  item: undefined,
  error: undefined,
};
export const addItemReducer = (state = initial_State, action) => {
  switch (action.type) {
    case addItemConstant.Fetch_add_Item_Start:
      return {
        ...state,
      };
    case addItemConstant.Fetch_add_Item_Success:
      return {
        ...state,
        item: action.payload,
      };
    case addItemConstant.Fetch_add_Item_Failure:
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
