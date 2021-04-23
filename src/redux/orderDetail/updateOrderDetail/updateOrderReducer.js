import { updateOrderConstant } from "./updateOrderConstant";

const initial_State = {
  orderDetail: undefined,
  error: undefined,
};

export const updateOrderReducer = (state = initial_State, action) => {
  switch (action.type) {
    case updateOrderConstant.Fetch_Update_Order_Start:
      return {
        ...state,
      };
    case updateOrderConstant.Fetch_Update_Order_Success:
      return {
        ...state,
        orderDetail: action.payload,
      };
    case updateOrderConstant.Fetch_Update_Order_Failure:
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
