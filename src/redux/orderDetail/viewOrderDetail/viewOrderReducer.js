import { viewOrderConstant } from "./viewOrderConstant";


const initial_State = {
  orderDetail: undefined,
  error: undefined,
};

export const viewOrderReducer = (state = initial_State, action) => {
  switch (action.type) {
    case viewOrderConstant.Start:
      return {
        ...state,
      };
    case viewOrderConstant.Success:
      return {
        ...state,
        orderDetail: action.payload,
        error: action.error,
      };
    case viewOrderConstant.Failure:
      return {
        ...state,
        orderDetail: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
