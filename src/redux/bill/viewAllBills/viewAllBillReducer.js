import { viewAllBillConstant } from "./viewAllBillConstant";

const initial_State = {
  bills:[],
  error: undefined,
};
export const viewAllBillReducer = (state = initial_State, action) => {
  switch (action.type) {
    case viewAllBillConstant.Start:
      return {
        ...state,
      };
    case viewAllBillConstant.Success:
      return {
        ...state,
        bills: action.payload,
        error: action.error,
      };
    case viewAllBillConstant.Failure:
      return {
        ...state,
        error: action.error,
        bills: action.payload,
      };
    default:
      return state;
  }
};
