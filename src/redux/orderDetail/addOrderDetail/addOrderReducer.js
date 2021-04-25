import { addOrderConstant } from "./addOrderConstant";

const initial_State = {
  orderDetail: undefined,
  error: undefined,
};

export const addOrderReducer = (state = initial_State, action) => {
  switch (action.type) {
    case addOrderConstant.Start:
      return {
        ...state,
      };
    case addOrderConstant.Success:
      return {
        ...state,
        orderDetail: action.payload,
        error: action.error,
      };
    case addOrderConstant.Failure:
      return {
        ...state,
        orderDetail: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
