import { updateOrderConstant } from "./updateOrderConstant";

const initial_State = {
  orderDetail: undefined,
  error: undefined,
};

export const updateOrderReducer = (state = initial_State, action) => {
  switch (action.type) {
    case updateOrderConstant.Start:
      return {
        ...state,
      };
    case updateOrderConstant.Success:
      return {
        ...state,
        orderDetail: action.payload,
        error: action.error,
      };
    case updateOrderConstant.Failure:
      return {
        ...state,
        orderDetail: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
