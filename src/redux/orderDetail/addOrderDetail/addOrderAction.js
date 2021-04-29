import { addOrderRequest } from "../../../services/OrderDetailService";
import { Empty_Cart_Action } from "../../foodCart/itemToCart/itemToCartAction";
import { addOrderConstant } from "./addOrderConstant";

export const addOrderStart = () => ({
  type: addOrderConstant.Start,
  payload: undefined,
  error: undefined,
});

export const addOrderSuccess = (data) => ({
  type: addOrderConstant.Success,
  payload: data,
  error: undefined,
});

export const addOrderFailure = (error) => ({
  type: addOrderConstant.Failure,
  payload: undefined,
  error: error,
});

export const addOrderThunk = (customerId) => {
  return (dispatch) => {
    const objAction = addOrderStart();
    dispatch(objAction);
    const promise = addOrderRequest(customerId);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = addOrderSuccess(response.data);
        dispatch(objActionSuccess);
        dispatch(Empty_Cart_Action());
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = addOrderFailure(error.message);
        dispatch(objActionFailure);
      });
  };
};
