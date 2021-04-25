import { viewOrderByIdRequest } from "../../../services/orderDetailService";
import { viewOrderConstant } from "./viewOrderConstant";

export const viewOrderStart = () => ({
  type: viewOrderConstant.Start,
  payload: undefined,
  error: undefined,
});

export const viewOrderSuccess = (data) => ({
  type: viewOrderConstant.Success,
  payload: data,
  error: undefined,
});

export const viewOrderFailure = (error) => ({
  type: viewOrderConstant.Failure,
  payload: undefined,
  error: error,
});

export const viewOrderThunk = (data) => {
  return (dispatch) => {
    const objAction = viewOrderStart();
    dispatch(objAction);
    const orderId=data.orderId;
    const promise = viewOrderByIdRequest(orderId);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = viewOrderSuccess(response.data);
        dispatch(objActionSuccess);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.response.data);
        let objActionFailure = viewOrderFailure(error.response.data);
        dispatch(objActionFailure);
      });
  };
};
