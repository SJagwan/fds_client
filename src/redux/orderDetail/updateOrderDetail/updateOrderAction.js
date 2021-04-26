import { updateOrderRequest } from "../../../services/OrderDetailService";
import { updateOrderConstant } from "./updateOrderConstant";

export const updateOrderStart = () => ({
  type: updateOrderConstant.Start,
  payload: undefined,
  error: undefined,
});

export const updateOrderSuccess = (data) => ({
  type: updateOrderConstant.Success,
  payload: data,
  error: undefined,
});

export const updateOrderFailure = (error) => ({
  type: updateOrderConstant.Failure,
  payload: undefined,
  error: error,
});

export const updateOrderThunk = (data) => {
  return (dispatch) => {
    const objAction = updateOrderStart();
    dispatch(objAction);
    const promise = updateOrderRequest(data);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = updateOrderSuccess(response.data);
        dispatch(objActionSuccess);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.response.data);
        let objActionFailure = updateOrderFailure(error.response.data);
        dispatch(objActionFailure);
      });
  };
};
