import { viewOrderByCustomerIdConstant } from "./viewOrderByCustomerConstant";



const initial_State = {
  orderDetails: [],
  error: undefined,
};

export const viewOrderByCustomerIdReducer = (state = initial_State, action) => {
  switch (action.type) {
    case viewOrderByCustomerIdConstant.Start:
      return {
        ...state,
      };
    case viewOrderByCustomerIdConstant.Success:
      return {
        ...state,
        orderDetails: action.payload,
        error: action.error,
      };
    case viewOrderByCustomerIdConstant.Failure:
      return {
        ...state,
        orderDetails: action.payload,
        error: action.error,
      };
    default:
      return state;
  }
};
